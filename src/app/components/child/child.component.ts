import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {

  @Input() childColor: string;
  @Input() name: string;

  @Output() nameChange = new EventEmitter<string>();

  

  changeName () {
    this.nameChange.emit('djbehwbfjhrfv')
  }


  

}
