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
import { DayOffModalComponent } from './main/employee/schedule/day-off-modal/day-off-modal.component';
import { CoalescingComponentFactoryResolver } from './services/coalescing-component-factory-resolver.service';
import { DateHttpParserInterceptor } from './interceptors/date-http-parser.interceptor';
import { ConfigService } from './services/config.service';
import { ConfigGuard } from './services/guard/config-guard';
import { ModuleGuard } from './services/guard/module.guard';
import { WorkerService } from './services/worker.service';

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
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DateHttpParserInterceptor,
      multi: true,
    },
    AuthGuard,
    DomService,
    ModalService,
    CoalescingComponentFactoryResolver,
    ConfigService,
    ConfigGuard,
    ModuleGuard,
    WorkerService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DayOffModalComponent,
  ],
})
export class AppModule {
  constructor(coalescingResolver: CoalescingComponentFactoryResolver) {
    coalescingResolver.init();
  }
}
