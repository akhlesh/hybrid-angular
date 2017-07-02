import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { ApplicationRef, NgZone } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare const angular: any;
var app = angular.module('hybrid', []);
app.directive('app', downgradeComponent({ component: AppComponent }));


platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    let zone = ref.injector.get(NgZone);
    const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['hybrid']);
    zone.run(() => {
        debugger;
        ref.injector.get(Router).initialNavigation();
    });
});