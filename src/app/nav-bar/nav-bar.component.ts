
import { NavBarService } from './nav-bar.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { CaminhoMenuComponent } from '../caminho-menu/caminho-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhoneNumberComponent } from '../phone-number/phone-number.component';
import { StarComponent } from '../star/star.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [ 
    CaminhoMenuComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    PhoneNumberComponent,
    RouterModule,
    StarComponent,
   ]


})
export class NavBarComponent implements OnInit {

  navbarOpen = false;

  telefone: number = 0;
  codigo: number = 0;
  local: string = '';
  login: boolean = false;

  displayStyle: string = '';

  userData: any;

  constructor(
    private navBarService: NavBarService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    
  ) { }

  ngOnInit(): void {
    this.local = environment.local;
    this.login = environment.login;
  }


  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());

  }

  // tslint:disable-next-line:typedef
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // tslint:disable-next-line:typedef
  Ajuda() {
    this.navbarOpen = !this.navbarOpen;
  }

  // tslint:disable-next-line:typedef
  openPopup(): void {
    // tslint:disable-next-line:no-unused-expression
    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
    // tslint:disable-next-line:prefer-const

  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.ngZone.run(() => {
        environment.login = false;
        this.router.navigate(['']);
      });
    });
  }

}

