import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorSummaryComponent } from './selector-summary/selector-summary.component';
import { ShortenerPipe } from './pipe/shortener.pipe';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CurrencyFormatterPipe } from './pipe/currency-formatter.pipe';
import { DateTimePipe } from './pipe/date-time.pipe';
import { AdditionsFormatterPipe } from './pipe/additions-formatter.pipe';
import { RouterModule } from '@angular/router';
import { PriceValidatorDirective } from './validator/price.directive';

@NgModule({
  declarations: [
    AdditionsFormatterPipe,
    CurrencyFormatterPipe,
    DateTimePipe,
    HeaderBarComponent,
    PriceValidatorDirective,
    SelectorSummaryComponent,
    ShortenerPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AdditionsFormatterPipe,
    CurrencyFormatterPipe,
    DateTimePipe,
    HeaderBarComponent,
    PriceValidatorDirective,
    SelectorSummaryComponent,
    ShortenerPipe,
  ],
})
export class SharedModule { }
