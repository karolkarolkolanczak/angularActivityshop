import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  genderList: string[]=[
    'male',
    'female'
  ];
  constructor() { }
}
