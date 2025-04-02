import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonRadio, IonItem, IonList, IonLabel, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//importing ionitem, ionlist and ionlabel including the backbutton and buttons
import { Storage } from '@ionic/storage-angular';//imported
import { Router } from '@angular/router';//imported

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButtons, IonRadio, IonItem, IonList, IonLabel, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]//imports
})
export class StatusPage implements OnInit {
status:string = "";//adding empty status

  constructor(private storage:Storage, private router:Router) {
   }

   async ionViewWillEnter() {
    console.log("ionviewWillEnter");
    await this.storage.create();
    this.status = await this.storage.get('status');//setting the status to the variable myStatus
  }

  async onButtonClick(){
    //on button click method
    console.log(this.status);//printing to console
    await this.storage.create();//creating storage if it doesnt alreay exist    //await = dont go to next line until this happens
    await this.storage.set('status', this.status); 
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
