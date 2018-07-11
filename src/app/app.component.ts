import { Component } from '@angular/core';
import {Post} from './models/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(){
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyC4BISigf0yCoI_Ej51GzfMZf0bRkmrcuo",
			authDomain: "oc-angular-2d21a.firebaseapp.com",
			databaseURL: "https://oc-angular-2d21a.firebaseio.com",
			projectId: "oc-angular-2d21a",
			storageBucket: "oc-angular-2d21a.appspot.com",
			messagingSenderId: "604913309882"
		};
		firebase.initializeApp(config);
	}

}
