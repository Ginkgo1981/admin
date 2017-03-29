import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { UsersRouterComponent} from './users-router.component.ts'

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: UsersRouterComponent,
    children:[
      { path: 'students', component: StudentsComponent },
      { path: 'students/:dsin', component: StudentComponent },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forChild(routes);