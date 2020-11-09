import { EditRecord } from '../Models/edit-record';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditFileHubClientService } from './edit-file-hub-client.service';

/**
 * Сервис редактирования записей.
 */
@Injectable({
  providedIn: 'root'
})
export class RecordsEditServiceService {

  constructor(
    private httpClient: HttpClient,
    private editFileHubClientService: EditFileHubClientService) {

    this.editFileHubClientService = editFileHubClientService;
    this.httpClient = httpClient;
  }

  async getRecords(): Promise<EditRecord[]> {
    return this.httpClient.get<EditRecord[]>('editfile').toPromise();
  }
}
