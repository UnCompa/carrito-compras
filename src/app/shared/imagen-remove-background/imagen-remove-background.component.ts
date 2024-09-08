import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-imagen-remove-background',
  templateUrl: './imagen-remove-background.component.html',
  styleUrls: ['./imagen-remove-background.component.css'],
})
export class ImageRemoveBackgroundComponent {
  imageSrc: string = 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'; // Aquí puedes poner la URL de la imagen
  transparentImage: string = '';

  constructor() {}

  // Método para cargar y procesar la imagen
  loadImage() {
    const image = new Image();
    image.crossOrigin = 'anonymous'; // Si la imagen viene de otro dominio

    // Cuando la imagen se cargue
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      // Ajustar el tamaño del canvas al tamaño de la imagen
      canvas.width = image.width;
      canvas.height = image.height;

      // Dibujar la imagen en el canvas
      ctx.drawImage(image, 0, 0);

      // Obtener los píxeles de la imagen
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Recorrer todos los píxeles
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]; // Rojo
        const g = data[i + 1]; // Verde
        const b = data[i + 2]; // Azul

        // Detectar si el píxel es blanco (o cercano a blanco)
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // Hacer el píxel completamente transparente
        }
      }

      // Volver a poner los píxeles procesados en el canvas
      ctx.putImageData(imageData, 0, 0);

      // Convertir el canvas a un formato de imagen (data URL)
      this.transparentImage = canvas.toDataURL();
    };

    // Poner aquí la URL de la imagen que deseas procesar
    image.src = this.imageSrc;
  }
}
