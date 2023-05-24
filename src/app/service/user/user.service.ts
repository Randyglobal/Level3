import { Injectable } from '@angular/core';
import { LocalService } from '../store/local.service';
import { Itask } from 'src/app/interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private localStore: LocalService) { }

  addTask(task: Itask){
   const store = this.localStore.get('Task')
   let storeLocal: Object[] = [];
   if (store.status == true) {
    storeLocal = store.data;
   }
   storeLocal.push(task);
   this.localStore.set('Task', storeLocal)
  //  alert('Task Added')
  }

}
