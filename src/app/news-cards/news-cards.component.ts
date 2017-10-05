import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {

    @Input() feed: any;

    constructor() {}

    ngOnInit() {}

}