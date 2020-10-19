import { Component } from "@angular/core";
import { curveMonotoneX } from "d3-shape";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  curve = curveMonotoneX;
  multi: any[] = [
    {
      name: "Number of Games",
      series: [
        {
          name: "Oct 12",
          value: 3,
        },
        {
          name: "Oct 13",
          value: 18,
        },
        {
          name: "Oct 14",
          value: 12,
        },
        {
          name: "Oct 15",
          value: 12,
        },
        {
          name: "Oct 16",
          value: 7,
        },
      ],
    },
  ];

  single: any[] = [
    {
      name: "0/3",
      value: 2,
    },
    {
      name: "1/3",
      value: 8,
    },
    {
      name: "2/3",
      value: 3,
    },
    {
      name: "3/3",
      value: 9,
    },
  ];
  view: any[] = [600, 250];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel1: string = "Dates";
  yAxisLabel: string = "Number of Games";
  xAxisLabel2: string = "Scores";
  timeline: boolean = true;
  gradient: boolean = true;

  colorScheme = {
    domain: ["#E44D25"],
  };

  colorScheme2 = {
    domain: ["#BEE3F8", "#90CDF4", "#63B3ED", "#3182CE"],
  };

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
