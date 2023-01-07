import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ component: ContactPageComponent, path: '', outlet:'content' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
