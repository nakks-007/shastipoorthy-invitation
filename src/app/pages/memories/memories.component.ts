import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.css'
})
export class MemoriesComponent implements AfterViewInit {

  @ViewChildren('imgRef') images!: QueryList<ElementRef<HTMLImageElement>>;

  totalImages = 0;
  loadedImages = 0;
  isLoading = true;

  ngOnInit() {
    this.resetLoader();

    setTimeout(() => {
      this.isLoading = false;
    }, 5000); // fallback
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkCachedImages();
    }, 0);
  }

  resetLoader() {
    this.totalImages = 11;
    this.loadedImages = 0;
    this.isLoading = true;
  }

  onImageLoad() {
    this.loadedImages++;
    this.checkAllLoaded();
  }

  checkCachedImages() {
    this.images.forEach(img => {
      if (img.nativeElement.complete) {
        this.loadedImages++;
      }
    });

    this.checkAllLoaded();
  }

  checkAllLoaded() {
    if (this.loadedImages >= this.totalImages) {
      this.isLoading = false;
    }
  }
}