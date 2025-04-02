import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
//imported ionbutton
import { RouterLink } from '@angular/router';//imported
import { Storage } from '@ionic/storage-angular';//imported


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],//imported ionbutton
})
export class HomePage {
  myStatus:string = "";//creaing empty storage string
  constructor(private storage:Storage) {}

  async ionViewDidEnter() {
    console.log("ionviewWillEnter");
    await this.storage.create();
    this.myStatus = await this.storage.get('status');//setting the status to the variable myStatus
  }
}
