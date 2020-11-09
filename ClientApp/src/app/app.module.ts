import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditFileHubClientService } from './Services/edit-file-hub-client.service';
import { RecordsEditServiceService } from './Services/records-edit.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RecordsEditServiceService,
    EditFileHubClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
