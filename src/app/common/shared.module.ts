import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorSummaryComponent } from './selector-summary/selector-summary.component';
import { ShortenerPipe } from './pipe/shortener.pipe';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CurrencyFormatterPipe } from './pipe/currency-formatter.pipe';
import { AdditionsFormatterPipe } from './pipe/additions-formatter.pipe';
import { RouterModule } from '@angular/router';
import { PriceValidatorDirective } from './validator/price.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { TimePeriodInputComponent } from './time-period-input/time-period-input.component';
import { FormsModule } from '@angular/forms';
import { SelectComboComponent } from './select-combo/select-combo.component';

@NgModule({
  declarations: [
    AdditionsFormatterPipe,
    CurrencyFormatterPipe,
    HeaderBarComponent,
    PriceValidatorDirective,
    SelectorSummaryComponent,
    ShortenerPipe,
    AlertComponent,
    TimePeriodInputComponent,
    SelectComboComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    AdditionsFormatterPipe,
    CurrencyFormatterPipe,
    HeaderBarComponent,
    NgbModule,
    PriceValidatorDirective,
    SelectorSummaryComponent,
    ShortenerPipe,
    AlertComponent,
    TimePeriodInputComponent,
    SelectComboComponent,
  ],
})
export class SharedModule { }
