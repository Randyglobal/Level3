import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
 
  title = 'Edit Task'

  taskForm: FormGroup

  constructor( private formGroup: FormBuilder,
    // private storage: UserService,
    public firestore: Firestore
    ){
    this.taskForm = this.formGroup.group({
      Id: '',
      Name: '',
      status: '',
      difficulty: '',
      level: '',
      startDate: '',     
    })
  }
  status: string[] = [
    'pending',
    'success',
    'paused'

  ];
  difficulty: string[] = [
    'very hard',
    'medium',
    'easy'

  ];
  level: string[] = [
    'completed',
    'not completed',
    'in progress'

  ]


  updateData(value: any) {
    // this.storage.addTask(this.task);
    const addTasks = collection(this.firestore, 'ITask');
    addDoc(addTasks, value)
    .then((respond)=> {
     alert('Task Updated')
     window.location.reload()
    })
    .catch((error) => {
     alert('Opps an error occured => ' + error)
    })
   }
}
