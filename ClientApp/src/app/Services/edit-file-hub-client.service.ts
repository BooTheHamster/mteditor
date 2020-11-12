import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

/**
 * Клиент SignalR для приемы сообщений от сервера.
 */
@Injectable({
  providedIn: 'root'
})
export class EditFileHubClientService {
  private readonly recreateConnectionInterval: number = 1000;
  private connection: HubConnection;
  private reloadRecordsEventSubject = new Subject<void>();

  constructor() {
    this.subscribeToServerEvents();
  }

  public get onReloadRecordsEvent(): Observable<void> {
    return this.reloadRecordsEventSubject.asObservable();
  }

  private raiseReloadRecordsEvent(): void {
    this.reloadRecordsEventSubject.next();
  }

  private subscribeToServerEvents() {
    this.createConnection()
      .then(
        result => {
          console.log('Create server hub connection successful.');
          this.connection = result; },

        rejectsResult => {
          console.log('Create server hub connection error: ' + rejectsResult);
          setTimeout(() => {
            this.subscribeToServerEvents();
          },
            this.recreateConnectionInterval);
        });
  }

  private async createConnection(): Promise<HubConnection> {
    const connection = new HubConnectionBuilder()
      .withUrl('/hubs', HttpTransportType.LongPolling)
      .withAutomaticReconnect()
      .build();

    // Здесь важно писать через () => this.some() иначе будут проблемы с потерей this в вызываемом методе.
    connection.on('reloadRecords', () => this.raiseReloadRecordsEvent());

    await connection.start();

    return connection;
  }
}
