import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ShowService } from 'app/core';
import { SlugifyPipe } from 'app/shared';

@Component({
    selector: 'nc-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    form: FormGroup;
    isLoading: boolean;

    constructor(public showService: ShowService,
                private slugifyPipe: SlugifyPipe,
                private formBuilder: FormBuilder,
                private router: Router) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            search: '',
        });

        this.router.events
            .subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.isLoading = true;
                } else if (event instanceof NavigationEnd) {
                    this.isLoading = false;
                }
            });
    }

    submit(): void {
        if (this.form.valid) {
            const {id, name}: Partial<Show> = this.form.get('search').value;

            this.router.navigate(['/show', id, this.slugifyPipe.transform(name)]);
        }
    }
}
