import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NetworkService } from '../network.service';

const httpOptions = {
  'Content-Type': 'application/json'
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl('Joshua'),
    lastName: new FormControl('Oguma'),
    phone: new FormControl('0683489873'),
    password: new FormControl('mypassword')
  });
  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  }
  onSubmit() {
    let newForm = {...this.signupForm};
    newForm.value['tosAgreement'] = true;
    this.networkService.register(JSON.stringify(newForm.value)).subscribe(data=>{
      console.log(data);
    }, error=> {
      alert(JSON.stringify(error.error));
    })
  }
}
