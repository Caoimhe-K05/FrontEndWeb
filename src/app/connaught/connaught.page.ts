import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';//importing all the buttons

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]//importing all the buttons
})
export class ConnaughtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
