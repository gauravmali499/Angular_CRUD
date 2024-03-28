import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form:FormGroup;
  depts:string[] = ['DotNet', 'PHP', 'QA', 'React', 'Mobile'];
  hobbies:string[] = ['Coding','Cricket', 'Reading','Computer Games', 'Movies']
  states:string[] = ['Gujarat', 'Rajasthan', 'Maharastra'];
  cities = [{key: 'Gujarat', value:['Gandhinagar', 'Ahmedabad', 'Surat']}, {key: 'Rajasthan', value:['Jaipur', 'Udaipur', 'Mount-Abu']}, {key: 'Maharastra', value:['Mumbai', 'Pune', 'Nagpur']}];
  CurrentStateCities:string[] = [];
  selectedState:string = 'Select State';
  selectedCity:string = 'Select City';
  onChangeofOptions(newState: string) {
    for (let i = 0; i < this.cities.length; i++) {
      if (newState == this.cities[i].key) {
        this.CurrentStateCities = this.cities[i].value;
      }
    }
  }

  constructor(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dept: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      hobbies: new FormControl(null, [Validators.required])
    });
  }
  reset(){
    this.form.reset();
  }

  submit(){
    console.log(this.form.value.name);
  }
}
