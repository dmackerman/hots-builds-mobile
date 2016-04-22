import { filter } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Injectable } from 'angular2/core';
import { Subject, BehaviorSubject } from 'rxjs';

import * as heroesJson from '../data/data.json';


@Injectable()
export class HeroesService {
    public heroes = heroesJson;

    getHeroData(heroSlug: string): Object {
        return filter(this.heroes, { slug: heroSlug });
    }

}
