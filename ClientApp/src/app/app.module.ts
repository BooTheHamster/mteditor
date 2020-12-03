import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { EditFileHubClientService } from './Services/edit-file-hub-client.service';
import { RecordsEditServiceService } from './Services/records-edit.service';
import { EditRecordComponent } from './Components/edit-record/edit-record.component';
import { EditRecordTitleComponent } from './Components/edit-record-title/edit-record-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EditRecordComponent,
    EditRecordTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    RecordsEditServiceService,
    EditFileHubClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
