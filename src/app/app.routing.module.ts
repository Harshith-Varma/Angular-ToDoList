import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewDescriptionComponent } from './createdComponents/new-description/new-description.component';

@NgModule({
  declarations: [NewDescriptionComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'description-two', component: NewDescriptionComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
