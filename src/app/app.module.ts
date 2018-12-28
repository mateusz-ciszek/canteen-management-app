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

const jwtModuleOptions: JwtModuleOptions = {
  config: {
    tokenGetter: () => localStorage.getItem('token'),
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    LoginComponent,
    MenuListComponent,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
