import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'task-tracker';

  private _http = inject(HttpClient);

  ngOnInit(): void {
    this._http.get("/test").subscribe();
  }

}
