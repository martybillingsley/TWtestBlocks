/**
 * Time drawer
 */
//% color="#435B96" icon="\uf017" weight=100
namespace time {


    /**
     * Current time since bot reboot, in ms
     */
    //% block="now"
    //% blockID="Time_now"
    export function now(): number {
        return 0;
    }

    /**
     * Stop execution of the program for a length of time
     * @param length of delay in ms
     */
    //% block="delay ms: $ms"
    //% blockID="Time_delay"
    //% ms.min=0 ms.defl=1000
    export function delay(ms: number) {
    }
}
