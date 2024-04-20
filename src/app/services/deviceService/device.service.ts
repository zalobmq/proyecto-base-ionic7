import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }


  // Devuelve un identificador único para el dispositivo.
  // Ejemplos de uso de la siguiente función:

  //  1 -> Identificación de usuarios
  //  2 -> Gestión de licencias
  //  3 -> Seguimiento de errores
  async informacionIdUnicoDispositivo() {
    try {

      const info = await Device.getId();
      console.log(info);
      /**
       *  Ejemplo del resultado de info:
       * 
       *  {
       *    identifier: 'xxxxxxxxxxxxx'
       *  }
       */
    } catch (error) {
      console.error('Error | informacionIdUnicoDispositivo -> ', error);
    }
  }

  // Obtener información del sistema operativo del dispositivo -> IOS | ANDROID
  // Ejemplos de uso de la siguiente función:

  //  1 -> Personalización de la interfaz de usuario
  //  2 -> Optimización de recursos
  //  3 -> Compatibilidad con características específicas
  async informacionTipoDispositivo() {
    try {
      const info = await Device.getInfo();
      console.log(info);
      /**
       *  {
       *   model: 'SM-G955U', 
       *   platform: 'web', 
       *   operatingSystem: 'android', 
       *   osVersion: 'Android 8.0.0', 
       *   manufacturer: 'Google Inc.',
       *   isVirtual: false,
       *   manufacturer: "Google Inc.",
       *   model: "SM-G955U",
       *   operatingSystem: "android",
       *   osVersion: "Android 8.0.0",
       *   platform: "web",
       *   webViewVersion: "116.0.0.0",
       *  }
       */
    } catch (error) {
      console.error('Error | informacionTipoDispositivo -> ', error);
    }
  }

  // Obtener información acerca de la batería del dispositivo -> NIVEL DE BATERIA | ESTA CARGANDO O NO
  // Ejemplos de uso de la siguiente función:

  //  1 -> Gestión de energía
  //  2 -> Notificaciones de carga
  //  3 -> Registro de uso de energía
  async informacionBateriaDispositivo() {
    try {

      const info = await Device.getBatteryInfo();
      console.log(info);
      /**
       *  Ejemplo del resultado de info:
       * 
       * {
       *  batteryLevel: 0.51,
       *  isCharging: false
       * }
       */
    } catch (error) {
      console.error('Error | informacionBateriaDispositivo -> ', error);
    }
  }

  // Obtener el código local del idioma actual del dispositivo.
  // Ejemplos de uso de la siguiente función:

  //  1 -> Personalización del contenido
  //  2 -> Selección de idioma predeterminado
  //  3 -> Adaptación de la interfaz de usuario
  async CodigoLocalIdiomaActualDispositivo() {
    try {

      const info = await Device.getLanguageCode();
      console.log(info);
      /**
       * Ejemplo del resultado de info:
       * 
       * {
       *  value: 'es'
       * }
       * 
       */
    } catch (error) {
      console.error('Error | informacionBateriaDispositivo -> ', error);
    }
  }

  // Obtener la etiqueta local del idioma actual del dispositivo.
  // Ejemplos de uso de la siguiente función:

  //  1 -> Selección de configuración regional
  //  2 -> Personalización del contenido cultural
  //  3 -> Selección de contenido localizado
  async EtiquetaLocalIdiomaActualDispositivo() {
    try {

      const info = await Device.getLanguageTag();
      console.log(info);
     
      
    } catch (error) {
      console.error('Error | EtiquetaLocalIdiomaActualDispositivo -> ', error);
    }
  }

}
