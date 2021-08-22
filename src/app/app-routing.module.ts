import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './MyComponent/css/css.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { JsComponent } from './MyComponent/js/js.component';

const routes: Routes = [
  { path: 'javascript', component: JsComponent },
  { path: 'css', component: CssComponent },
  { path: 'webdesign',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

