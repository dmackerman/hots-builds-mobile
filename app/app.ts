import { App, Platform, Modal, NavController, Loading } from 'ionic-angular';
import { IndexView } from './pages/index/index.view';
import { HeroesService } from './services/heroes.service';
import { StatusBar } from 'ionic-native'

@App({
    template: `<ion-nav id="nav" [root]="indexView"></ion-nav>`,
    providers: [
        HeroesService
    ]
})

export class NCAP {
    private indexView = IndexView;

    constructor(
        private platform: Platform
    ) {
        this.platform.ready().then(() => {
            StatusBar.styleBlackOpaque();
            console.info('platform ready');
        });
    }
}
