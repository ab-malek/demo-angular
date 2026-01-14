import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {

  isEligible: boolean = false;
  
  constructor(private sharedData: SharedData) {
    this.isEligible = this.sharedData.iseligibleForSubscription();
  }

  textColor: string = '';
}
