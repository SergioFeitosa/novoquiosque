import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaminhoMenuComponent } from './caminho-menu/caminho-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  title = 'novoquiosque';
}
