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
import { ModalService } from './services/modal.service';
import { DomService } from './services/dom.service';
import { SharedModule } from './common/shared.module';
import { MenuCreateSummaryComponent } from './main/menu/create/summary/menu-create-summary.component';
import { MenuCreateFoodComponent } from './main/menu/create/food/menu-create-food.component';
import { CreateAdditionComponent } from './main/menu/food/create/create-addition/create-addition.component';
import { DayOffModalComponent } from './main/employee/schedule/day-off-modal/day-off-modal.component';

const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: () => localStorage.getItem('token'),
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    // for entryComponents, as those cannot be declared in submodules
    CreateAdditionComponent,
    MenuCreateSummaryComponent,
    MenuCreateFoodComponent,
    DayOffModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot(jwtModuleOptions),
    SharedModule,
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
    CreateAdditionComponent,
    DayOffModalComponent,
  ],
})
export class AppModule {}
