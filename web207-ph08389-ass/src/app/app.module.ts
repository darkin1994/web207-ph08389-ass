import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserBodyComponent } from './user-body/user-body.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { ManagerComponent } from './manager/manager.component';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';



const appRoutes: Routes = [
  // user routers
  {
    path: '',
    component: UserBodyComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'About', component: AboutComponent },
      { path : 'Detail/:id', component : DetailComponent, pathMatch: 'full'},
      { path: 'Contact', component: ContactComponent },
    ]
  },
  // admin routers
  {
    path: '',
    component: AdminBodyComponent,
    children: [
      { path: 'Manager', component: ManagerComponent },
      { path : 'Edit/:id', component : EditComponent, pathMatch: 'full'},
      { path: 'Add', component: InsertComponent },
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserBodyComponent,
    HomeComponent,
    AboutComponent,
    DetailComponent,
    ContactComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBodyComponent,
    ManagerComponent,
    EditComponent,
    InsertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
