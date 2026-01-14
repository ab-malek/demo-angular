import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Profile } from './profile/profile';
import { Crud } from './crud/crud';
import { AddNewUser } from './add-new-user/add-new-user';

export const routes: Routes = [
    {
        path: 'data-binding',
        component:DataBinding
    },
    {
        path: 'reactive-forms',
        component: ReactiveForm
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'crud',
        component: Crud
    },
    {
        path: 'adduser',
        component: AddNewUser
    }
];
