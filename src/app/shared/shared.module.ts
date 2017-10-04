import { NgModule, Provider, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterComponent, TypeaheadComponent, LoaderComponent, AccordionComponent, ButtonComponent } from './components';
import { SlugifyPipe, LeftPadPipe, HttpsPipe } from './pipes';

const MODULES: NgModule[] = [
    CommonModule,
];

const COMPONENTS: Component[] = [
    PosterComponent,
    TypeaheadComponent,
    LoaderComponent,
    AccordionComponent,
    ButtonComponent,
];

const PIPES: Provider[] = [
    SlugifyPipe,
    LeftPadPipe,
    HttpsPipe,
];

@NgModule({
    imports: [
        MODULES,
    ],
    declarations: [
        COMPONENTS,
        PIPES,
    ],
    exports: [
        MODULES,
        COMPONENTS,
        PIPES,
    ],
    providers: [
        PIPES,
    ],
})
export class SharedModule {}
