import { Component } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
// ///////////////////
  user = {
    name: 'robi',
    age: '25'
  }

  toolpin = 'saitis damxmare'

  // /////////////////
  users= {
    name: 'fgfg',
    age: '45'
  }

  someDate =  new Date()

  ageOfUsers = [{age:20}, {age: 22}, {age: 25}]

  constructor () {
    setTimeout(() => {
      // this.ageOfUsers.push({age: 16})
      this.ageOfUsers =[...this.ageOfUsers, {age:17}]
    }, 3000)
  }

  // ///////////////////////

  color = 'green'

  changeColor(newColor: string) {
      this.color = newColor
  }

  checkCurrentValue(event: Event) {
   const target = event.target as HTMLInputElement

    console.log('e', target.value );
  }

  // Output and Input decorators //

  parentName = 'hello, world';

  setNewName(newName: string) {
    this.parentName = newName;
  }

  // ngFor , nfIf and ngSwitchCase //

  toogler: boolean = true
  str: string = 'qwerty'

  arr: any [] = ['text', 123, true, [1, 'abc'], NaN, Symbol]


}
