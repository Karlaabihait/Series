import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaListComponent } from './series/biografia-list/biografia-list.component';
import { ListSeriesComponent } from './series/list-series/list-series.component';

const routes: Routes = [
  {
    path: "biografia-list",
    component: BiografiaListComponent
  },
{
  path: "list-series",
  component: ListSeriesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
