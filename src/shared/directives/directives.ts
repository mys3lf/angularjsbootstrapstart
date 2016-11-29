
import { Navigation } from './navigation/navigation';
import { NavigationEntries } from './navigation/navigationEntries';
import { Carousel } from './carousel/carousel';

import { Footer } from './footer/footer';

var cmModule = angular.module("custom-directives", [])
    .directive('navigation', Navigation.Factory())
    .directive('navigationEntries', NavigationEntries.Factory())
    .directive('customFooter', Footer.Factory())
    .directive('carousel', Carousel.Factory())
    ;
 