import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDescriptionRouteModule} from "../user-description-route/user-description-route.module";
import {UserDescriptonComponent} from "../user-descripton/user-descripton.component";
import {UserDescriptionNestedComponent} from "../app/user-description-nested/user-description-nested.component";
import {CarouselDirective} from "../directive/CarouselDirective";
import {UserDescriptonComponentChildComponent} from "../app/user-descripton-component-child/user-descripton-component-child.component";

@NgModule({
    imports: [
        CommonModule,
        UserDescriptionRouteModule
    ],
    exports: [UserDescriptonComponent,
        UserDescriptionNestedComponent,
        UserDescriptionRouteModule,
        CarouselDirective
    ],
    declarations: [UserDescriptonComponent,
        UserDescriptionNestedComponent,
        UserDescriptonComponentChildComponent,
        CarouselDirective
        ],
    providers : []
})
export class UserDescriptionModule {
}
