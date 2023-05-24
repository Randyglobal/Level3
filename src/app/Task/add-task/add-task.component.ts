import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Itask } from 'src/app/interface/user.interface';
import { LocalService } from 'src/app/service/store/local.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  task: Itask = 
    {
      id: '',
      name: '',
      status: '',
      difficulty: '',
      level: '',
      stateDate: ''
    }

  title = 'Add Task'
  // step 1
  taskForm: FormGroup
  // Step 2
  //when we want to bind with our component
  constructor( private formGroup: FormBuilder,
    private storage: UserService,
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


  addData(value: any) {
   this.storage.addTask(this.task);
   const addTasks = collection(this.firestore, 'Task');
   addDoc(addTasks, value)
   .then((respond)=> {
    alert('Added Task Successfully')
   })
   .catch((error) => {
    alert('Opps an error occured => ' + error)
   })
  }
}
