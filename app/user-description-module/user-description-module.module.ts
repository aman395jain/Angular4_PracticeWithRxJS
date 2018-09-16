import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDescriptionRouteModule} from "../user-description-route/user-description-route.module";
import {UserDescriptonComponent} from "../user-descripton/user-descripton.component";
import {UserDescriptionNestedComponent} from "../app/user-description-nested/user-description-nested.component";

@NgModule({
    imports: [
        CommonModule,
        UserDescriptionRouteModule
    ],
    exports: [UserDescriptonComponent,
        UserDescriptionNestedComponent,
        UserDescriptionRouteModule
    ],
    declarations: [UserDescriptonComponent,
        UserDescriptionNestedComponent]
})
export class UserDescriptionModule {
}
