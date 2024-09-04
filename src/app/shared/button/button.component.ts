import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() texto: string | undefined;
  @Input() path: string | undefined;
  saludo() {
    console.log(this.path);
    console.log(this.texto);
    
  }
}
