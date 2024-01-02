"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForgetPWError = exports.UserStudentError = exports.UserPasswordMissMatchError = exports.UserNotExistError = void 0;
class UserNotExistError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, UserNotExistError.prototype);
    }
}
exports.UserNotExistError = UserNotExistError;
class UserPasswordMissMatchError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, UserPasswordMissMatchError.prototype);
    }
}
exports.UserPasswordMissMatchError = UserPasswordMissMatchError;
class UserStudentError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, UserStudentError.prototype);
    }
}
exports.UserStudentError = UserStudentError;
class UserForgetPWError extends Error {
    constructor(msg) {
        super(msg);
        Object.setPrototypeOf(this, UserForgetPWError.prototype);
    }
}
exports.UserForgetPWError = UserForgetPWError;
//# sourceMappingURL=errorhandling.js.map