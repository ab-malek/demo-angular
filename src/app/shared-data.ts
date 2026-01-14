import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  userData: any = {
    id: 1,
    name: 'Abdul Malek',
    email: 'abdul.malek@gmail.com',
    role: 'Developer',
  };

  iseligibleForSubscription(): boolean {
    return this.userData.email.endsWith('gmail.com');
  }
}
