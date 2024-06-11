import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() emitterTodoList!: EventEmitter<string>;
  @Input() text: string = 'ADIOS';

  @Output() todoListCount: EventEmitter<number> = new EventEmitter<number>();
  private _todoList: string[] = [];

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    this.todoListCount.next(this._todoList.length);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit');
    this.emitterTodoList.subscribe((todoItem: string) => {
      this._todoList.push(todoItem);
      this.todoListCount.next(this._todoList.length);
    });
  }

  ngOnChanges(e: any) {
    console.log('ngOnChanges');
    console.log(e);
    console.log(this.text);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  afterNextRender() {
    console.log('afterNextRender');
  }

  afterRende() {
    console.log('afterRender');
  }

  ngOnDestroy() {
    console.log(' Todo list ngOnDestroy');
  }
  // ngOnInit(): void {
  //   this.emitterTodoList.subscribe((todoItem: string) => {
  //     this._todoList.push(todoItem);
  //   });
  // }

  get todoList(): string[] {
    return this._todoList;
  }
}
