import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { StockIndex } from 'src/app/modals/stock-index.modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stocks: StockIndex[] = [];
  selectedIndex = 'nse';
  index: StockIndex;
  isLoading = true;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(res => {
      this.stocks[0] = { title: 'nifty 50', subtitle: 'nse' };
      this.stocks[1] = { title: 'sensex', subtitle: 'bse' };
      this.stocks[0].data = res.data[0];
      this.stocks[1].data = res.data[1];
      this.changeIndex();
      this.isLoading = false;
    }, er => {
      console.log(er);
    });
  }

  changeIndex() {
    this.index = this.stocks.find(stock => stock.subtitle === this.selectedIndex);
  }
}
