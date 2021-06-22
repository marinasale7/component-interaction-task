import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.css']
})
export class TodolistItemComponent implements OnInit {

  constructor() { }
  @Input() todo: any;
  @Output() deleteTodoEvent=new EventEmitter()

  ngOnInit(): void {
  }
      deleteTodo(){
        this.deleteTodoEvent.emit(this.todo.id)
      }
}
