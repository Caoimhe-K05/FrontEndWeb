import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';//importing all the buttons

@Component({
  selector: 'app-leinstercounties',
  templateUrl: './leinstercounties.page.html',
  styleUrls: ['./leinstercounties.page.scss'],
  standalone: true,
  imports: [ IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]//importing all the buttons
})
export class LeinstercountiesPage implements OnInit {

  constructor() { }
  counties: string[] = ["Carlow", "Dublin", "Kildare",
    "Kilkenny", "Laois", "Longford", "Louth", "Meath",
    "Offaly", "Westmeath", "Wexford", "Wicklow"];
    //array with all the leinster counties
  ngOnInit() {
  }

}
