import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Task } from "../../model/task";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
url:string="";
myForm:FormGroup;
tasks:Array<Task>= [];
todo = [];
CreateForm:FormGroup;


drop(event: CdkDragDrop<Task[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log(this.todo);
    localStorage.setItem("todo" , JSON.stringify(this.todo))
    localStorage.setItem("tasks" , JSON.stringify(this.tasks))
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,

    );
    console.log(this.todo)
    localStorage.setItem("todo" , JSON.stringify(this.todo))
    localStorage.setItem("tasks" , JSON.stringify(this.tasks))
  }
}
  constructor(private fb : FormBuilder) {
this.myForm = this.fb.group({
  title:["" , Validators.required],
  Description:["" , Validators.required],
  user:[JSON.parse(localStorage.getItem("user")).name],
  date:[''],
  image:['']
});
this.CreateForm = this.fb.group({
  title:["" , Validators.required],
})
  }

  ngOnInit(): void {
    this.tasks=JSON.parse(localStorage.getItem("tasks"))||[]
    this.todo=JSON.parse(localStorage.getItem("todo"))||[]
  }
  // upload image
  select(event){
    const file = event.target.files[0];
let reader= new FileReader();
reader.readAsDataURL(file);
reader.onload=(event:any)=>{
 this.url= event.target.result;


}
  }
  // //////////////////////////////////////////////////
  save(myForm){
    console.log(myForm.value);
myForm.value.image=this.url;

this.tasks.push(myForm.value);
localStorage.setItem("tasks" , JSON.stringify(this.tasks))
this.url=''
console.log(this.tasks);
this.myForm.reset();
  }
  create(CreateForm){
    console.log(CreateForm);

let array=[];
this.todo.push({ id: CreateForm.title, tasks: array });
console.log(this.todo);
localStorage.setItem("todo" , JSON.stringify(this.todo))
this.CreateForm.reset();

  }
}
