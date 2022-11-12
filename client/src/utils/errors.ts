type ClientErrorMapType = {
    [key: string]: string;
}

// Authentication
export const unknownUserError = "UnknownUserError";
export const invalidPasswordError = "InvalidPasswordError";
// Request Validation
export const characterLengthValidationError = "characterLengthValidationError";
export const passwordMatchValidationError = "PasswordMatchValidationError";
export const invalidPayloadValueError = "InvalidPayloadValueError";
export const serverDidNotRespond = "ServerDidNotRespondError";
export const uploadFailedError = "UploadFailedError";

export const clientErrorMap: ClientErrorMapType = {
    UnknownUserError: "User not found",
    InvalidPasswordError: "Invalid password",
    CharacterLengthValidationError: "Invalid character length",
    PasswordMatchValidationError: "Password doesn't match",
    InvalidPayloadValueError: "Invalid input",
    ServerDidNotRespond: "Server did not respond",
    UploadFailedError: "Image upload failed"
}