import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';//importing all the buttons

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]//importing all the buttons
})
export class UlsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
