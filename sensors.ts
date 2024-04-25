/**
 * Sensors drawer
 */
//% color="#6c4494" icon="\uf1e5" weight=100
namespace Sensors {

    /**
     * Ultrasonic distance, in cm
     * @param ultrasonic distance sensor
     */
    //% block="Ultrasonic Distance cm %us"
    //% blockID="Sensors_distance"
    //% us.defl=ultra
    //% us.shadow=variables_get
    export function distance(us: undefined): number {
        return 0;
    }

    export class Ultrasonic_Sensor {

        constructor(tp: number, ep: number) {

        }
    }

    /**
     * Create an Ultrasonic Sensor and automtically set it to a variable
     * @param trigger pin number
     * @param echo pin number
     */
    //% block="New Ultrasonic Sensor |Trigger Pin %tp|Echo Pin %ep"
    //% blockID="Sensors_new_ultrasonic_sensor"
    //% blockSetVariable=ultra
    //% inlineInputMode=external
    export function new_ultrasonic_sensor(tp: number, ep: number): Ultrasonic_Sensor {
        return new Ultrasonic_Sensor(tp, ep);
    }

}

