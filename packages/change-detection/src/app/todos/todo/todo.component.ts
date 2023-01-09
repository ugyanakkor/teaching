import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TodoInterface} from "../todoInterface";
import {TodosService} from "../todos.service";
import {Observable} from "rxjs";

@Component({
  selector: 'teaching-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  // 2. Enable OnPush strategy
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo!: TodoInterface;

  // 5. Change from RxJS
/*  public filter = new Observable<string>();

  constructor(private todosService: TodosService) {
    this.filter = todosService.filter;
  }*/

  public checkRender(): boolean {
    console.log('checkrender');
    return true;
  }

  // 4. Change from events
/*  public changeText(): void {
    this.todo.text = 'Changed from inside';
  }*/

  // 5. Change from RxJS
/*  public changeFilter() : void {
    this.todosService.filter.next('active');
  }*/
}
