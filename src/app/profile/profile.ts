import { Component, OnInit } from '@angular/core';
import { SharedData } from '../shared-data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {

  dammyData: any;
  isEligible: boolean = false;
  userApiData: any;

  constructor(private sharedData: SharedData) {
    this.dammyData = this.sharedData.userData;
    this.isEligible = this.sharedData.iseligibleForSubscription();
  }

  ngOnInit(): void {
      this.getApiData();
  }
  // Api data


  getApiData(){
    this.sharedData.getUserData().subscribe(res => {
      this.userApiData = res;
    })
  }
}
