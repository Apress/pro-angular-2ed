import { OpaqueToken } from "@angular/core";

export enum MODES {
    CREATE, EDIT
}

export class SharedState {

    constructor(public mode: MODES, public id?: number) { }
}

export const SHARED_STATE = new OpaqueToken("shared_state");
