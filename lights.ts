/**
 * Lights drawer
 */
//% color="#4B8794" icon="\uf0eb" weight=100
namespace lights {
    export class Lights {

        constructor(p:number, n:NumberFormat) {
           
        }
    }

    /**
     * Create a Light set and automtically set it to a variable
     * @param pin number
     * @param number of lights
     */
    //% block="New Light Set|Pin %p|Light Count %n"
    //% blockID="Lights_new_light_set"
    //% blockSetVariable=pixels
    //% inlineInputMode=external
    export function new_light_set(p: number, n: number): Lights {
        return new Lights(p, n);
    }


    /**
     * sets the color of one light in a light set
     * @param light set
     * @param pixel number
     * @param red
     * @param green
     * @param blue
     */
    //% block="Set Light Color |Light Set %ls|Pixel Number %pn|Red %r|Green %g|Blue %b"
    //% blockID="Lights_set_light_color"
    //% inlineInputMode=external
    //% ls.defl=pixels
    //% ls.shadow=variables_get
    export function set_light_color(ls: undefined, pn: number, r: number, g: number, b: number) {
    }

    /**
     * sets the color of multiple lights in a light set
     * @param light set
     * @param start pixel
     * @param end pixel
     * @param red
     * @param green
     * @param blue
     */
    //% block="Set Multiple Lights |Light Set %ls|Start %start|End %end|Red %r|Green %g|Blue %b"
    //% blockID="Lights_set_multiple_lights"
    //% inlineInputMode=external
    //% ls.defl=pixels
    //% ls.shadow=variables_get
    export function set_multiple_lights(ls: undefined, start: number, end: number, r: number, g: number, b: number) {
    }

    /**
     * sets the color of all lights in a light set
     * @param light set
     * @param red
     * @param green
     * @param blue
     */
    //% block="Set All Lights |Light Set %ls|Red %r|Green %g|Blue %b"
    //% blockID="Lights_set_all_lights"
    //% inlineInputMode=external
    //% ls.defl=pixels
    //% ls.shadow=variables_get
    export function set_all_lights(ls: undefined, r: number, g: number, b: number) {
    }

    /**
     * turns off all lights in a light set
     * @param light set
     */
    //% block="Clear All Lights |Light Set %ls"
    //% blockID="Lights_clear_all_lights"
    //% inlineInputMode=external
    //% ls.defl=pixels
    //% ls.shadow=variables_get
    export function clear_all_lights(ls: undefined) {
    }

}
