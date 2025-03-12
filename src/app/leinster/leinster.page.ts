import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';//importing all the buttons
import { Router } from '@angular/router';//importing router
@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]//importing all the buttons
})
export class LeinsterPage implements OnInit {

  constructor(private router:Router) { }
  openCountiesPage(){
    this.router.navigate(['/leinstercounties']);
  }

  ngOnInit() {
  }

}
