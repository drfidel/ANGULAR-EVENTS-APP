import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{

  profileForm!: FormGroup 

  constructor(private router:Router, private authService:AuthService){

  }
  
  ngOnInit(){
    let firstName = new FormControl(this.authService.curretUser.firstName)
    let lastName = new FormControl(this.authService.curretUser.lastname)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName : lastName
    })
  }

  saveProfile(formValues: { firstName: string; lastName: string }) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
  }

  cancel(){
    this.router.navigate(['events'])
  }

  

       
}