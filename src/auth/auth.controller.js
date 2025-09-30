"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var register_user_dto_1 = require("./dto/register-user.dto");
var login_user_dto_1 = require("./dto/login-user.dto");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.register = function (registerUserDto) {
        return this.authService.register(registerUserDto);
    };
    AuthController.prototype.login = function (loginUserDto) {
        return this.authService.login(loginUserDto);
    };
    __decorate([
        (0, common_1.Post)('register'),
        (0, common_1.UsePipes)(new common_1.ValidationPipe()),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "register");
    __decorate([
        (0, common_1.Post)('login'),
        (0, common_1.UsePipes)(new common_1.ValidationPipe()),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "login");
    AuthController = __decorate([
        (0, common_1.Controller)('auth'),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
