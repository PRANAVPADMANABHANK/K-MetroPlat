import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  firstName: string = ""
  lastName: string = ""

  @ViewChild('myForm') form !: NgForm


  // this is for @viewChild
  onSubmit(){
    console.log(this.form)
  }


  //this is for local referance variable
  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
}
