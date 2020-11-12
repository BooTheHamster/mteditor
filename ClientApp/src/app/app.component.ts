import { EditRecord } from './Models/edit-record';
import { RecordsEditServiceService } from './Services/records-edit.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditFileHubClientService } from './Services/edit-file-hub-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mtEditor';
  records: EditRecord[];
  private subscription: Subscription;

  constructor(
    private recordsEditServiceService: RecordsEditServiceService) {

      this.recordsEditServiceService = recordsEditServiceService;
    }

  ngOnInit() {
    this.subscription = this.recordsEditServiceService.onRecordsChanged.subscribe(() => {
      this.updateRecords();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateRecords() {
    this.records = this.recordsEditServiceService.getRecords();
  }
}
