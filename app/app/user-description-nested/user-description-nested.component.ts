import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FlagOnUserDescriptionService} from "../service/flag-on-user-description.service";

@Component({
    moduleId: module.id,
    selector: 'user-description-nested',
    templateUrl: './user-description-nested.component.html',
    styleUrls: ['./user-description-nested.component.css'],
    providers: [FlagOnUserDescriptionService]
})
/***
 * Nested Component for nested module
 * author @Aman Jain
 * date 23/08/2018
 */
export class UserDescriptionNestedComponent implements OnInit {

    constructor(private route: Router, private flagOnUserDescriptionService:FlagOnUserDescriptionService) {
    }

    ngOnInit() {
    }
    backToUserDescription = () => {
        this.route.navigate(['/userDiscription'])
        this.flagOnUserDescriptionService.setIsHidden(true);
    }
}
