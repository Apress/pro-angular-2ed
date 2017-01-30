import { Injectable, OpaqueToken } from "@angular/core";

export const LOG_SERVICE = new OpaqueToken("logger");
export const LOG_LEVEL = new OpaqueToken("log_level");

export enum LogLevel {
    DEBUG, INFO, ERROR
}

@Injectable()
export class LogService {
    minimumLevel: LogLevel = LogLevel.INFO;

    logInfoMessage(message: string) {
        this.logMessage(LogLevel.INFO, message);
    }

    logDebugMessage(message: string) {
        this.logMessage(LogLevel.DEBUG, message);
    }

    logErrorMessage(message: string) {
        this.logMessage(LogLevel.ERROR, message);
    }

    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            console.log(`Message (${LogLevel[level]}): ${message}`);
        }
    }
}

@Injectable()
export class SpecialLogService extends LogService {

    constructor() {
        super()
        this.minimumLevel = LogLevel.DEBUG;
    }

    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            console.log(`Special Message (${LogLevel[level]}): ${message}`);
        }
    }
}
