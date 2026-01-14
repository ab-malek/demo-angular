import { Component } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  dammyData: any;
  isEligible: boolean = false;

  constructor(private sharedData: SharedData) {
    this.dammyData = this.sharedData.userData;
    this.isEligible = this.sharedData.iseligibleForSubscription();
  }
}
