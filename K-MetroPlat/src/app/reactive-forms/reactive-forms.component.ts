import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { dataService } from '../services/data.service';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {

  title = 'reactiveForms'
  reactiveForms !: FormGroup;

  constructor(){}

  ngOnInit(){
    this.reactiveForms = new FormGroup({
      email: new FormControl(null), // this formControl is a contructor.
      password: new FormControl(null),
      confPassword: new FormControl(null),
      firstName : new FormControl(null),
      lastName: new FormControl(null),
      phone: new FormControl(null),
      company: new FormControl('Mitz'),
    })  
  }   

  onSubmit(){
    console.log(this.reactiveForms)
  }

  onClick(){
    // const data = new dataService()
    // data.onCommon(this.title)
  }
}
