import { Component, OnInit } from "@angular/core";
import { curveMonotoneX } from "d3-shape";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  curve = curveMonotoneX;
  multi: any[] = [
    {
      name: "Number of Games",
    },
  ];

  single: any[];
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

  data: any;
  highest: string;
  lowest: string;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    try {
      this.data = await this.getAllCustomerStats().toPromise();
      console.log(this.data);
      this.single = this.data.scoreDistribution;
      this.multi[0].series = this.data.timelines;

      this.highest = Object.keys(this.data.emotionCorrectness).reduce((a, b) =>
        this.data.emotionCorrectness[a] > this.data.emotionCorrectness[b]
          ? a
          : b
      );
      this.lowest = Object.keys(this.data.emotionCorrectness).reduce((a, b) =>
        this.data.emotionCorrectness[a] < this.data.emotionCorrectness[b]
          ? a
          : b
      );
      console.log(this.highest, this.lowest);
    } catch (error) {
      console.log("Error", error);
    }
  }

  getAllCustomerStats(): Observable<any> {
    return this.http.get(`${environment.api}/stats/all/`);
  }
}
