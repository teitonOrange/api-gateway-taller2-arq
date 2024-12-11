import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
    async login(credentials: { email: string; password: string }) {
        const { data } = await axios.post(process.env.ACCESS_MANAGEMENT+'auth/login', credentials);
        return  data
    }

    
}
