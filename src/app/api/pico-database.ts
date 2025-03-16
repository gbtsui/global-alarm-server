export type Pico = {
    ip: string;
    lastPing: Date;
}

export const globalForPicoList = global as unknown as {picoList: Array<Pico>}

export const picoList: Array<Pico> = globalForPicoList.picoList || [];

if (!globalForPicoList.picoList) {
    globalForPicoList.picoList = picoList;
}