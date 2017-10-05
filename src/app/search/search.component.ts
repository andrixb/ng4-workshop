import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [SearchService],
})
export class SearchComponent implements OnInit {

    private feeds: any;
    private timerSubscription: AnonymousSubscription;

    constructor(
        private _searchService: SearchService,
    ) {}

    ngOnInit(): void {
        this.getArticles();
    }

    public ngOnDestroy(): void {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
      }

    private getArticles(): void {
        this._searchService.getData()
            .subscribe(
                feed => this.feeds = feed.response.results,
                error => console.log(error));

        this.subscribeToFeed();
    }

    private subscribeToFeed(): void {
        // this should be done server side throught socket event emission
        this.timerSubscription = Observable.timer(5000)
            .subscribe(() => this.getArticles());
    }
}
