import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';//importing ion cards
import { MovieService } from '../services/movie.service';//importing my movie service file
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],//importing ion cards
})
export class HomePage implements OnInit{
  myMovies:any[] = [];//empty array
  constructor(private movieService:MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMovieData().subscribe(//getting the data from the avengers array
      (data)=>{
        this.myMovies = data.Search;
        //console.log(data);//printing the array to the consol
      }
    );
  }
}

