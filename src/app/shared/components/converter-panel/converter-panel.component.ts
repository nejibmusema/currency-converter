import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ConversionPanelInput,
  CurrencySymbol,
} from 'src/app/shared/models/conversion.model';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  @Input() currencySymbol: CurrencySymbol[];
  @Input() conversionPanelData: ConversionPanelInput;
  @Output() onCurrencyRequest = new EventEmitter<any>();
  exchangeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.exchangeForm = this.formMaker();
  }

  formMaker() {
    return this.formBuilder.group({
      amount: [this.conversionPanelData.amount, [Validators.required]],
      from: [this.conversionPanelData.from, [Validators.required]],
      to: [this.conversionPanelData.to, [Validators.required]],
    });
  }

  onSubmit() {
    this.onCurrencyRequest.emit(this.exchangeForm.value);
  }

  onSwap() {
    let from = this.exchangeForm.get('from')?.value;
    let to = this.exchangeForm.get('to')?.value;

    this.exchangeForm.get('from')?.setValue(to);
    this.exchangeForm.get('to')?.setValue(from);
  }
}
