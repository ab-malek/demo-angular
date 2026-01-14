import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Profile } from './profile/profile';

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
    }
];
