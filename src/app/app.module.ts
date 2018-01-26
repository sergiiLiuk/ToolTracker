import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AuthguardGuard } from './authguard.guard';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeNewComponent } from './employees/employee-new/employee-new.component';
import { EmployeeService } from './services/employee-crud/employee.service';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ToolsComponent } from './tools/tools.component';
import { LoginService } from './services/login/login.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolEditComponent } from './tools/tool-edit/tool-edit.component';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import { ToolNewComponent } from './tools/tool-new/tool-new.component';
import { ToolService } from './services/tool-crud/tool.service';
import { AgmCoreModule } from '@agm/core';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './services/task-crud/task.service';
import { QrCodeComponent } from './qr-code/qr-code.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    EmployeeEditComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    PageNotFoundComponent,
    ToolsComponent,
    ToolEditComponent,
    ToolListComponent,
    ToolNewComponent,
    TasksComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component: LoginComponent},
      {path: 'home',  component: HomeComponent},
      {path: 'tasks',  component: TasksComponent},
      {path: 'tools', canActivate: [AuthguardGuard], component: ToolsComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'qrcode', component: QrCodeComponent},
      {path: '**', component: PageNotFoundComponent}
      ])
  ],
  
  providers: [LoginService, EmployeeService, ToolService, TaskService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
