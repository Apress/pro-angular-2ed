export class Message {

    constructor(private text: string,
        private error: boolean = false,
        private responses?: [[string, (string) => void]]) { }
}
