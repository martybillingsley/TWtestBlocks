/**
 * Remote drawer
 */
//% color="#000000" icon="\uf11b" weight=100
namespace Remote {

    /**
     * Read remote raw data
     * @param pin number
     */
    //% block="Read Remote Raw %p"
    //% blockID="Remote_read_remote_raw"
    //% blockSetVariable=ir
    export function read_remote_raw(p: number): number {
        return 0;
    }


    /**
     * Read remote
     * @param pin number
     */
    //% block="Read Remote %p"
    //% blockID="Remote_read_remote"
    //% blockSetVariable=ir
    export function read_remote(p: number): string {
        return "";
    }

}

