import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditFileHubClientService } from './Services/edit-file-hub-client.service';
import { RecordsEditServiceService } from './Services/records-edit.service';
import { EditRecordComponent } from './Components/edit-record/edit-record.component';
import { EditRecordTitleComponent } from './Components/edit-record-title/edit-record-title.component';

@NgModule({
  declarations: [
    AppComponent,
    EditRecordComponent,
    EditRecordTitleComponent
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
