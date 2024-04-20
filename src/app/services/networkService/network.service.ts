import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }


  // Obtener el estado actual de la conexión de red del dispositivo.
  // Ejemplos de uso de la siguiente función:
  //  1 -> Comprobación del estado de la conexión antes de realizar operaciones que requieren conectividad.
  //  2 -> Actualización de la interfaz de usuario en función del estado de la conexión (por ejemplo, mostrar un mensaje de error si no hay conexión).
  //  3 -> Realización de acciones específicas según el estado de la conexión (por ejemplo, sincronización de datos cuando se detecta una conexión).
  async estadoDeConexion() {

    try {

      const status = await Network.getStatus();
      console.log('Network status:', status);
      /**
      * Ejemplo del resultado de info:
      * 
      * {
      *   connected: true,
      *   connectionType: 'wifi'
      * }
      */
    } catch (error) {
      console.error("Error | estadoDeConexion -> " + error);

    }


  }

  // Agregar un listener para detectar cambios en el estado de la conexión de red.
  // Ejemplos de uso de la siguiente función:
  //  1 -> Actualización dinámica de la interfaz de usuario en respuesta a cambios en la conectividad (por ejemplo, ocultar o mostrar elementos dependiendo de si hay conexión).
  //  2 -> Realización de acciones automáticas cuando se restablece la conexión (por ejemplo, enviar datos pendientes de sincronización cuando se detecta una conexión activa).
  //  3 -> Registro de eventos de conexión de red para análisis y seguimiento del comportamiento del usuario (por ejemplo, registrar cuándo y cómo se pierde y se restablece la conexión).



  // Eliminar todos los listeners registrados para el evento 'networkStatusChange'.
  // Ejemplos de uso de la siguiente función:
  //  1 -> Limpieza de los listeners de eventos cuando ya no son necesarios (por ejemplo, al salir de una página o componente específico).
  //  2 -> Gestión de los recursos del sistema al evitar la acumulación de listeners innecesarios que podrían afectar al rendimiento de la aplicación.
  //  3 -> Restablecimiento del estado de escucha a su estado inicial cuando no se necesitan más eventos de cambio de estado de red (por ejemplo, al cerrar la aplicación o al pasar a una página diferente).
}
