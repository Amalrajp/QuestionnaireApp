import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg;
  username;
  password;
  btn_disable = false;



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(event) {

    event.preventDefault();
    if (this.username == "" || !this.username) {
      this.errorMsg = "Enter Valid user name";
      return;
    }
    if (this.password == "" || !this.password) {
      this.errorMsg = "Enter Valid Password";
      return;
    }
    this.userService.login(this.username, this.password).subscribe(
      (res) => {        
        localStorage.setItem('token', res)
        localStorage.setItem('username', this.username);
        let payload = JSON.parse(window.atob(res.split('.')[1]));
        console.log(payload)
        localStorage.setItem('role', payload.role);
        this.router.navigate(['./questions'])
      })
  }

}
