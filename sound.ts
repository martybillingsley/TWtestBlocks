/**
 * Sound drawer
 */
//% color="#495294"  icon="\uf028" weight=100
namespace Sound {

    /**
     * plays tone for a length of time, then stops
     * @param pin number
     * @param frequency
     * @param duration
     */
    //% block="Play Tone Duration |Pin Number %p|Frequency Hz %f|Duration %d"
    //% blockID="Sound_play_tone_duration"
    //% inlineInputMode=external
    export function play_tone_duration(p: number, f: number, d: number) {
    }

    /**
     * stops tone
     * @param pin number
     */
    //% block="Stop Tone|Pin Number %p"
    //% blockID="Sound_stop_tone"
    export function stop_tone(p: number) {
    }


    /**
     * starts tone playing
     * @param pin number
     * @param frequency
     */
    //% block="Play Tone |Pin Number %p|Frequency Hz %f"
    //% blockID="Sound_play_tone"
    //% inlineInputMode=external
    export function play_tone(p: number, f: number) {
    }

}