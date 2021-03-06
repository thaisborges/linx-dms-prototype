import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const pagesRoutes: Routes = [
   /*  {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: 'pageOne',
                component: PageOneComponent
            },
            {
                path: 'pageTwo',
                component: PageTwoComponent
            },
            {
                path: 'pageThree',
                component: PageThreeComponent
            },
        ],
    } */
];
@NgModule({
    imports: [
        RouterModule.forRoot(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
