import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, Firestore, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire/compat'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(public auth: Auth, public firestore: Firestore, private store: AngularFireModule) {
  }

  signin(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((respond: any) => {
        console.log(respond.user);
        alert('welcome' + respond.user)
        window.location.replace('http://localhost:4200/tasklist')
      })
      .catch((err) => {
        alert(err.message)
        alert('ooopppss')
      })
  }
}
