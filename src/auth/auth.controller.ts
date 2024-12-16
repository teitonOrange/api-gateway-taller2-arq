import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() credentials: { email: string; password: string }) {
        return this.authService.login(credentials);
    }

    @Post('logout')
    async logout(@Req() req) {
        return this.authService.logout(req.headers.authorization);
    }
}
