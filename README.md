# Input/Output

These decorators are used to pass data across nested components

## Input `@Input`
It used to allw data to flow form parent component to its child component

We first import the Input decorator:
`import { Component, Input } from '@angular/core';` 

Inside the class we invoke the input:
```ts
export class ChildComponent {
    @Input() reviews: number;
}
```
basically the property following the Input decorator gets binded with a property present in the parent component by using the template i.e.:
```ts
export class ParentComponent {
    books: any[] = [{
        bookReviews: 15
    }]
}
```
`parent.html`
```html
<div>
    <child [reviews]="book.bookReviews"></child>
</div>
```
`child.html`
```html
<div>
    <p>{{ reviews }}</p>
</div>
```

## Output
Outputs are used to create Custom events that pass data from component to the outside world.

So we want to get data from the child component and than we want to pass it to the parent component.

### Event Emitter
Listens for something to happen and emits an event when triggered. (Observer pattern)

The children is the publisher
The parent is the subscriber

###Implementation
`child.component.ts`
```ts
import { Output, EventEmitter } from '@angular/core';

export class ChildComponent {
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
}
``` 
`child.component.html`
```html
<div (click)="onClick()">
    <button>Click me</button>
</div>
```

`parent.component.html`
```html
<div>
    <p>{{ showMessage }}</p>
    <child (notify)="onNotifyClicked($event)"></child>
</div>
```

`parent.component.ts`
```ts
export class ParentComponent {
    onNotifyClicked(message: string): void {
        this.showMessage = message;
    }
}

```
(A **generic** in typescript defines the type of an instance. Such as a object or function.)