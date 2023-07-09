import { Component, OnInit } from '@angular/core';
import {
  ConversionPanelInput,
  CurrencySymbol,
} from 'src/app/shared/models/conversion.model';
import { ConversionService } from 'src/app/pages/home/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currencySymbol: CurrencySymbol[];
  conversionPanelData: ConversionPanelInput = {
    amount: 1,
    from: 'EUR',
    to: 'USD',
  };

  constructor(private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.getCurrencyList();
    //this.currencyRequestHandler(this.conversionPanelData);
  }

  getCurrencyList() {
    this.conversionService.getSymbols().subscribe((symbols) => {
      this.currencySymbol = Object.keys(symbols).map((key) => {
        return { symbol: key, country: symbols[key] };
      });
    });
  }

  currencyRequestHandler(event: ConversionPanelInput) {
    this.conversionService
      .latestExchange(event.from, event.to)
      .subscribe((result) => {
        this.conversionPanelData = {
          amount: event.amount,
          from: event.from,
          to: event.to,
          result: result[event.to] * event.amount,
        };
      });
  }
}
