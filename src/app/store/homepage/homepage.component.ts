import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import { ListProductsComponent } from "../list-products/list-products.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, ListProductsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
