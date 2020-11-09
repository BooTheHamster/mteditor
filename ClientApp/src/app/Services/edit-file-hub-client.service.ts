import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

/**
 * Клиент SignalR для приемы сообщений от сервера.
 */
@Injectable({
  providedIn: 'root'
})
export class EditFileHubClientService {
  private readonly recreateConnectionInterval: number = 1000;
  private connection: HubConnection;

  constructor() {
    this.subscribeToServerEvents();
  }

  private raiseReloadRecordsEvent(): void {
    console.log('raiseReloadRecordsEvent');
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

    connection.on('reloadRecords', this.raiseReloadRecordsEvent);

    await connection.start();

    return connection;
  }
}
