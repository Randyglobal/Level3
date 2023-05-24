import { Component, ViewChild, OnInit } from '@angular/core';
// import { addDoc } from '@angular/fire/firestore';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog'
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  constructor( private dialog: MatDialog){
  }

  ngOnInit(): void {
    
  }

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort

  openTaskForm(){
   const dialogRef = this.dialog.open(AddTaskComponent);
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val){

      }
    }
   })
  }

}
