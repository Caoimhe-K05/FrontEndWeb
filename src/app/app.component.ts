import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AComponent} from './a/a.component' //importing a componenet
import { BComponent } from './b/b.component' //importing b component

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent], //importing all the components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app'; //creating my values to use in databinding later
  name: string = "Caoimhe"; //decalaring string name as Caoimhe
  age: number = 19; //decalaring number age as 19
}

