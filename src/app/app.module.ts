import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';
import { ChildComponent } from './components/child/child.component';
import { NgContentExampleComponent } from './components/ng-content-example/ng-content-example.component';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    CutTextPipe,
    SortDataPipe,
    ChildComponent,
    NgContentExampleComponent,
  ],
  imports: [BrowserModule, FormsModule, ListboxModule,MultiSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
