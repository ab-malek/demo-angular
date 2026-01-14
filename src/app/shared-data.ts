import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {

  constructor(private _http : HttpClient) { }

  getUserData(){
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }



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
