import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EGlobActions } from './model/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch({ type: EGlobActions.loadData });
  }
}
