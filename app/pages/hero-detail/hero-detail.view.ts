import { Page, Modal, NavParams, NavController, Loading } from 'ionic-angular';
import * as template from './hero-detail.view.html';

@Page({
    template
})
export class HeroDetailView {
    private hero: Object;
    private selectedBuild: string = 'hotslogs';

    constructor(
        private nav: NavController,
        private params: NavParams
    ) {}

    onPageLoaded() {
        this.hero = this.params.get('hero');
    }


};


