import { RecordsEditServiceService } from './Services/records-edit.service';
import { Component, OnInit } from '@angular/core';
import { EditRecord } from './Models/edit-record';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'mtEditor';
  records: EditRecord[];

  constructor(private recordsEditServiceService: RecordsEditServiceService) {
    this.recordsEditServiceService = recordsEditServiceService;
  }

  async ngOnInit() {
    this.GetRecords();
  }

  private async GetRecords() {
    this.records = await this.recordsEditServiceService.getRecords();
  }
}
