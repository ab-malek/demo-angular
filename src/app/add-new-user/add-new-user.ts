import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  imports: [],
  templateUrl: './add-new-user.html',
  styleUrl: './add-new-user.scss',
})
export class AddNewUser {


  constructor(private route: Router) {
  }
  
  onCancel(){
    this.route.navigateByUrl('crud');
  }
}
