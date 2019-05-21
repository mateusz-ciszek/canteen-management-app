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
import { PriceComponent } from './price/price.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { CommentComponent } from './comments-section/comment/comment.component';
import { DecimalDirective } from './validator/decimal.directive';

@NgModule({
  declarations: [
    AdditionsFormatterPipe,
    AlertComponent,
    CommentComponent,
    CommentsSectionComponent,
    CurrencyFormatterPipe,
    DecimalDirective,
    HeaderBarComponent,
    PriceComponent,
    PriceValidatorDirective,
    SelectComboComponent,
    SelectorSummaryComponent,
    ShortenerPipe,
    TimePeriodInputComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    AdditionsFormatterPipe,
    AlertComponent,
    CommentsSectionComponent,
    CurrencyFormatterPipe,
    HeaderBarComponent,
    NgbModule,
    PriceComponent,
    PriceValidatorDirective,
    SelectComboComponent,
    SelectorSummaryComponent,
    ShortenerPipe,
    TimePeriodInputComponent,
    DecimalDirective,
  ],
})
export class SharedModule { }
