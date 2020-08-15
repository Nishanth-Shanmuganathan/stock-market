import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

const chartSalesData = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#FBFBFB',
            zeroLineColor: 'white'
          },
          ticks: {}
        }
      ]
    }
  },
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Volume(in crores)',
        data: []
      }
    ]
  }
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartSalesData = chartSalesData;
  organization = 'reliance';
  year = '2020';
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.fetchOrganization();
  }

  createChart() {
    const chartSales = document.getElementById('chart-sales');
    const salesChart = new Chart(chartSales, {
      type: 'line',
      data: this.chartSalesData.data,
      options: this.chartSalesData.options
    });
  }

  fetchOrganization() {
    this.dataService.fetchOrg(this.organization, this.year)
      .subscribe(res => {
        this.chartSalesData.data.datasets[0].data = res;
        this.createChart();
      },
        err => {
          console.log(err);
        });
  }
}
