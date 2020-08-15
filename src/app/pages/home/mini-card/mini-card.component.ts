import { Component, OnInit, Input } from '@angular/core';
import { StockIndex } from 'src/app/modals/stock-index.modal';


@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  @Input() stock: StockIndex;
  constructor() { }

  ngOnInit(): void {
  }

}
