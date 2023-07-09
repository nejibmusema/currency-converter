export interface CurrencySymbol {
  symbol: string;
  country: string;
}

export interface ConversionPanelInput {
  amount: number;
  from: string;
  to: string;
  result?: number;
}
