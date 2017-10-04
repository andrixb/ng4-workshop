# Components

Components are the foundantion of modular development. They help to separate our code into easy to manage chunks.
Components are organised in tree structures.

Components can be easily Isolated, Tested and Reused.

# How to declare and use it?

We create a class and export it:
```ts
export class MyComponent {
    pageTitle: string = 'Title';
}
```
We than add the `Component` decorator and import it from `@angular/core`
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss'],
})
export class MyComponent {
    pageTitle: string = 'Title';
}
```

We need than to import the component in the App Module and into the declaration section.