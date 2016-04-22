import { Page, Modal, NavController, Loading } from 'ionic-angular';
import { HeroDetailView } from '../hero-detail/hero-detail.view';
import * as template from './index.view.html';
import * as heroesJson from '../../data/data.json';

@Page({
    template
})
export class IndexView {
    private heroes = [];

    constructor(private nav: NavController) { }

    /**
     * When page loads, get the Model Year information
     */
    onPageLoaded() {
        this.heroes = heroesJson;
    }

    onHeroTap(hero) {
        console.log(hero);
        this.nav.push(HeroDetailView, { hero });
    }

};


