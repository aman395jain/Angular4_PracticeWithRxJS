import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlagOnUserDescriptionService} from "../app/service/flag-on-user-description.service";

@Component({
    moduleId: module.id,
    selector: 'app-user-descripton',
    templateUrl: './user-descripton.component.html',
    styleUrls: ['./user-descripton.component.css'],
    providers: [FlagOnUserDescriptionService]
})
export class UserDescriptonComponent {



    private IsHidden: boolean = true;
     // @ViewChild(UserDescriptionNestedComponent) userDescriptionNested;

    constructor(private router: Router, private flagOnUserDescriptionService:FlagOnUserDescriptionService) {

    }


    ngAfterViewChecked() {
         this.IsHidden = this.flagOnUserDescriptionService.getIsHidden()
        console.log(this.flagOnUserDescriptionService.getIsHidden())
    }
    navigateToUserNestedComp = () => {
        this.IsHidden = false
        this.router.navigate(['/userDiscription/userDiscriptionNested'])

    }

}
