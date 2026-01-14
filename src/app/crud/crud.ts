import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud-service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class Crud implements OnInit {

  apiData: Iuser[] = [];

  constructor(private crudService: CrudService, private route: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllData();
  }

  getAllData(){
    this.crudService.getData().subscribe((data:Iuser[])=>{
      this.apiData = data;
    });
  }

  addNewUser(){
    this.route.navigateByUrl('adduser');
  }
}
