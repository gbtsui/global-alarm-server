export type Pico = {
    ip: string;
    lastPing: Date;
}

export type Alarm = {
    time: Date;
    song: number;
    pico: Pico
}

export const globalForPicoList = global as unknown as {picoList: Array<Pico>, alarmList: Array<Alarm>};

export const picoList: Array<Pico> = globalForPicoList.picoList || [];
export const alarmList: Array<Alarm> = globalForPicoList.alarmList || []

if (!globalForPicoList.picoList || !globalForPicoList.alarmList) {
    globalForPicoList.picoList = picoList;
    globalForPicoList.alarmList = alarmList;
}



