import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitatService } from '../../../../services/habitat.service'; // Make sure this path is correct
import { Habitat } from '../../../../models/habitat.model'; // Assuming the model is in this path

@Component({
  selector: 'app-comment-detail-appart',
  templateUrl: './comment-detail-appart.component.html',
  styleUrl: './comment-detail-appart.component.css'
})
export class CommentDetailAppartComponent implements OnInit{
  habitat: Habitat | null = null; // To store the fetched habitat

  constructor(private habitatService: HabitatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getByIdHabitat();
  }

  getByIdHabitat():void {
    // Get the habitat ID from the route parameters
    const habitatId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the habitat by ID
    this.habitatService.getHabitatById(habitatId).subscribe(
      (data: Habitat) => {
        this.habitat = data;
      },
      (error) => {
        console.error('Error fetching habitat:', error);
      }
    );
  }
}

