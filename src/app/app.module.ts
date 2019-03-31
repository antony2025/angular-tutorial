import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    NgModule
} from '@angular/core';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    RouterModule
} from '@angular/router';

import {
    AppComponent
} from './app.component';
import {
    ProductListComponent
} from './products/product-list.component';
import {
    StarComponent
} from './shared/star.component';
import {
    ProductDetailsComponent
} from './products/product-details.component';
import {
    WelcomeComponent
} from './home/welcome.component';
@NgModule({
    declarations: [
    AppComponent, ProductListComponent, StarComponent, ProductDetailsComponent, WelcomeComponent
  ],
    imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path: 'products/:id',
                component: ProductDetailsComponent
            },
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'welcome',
                pathMatch: 'full'
            }
        ])
  ],
    bootstrap: [AppComponent]
})
export class AppModule {}
