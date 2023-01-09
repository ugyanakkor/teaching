import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoInterface} from "./todoInterface";

@Component({
  selector: 'teaching-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Array<TodoInterface> = [
    {
      id: 1,
      text: 'First todo',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Second todo',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Third todo',
      isCompleted: false
    },
  ]

  public changeText():void {
    console.log('change text');
  }

  // 3. Changes via @Input() decorator
/*  public changeArray(): void {
    //a) this will change the object but not the reference -> won't be re-rendered
    this.todos[0].text = 'Foo';

    //b) this will change the object and the reference -> will re-render
    //this.todos[0] = {...this.todos[0], text: 'Foo'};

    console.log(this.todos);
  }*/
}
