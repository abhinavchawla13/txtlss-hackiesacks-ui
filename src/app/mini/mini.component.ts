import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-mini",
  templateUrl: "./mini.component.html",
  styleUrls: ["./mini.component.css"],
})
export class MiniComponent implements OnInit {
  customerId: string;
  customerName: string;
  data: any;
  highest: string;
  lowest: string;
  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    this.customerId = this.router.snapshot.queryParamMap.get("customer_id");
    this.customerName = this.router.snapshot.queryParamMap.get("customer_name");
    console.log(this.customerId, this.customerName, environment.api);

    try {
      this.data = await this.getCustomerStats(this.customerId).toPromise();
      console.log(this.data);
      this.highest = Object.keys(this.data.emotionCorrectness).reduce((a, b) =>
        this.data.emotionCorrectness[a].percentage >
        this.data.emotionCorrectness[b].percentage
          ? a
          : b
      );
      this.lowest = Object.keys(this.data.emotionCorrectness).reduce((a, b) =>
        this.data.emotionCorrectness[a].percentage <
        this.data.emotionCorrectness[b].percentage
          ? a
          : b
      );
      console.log(this.highest, this.lowest);
    } catch (error) {
      console.log("Error", error);
    }
  }

  getCustomerStats(customerId): Observable<any> {
    return this.http.get(
      `${environment.api}/stats/one/?customerId=${customerId}`
    );
  }
}
