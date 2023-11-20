import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}

    login({ email, password }: User) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    register({ email, password }: User) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }
}
