import { EditRecord } from './../../Models/edit-record';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.less']
})
export class EditRecordComponent implements OnInit {
  @Input() record: EditRecord;

  constructor() { }

  ngOnInit(): void {
  }
}
