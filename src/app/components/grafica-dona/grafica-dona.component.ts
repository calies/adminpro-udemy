import { Component, OnInit, Input } from '@angular/core';

// ng2 Charts
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [],
})
export class GraficaDonaComponent implements OnInit {
  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [];
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';
  
  constructor() {}

  ngOnInit(): void {}
}
