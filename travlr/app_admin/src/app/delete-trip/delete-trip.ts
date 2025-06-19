import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css'
})
export class DeleteTrip implements OnInit {

  trip!: Trip;
  message: string = '';

  constructor(
    private router: Router,
    private tripData: TripData
  ) { }

  ngOnInit(): void {
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    this.tripData.deleteTrip(tripCode).subscribe({
      next: (value: any) => {
        this.trip = value;
        if (!value) {
          this.message = 'No Trip Retrieved!';
        } else {
          this.message = 'Trip: ' + tripCode + ' retrieved';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
  }
}
