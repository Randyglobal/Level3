import { Component, ViewChild, OnInit } from '@angular/core';
// import { addDoc } from '@angular/fire/firestore';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog'
import { AddTaskComponent } from '../add-task/add-task.component';
import { Firestore, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { Itask } from 'src/app/interface/user.interface';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
// searchText: any
  constructor( private dialog: MatDialog, public firestore: Firestore){
  }
  public data: any = [];
  taskProperty: string[] = [
    'id',
     'Name', 
     'Status', 
     'Difficulty',
     'Level',
      'StartDate'
  ]

  displayTask: string[] = ['id', 'Name', 'Status', 'Difficulty','Level', 'StartDate'];
    // dataSource= new MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort

  ngOnInit(): void {
    
  }

  openTaskForm(){
   const dialogRef = this.dialog.open(AddTaskComponent);
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val){

      }
    }
   })
  }

  //edit
  openEditForm(){
    const dialogRef = this.dialog.open(EditTaskComponent);
    dialogRef.afterClosed().subscribe({
     next: (val) => {
       if (val){
 
       }
     }
    })
   }
  
   //Filter

  applyFilter(event: Event){
    const filter = (event.target as HTMLInputElement).value;
    this.data.filter = filter.trim().toLowerCase()
  
    if (this.data.paginator) {
      this.data.paginator.firstPage()
    }
    }
    getData(){
      const addData = collection(this.firestore, 'ITask');
      getDocs(addData)
      .then((respond) => {
        // alert('Data Gotten')
        this.data = [...respond.docs.map((item) =>{
          return{ ...item.data(), id: item.id}})]
      })
    }
   
    deleteTask(id: string){
      const dataDelete = doc(this.firestore, 'ITask', id);
      deleteDoc(dataDelete) 
       .then(()=>{
    window.location.reload()
        alert('Task Deleted')
        this.getData
       })
       .catch((err)=>{
         alert(err)
       })
    }

}
