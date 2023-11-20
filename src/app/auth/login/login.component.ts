import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public valCheck: string[] = ['remember'];
    public user!: User;
    public form!: FormGroup;

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3)]],
        });
    }

    login() {
        const user: User = this.form.value;

        if (!user) {
            return;
        }

        this.authService
            .login(user)
            .then(() => this.router.navigate(['home']))
            .catch((e) => this.form.reset());
    }
}
