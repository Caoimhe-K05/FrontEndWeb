import { Component, OnInit } from '@angular/core'; //added OnInit for implementation
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service'//importing the data service from file we created
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  students:any[]=[];//creating student array
  weather:any[]=[];//creating the weather array
  constructor(private dataService:DataService){//adding dataService as an argument

  }

  ngOnInit(): void {
    //subscrbing to the student data 
    this.dataService.getStudentData().subscribe(
      (data)=>{
        this.students = data.students;//pulling the data directly from the student array
        //console.log(data);//implements the data into the console of our app
      }
    ); 

    //subscribing to the weather data
    this.dataService.getWeatherdata().subscribe(
      (data)=>{
        this.weather = data.weather;//pulling thr data directly from the student array
      }
    )
  }
}
