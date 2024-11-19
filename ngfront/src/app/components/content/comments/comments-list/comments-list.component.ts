// comments-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitat } from '../../../../models/habitat.model';
import { HabitatService } from '../../../../services/habitat.service';
import { AvisService } from '../../../../services/avis.service';
import { Avis } from '../../../../models/avis.model'; // Import Avis model

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  habitat: Habitat | null = null; // Stores the current habitat
  comments: Avis[] = []; // Array to store the fetched comments
  newComment: string = ''; // Model to store new comment input

  constructor(
    private habitatService: HabitatService,
    private avisService: AvisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get habitat ID from route
    const habitatId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch all habitats and find the one by ID
    this.habitatService.getHabitats().subscribe(
      (data: any) => {
        const habitats = data['hydra:member'] || [];
        this.habitat = habitats.find((habitat: Habitat) => habitat.id === habitatId);

        // Alternatively, fetch the habitat directly by ID if not found in the list
        if (!this.habitat) {
          this.habitatService.getHabitatById(habitatId).subscribe((habitat) => {
            this.habitat = habitat;
          });
        }
      },
      (error) => {
        console.error('Error fetching habitats:', error);
      }
    );

    // Fetch comments for the habitat
    this.avisService.getCommentsByHabitat(habitatId).subscribe(
      (data: any) => {
        this.comments = data['hydra:member'] || [];
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  // Method to handle submitting a new comment
  onSubmitComment(): void {
    if (this.newComment.trim()) {
      const newCommentObj: Avis = {
        id: Date.now(), // Temporary ID, you can handle this properly if integrated with a backend
        rating: 5, // Default rating or change as needed
        comment: this.newComment,
        publishedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        user: {
          id: 1, // Temporary user ID
          username: 'Anonymous', // Default username
          avatarUrl: 'assets/images/default-avatar.png' // Placeholder avatar URL
        },
        habitat: {
          id: this.habitat?.id || 0, // Assign the current habitat ID
          title: this.habitat?.title || 'Unknown' // Assign the current habitat title
        }
      };

      // Add the new comment to the list of comments
      this.comments.push(newCommentObj);

      // Clear the textarea after submitting
      this.newComment = '';
    }
  }
}
