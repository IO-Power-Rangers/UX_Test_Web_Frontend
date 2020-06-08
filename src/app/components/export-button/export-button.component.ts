import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExcelExport } from 'src/app/interfaces/questionnaire/result/result';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-export-button',
  templateUrl: './export-button.component.html',
  styleUrls: ['./export-button.component.css']
})
export class ExportButtonComponent implements OnInit {

  private questionnaireId: number;
  private readonly URL = environment.local + environment.export;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  setQuestionnaireId(questionnaireId: number): void {
    this.questionnaireId = questionnaireId;
  }

  downloadExport(): void {
    if (this.questionnaireId != undefined) {
      this.http.get(this.URL + '/' + this.questionnaireId).subscribe((data: ExcelExport) => {
        const blob = new Blob([this.stringToArrayBuffer(atob(data.base64StringFile))], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, data.fileName);
      })
    }
  }

  stringToArrayBuffer(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

}
