import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private genderList: string[]=[
    'male',
    'female'
  ];
  constructor() { }

  getGenderList():string[]{
    return this.genderList;
  }
}
