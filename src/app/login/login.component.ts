import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NetworkService } from '../network.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    'phone': new FormControl('0683489873'),
    'password': new FormControl('mypassword')
  })
  constructor(private networkService: NetworkService, 
      private sessionService: SessionService) { }

  ngOnInit() {
  }
  onSubmit() {
    const value = this.loginForm.value;
    this.networkService.login(value).subscribe(data => {
      const token = JSON.stringify(data.body);
      this.sessionService.saveToken(token);
    }, error=> {
      console.log(error);
    })
  }
}
