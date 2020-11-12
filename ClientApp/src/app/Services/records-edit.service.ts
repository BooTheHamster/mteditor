import { EditRecord } from '../Models/edit-record';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { EditFileHubClientService } from './edit-file-hub-client.service';
import { Subscription, Subject, Observable } from 'rxjs';

/**
 * Сервис редактирования записей.
 */
@Injectable({
  providedIn: 'root'
})
export class RecordsEditServiceService implements OnDestroy {
  private records: EditRecord[] = null;
  private subscription: Subscription;
  private onRecordsChangedSubject = new Subject<void>();

  constructor(
    editFileHubClientService: EditFileHubClientService,
    private httpClient: HttpClient) {

    this.httpClient = httpClient;
    this.subscription = editFileHubClientService.onReloadRecordsEvent.subscribe(
      () => this.updateRecords()
    );
    this.updateRecords();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getRecords(): EditRecord[] {
    return this.records;
  }

  public get onRecordsChanged(): Observable<void> {
    return this.onRecordsChangedSubject;
  }

  private async updateRecords() {
    this.records = await this.httpClient.get<EditRecord[]>('edit').toPromise();
    this.onRecordsChangedSubject.next();
  }
}
