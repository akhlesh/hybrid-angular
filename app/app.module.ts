import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UpgradeModule,
        RouterModule.forRoot(
            appRoutes,
            {
                useHash: true,
                initialNavigation: false
            }
        )
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
        TestComponent
    ],
    entryComponents: [AppComponent]
})
export class AppModule { 
   ngDoBootstrap(){}
}
