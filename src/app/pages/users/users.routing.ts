import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { UsersComponent} from './users.component'

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children:[
      { path: 'students', component: StudentsComponent },
      { path: 'students/:dsin', component: StudentComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);