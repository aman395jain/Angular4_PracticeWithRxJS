import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {UserDescriptonComponent} from "../user-descripton/user-descripton.component";
import {UserDescriptionNestedComponent} from "../app/user-description-nested/user-description-nested.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            {
                path: 'userDiscription',
                component: UserDescriptonComponent,
                children: [{

                    path: 'userDiscriptionNested',
                    component: UserDescriptionNestedComponent
                }]

            }
            //{path: 'userDiscription/userDiscriptionNested', component: UserDescriptionNestedComponent }
        ], {preloadingStrategy: PreloadAllModules})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class UserDescriptionRouteModule {
}
