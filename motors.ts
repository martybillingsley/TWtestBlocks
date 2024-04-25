/**
 * Motors drawer
 */
//% color="#934654" icon="\uf1b9" weight=100
namespace Motors {

    /**
     * detaches a servo motor
     * @param servo motor
     */
    //% block="Detach Servo |Motor %sm"
    //% blockID="Motors_detach_servo"
    //% inlineInputMode=external
    //% sm.defl=servo
    //% sm.shadow=variables_get
    export function detach_servo(sm: undefined) {
    }

    /**
     * attaches a servo motor
     * @param servo motor
     */
    //% block="Attach Servo |Motor %sm"
    //% blockID="Motors_attach_servo"
    //% inlineInputMode=external
    //% sm.defl=servo
    //% sm.shadow=variables_get
    export function attach_servo(sm: undefined) {
    }

    /**
     * sets the angle of a servo motor
     * @param servo motor
     * @param angle
     */
    //% block="Write Servo |Motor %sm|Angle %a"
    //% blockID="Motors_set_angle"
    //% inlineInputMode=external
    //% sm.defl=servo
    //% sm.shadow=variables_get
    //% a.min=0 a.max=180 a.defl=90
    export function set_angle(sm: undefined, a: number) {
    }

    export class Servo {

        constructor(p: number) {

        }
    }

    /**
     * Create a Servo and automtically set it to a variable
     * @param pin number
     */
    //% block="New Servo Motor |Pin %p"
    //% blockID="Motors_new_servo"
    //% blockSetVariable=servo
    //% inlineInputMode=external
    export function new_servo(p: number,): Servo {
        return new Servo(p);
    }

    /**
    * Set speed and direction for DC motors
    * @param motor A speed 
    * @param motor A direction 
    * @param motor B speed 
    * @param motor B direction 
    */
    //% block="DC Motors Speed Dir|Motor A Speed %a1|Motor A Dir %a2|Motor B Speed %b1|Motor B Dir %b2"
    //% blockID="Motors_speed_direction"
    //% inlineInputMode=external
    //% a1.defl=0
    //% a2.defl=0
    //% b1.defl=0
    //% b2.defl=0
    export function speed_direction(a1: number, a2: number, b1: number, b2: number) {
    }

    /**
     * Set up DC motors
     * @param motor a speed pin 
     * @param motor a dir pin 
     * @param motor b speed pin 
     * @param motor b dir pin 
     */
    //% block="DC Motors Setup|Motor A Speed Pin %a1|Motor A Dir Pin %a2|Motor B Speed Pin %b1|Motor B Dir Pin %b2"
    //% blockID="Motors_dc_setup"
    //% inlineInputMode=external
    //% a1.min=1 a1.defl=11
    //% a2.min=1 a2.defl=12
    //% b1.min=1 b1.defl=13
    //% b2.min=1 b2.defl=14
    export function dc_setup(a1: number, a2: number, b1: number, b2: number) {
    }

}





