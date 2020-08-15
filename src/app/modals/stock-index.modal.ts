export class StockIndex {
  constructor(

    public title: string,
    public subtitle: string,
    public data?: {
      Date: Date,
      Open: number,
      High: number,
      Low: number,
      Close: number,
      'Adj Close': number,
      Volume: number,
      Diff: number
    }
  ) { }
}
