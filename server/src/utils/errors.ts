export class UnknownUserError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UnknownUserError";
    }
}

export class InvalidPayloadValueError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidPayloadValueError";
    }
}

export class InvalidPasswordError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidPasswordError";
    }
}

export class PasswordMatchValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PasswordMatchValidationError";
    }
}

export class CharacterLengthValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CharacterLengthValidationError";
    }
}

export class UploadFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UploadFailedError";
    }
}