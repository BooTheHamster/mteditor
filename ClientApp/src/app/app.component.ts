import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IWeatherForecastDto } from './Models/weather-forecast-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'mtEditor';
  records: IWeatherForecastDto[];

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async ngOnInit() {
    this.records = await this.GetRecords();
  }

  private GetRecords(): Promise<IWeatherForecastDto[]> {
    return this.httpClient.get<IWeatherForecastDto[]>('/weatherforecast').toPromise();
  }
}
