import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/deviceService/device.service';
import { NetworkService } from '../../services/networkService/network.service';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.page.html',
  styleUrls: ['./vista1.page.scss'],
})
export class Vista1Page implements OnInit {

  constructor( private deviceService:DeviceService , private network:NetworkService) { }

  ngOnInit() {

    this.deviceService.informacionBateriaDispositivo();
    this.deviceService.informacionTipoDispositivo();
    this.deviceService.CodigoLocalIdiomaActualDispositivo();
    this.deviceService.EtiquetaLocalIdiomaActualDispositivo();
    this.deviceService.informacionIdUnicoDispositivo();

    //------

    this.network.estadoDeConexion();




  }

}
