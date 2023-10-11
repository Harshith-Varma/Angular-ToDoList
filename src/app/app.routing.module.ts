import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewDescriptionComponent } from './createdComponents/new-description/new-description.component';
import { NewDescriptionTwoComponent } from './createdComponents/new-description-two/new-description-two.component';

@NgModule({
  declarations: [NewDescriptionComponent, NewDescriptionTwoComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'description-two', component: NewDescriptionComponent },
      { path: 'description-three', component: NewDescriptionTwoComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
