import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio',      url: 'inicio',      icon: 'home' },
    { title: 'Vista 1',     url: 'vista1',      icon: 'text' },
    { title: 'Vista 2',     url: 'vista2',      icon: 'text' },
    { title: 'Vista 3',     url: 'vista3',      icon: 'text' },
    { title: 'Ajustes',     url: 'ajustes',     icon: 'cog' },
    { title: 'Información', url: 'informacion', icon: 'information-circle' },

    
    // Para crear una nueva pagina usar el comando -> ionic generate page {nombre de la pagina}
    //-------------------------
    // * AÑADIR NUEVO MENU
    //-------------------------
    //    TITULO MENU      NOMBRE DEL LA PAGINA    NOMBRE IONIC ICONS              
    //{ title: 'xxxxxx',      url: 'xxxxxxx',      icon: 'xxxxxxxxx' },
  ];
  constructor() {}
}
