export enum MODES {
    CREATE, EDIT
}

export class SharedState {
    mode: MODES = MODES.EDIT;
    id: number;
}
