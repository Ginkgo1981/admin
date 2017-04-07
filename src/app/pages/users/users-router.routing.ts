import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { UsersRouterComponent} from './users-router.component'

export const routes: Routes = [
  {
    path: '',
    component: UsersRouterComponent,
    children:[
      { path: 'students', component: StudentListComponent },
      { path: 'students/:dsin', component: StudentComponent },
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);