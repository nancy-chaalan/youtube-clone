import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: any [] =[
    {id: 1, name: "nancy", email:"nancy123@gmail.com", password: "12345"},
  ]

}
