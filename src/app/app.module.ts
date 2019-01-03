import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppendBaseUrlInterceptor } from './interceptors/append-base-url.interceptor';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { MenuListComponent } from './main/menu/list/menu-list.component';
import { HeaderBarComponent } from './common/header-bar/header-bar.component';
import { MenuDetailsComponent } from './main/menu/details/menu-details.component';
import { ShortenerPipe } from './common/pipe/shortener.pipe';
import { CurrencyFormatterPipe } from './common/pipe/currency-formatter.pipe';
import { FoodDetailsComponent } from './main/menu/food/detail/food-details.component';
import { SelectorSummaryComponent } from './common/selector-summary/selector-summary.component';
import { MenuCreateComponent } from './main/menu/create/menu-create.component';
import { MenuCreateSummaryComponent } from './main/menu/create/summary/menu-create-summary.component';
import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';
import { MenuCreateFoodComponent } from './main/menu/create/food/menu-create-food.component';

const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: () => localStorage.getItem('token'),
  }
};

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatterPipe,
    FoodDetailsComponent,
    HeaderBarComponent,
    LoginComponent,
    MenuCreateComponent,
    MenuCreateSummaryComponent,
    MenuDetailsComponent,
    MenuListComponent,
    SelectorSummaryComponent,
    ShortenerPipe,
    MenuCreateFoodComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot(jwtModuleOptions),
  ],
  providers: [
    // NOTE: HttpInterceptors are all disabled on a LoginComponent
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppendBaseUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthErrorInterceptor,
      multi: true,
    },
    AuthGuard,
    DomService,
    ModalService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MenuCreateSummaryComponent,
    MenuCreateFoodComponent,
  ],
})
export class AppModule {}
