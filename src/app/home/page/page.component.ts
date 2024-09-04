import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {}
