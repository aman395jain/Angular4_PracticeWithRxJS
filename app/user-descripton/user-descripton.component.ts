import {AfterViewChecked, ChangeDetectorRef, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FlagOnUserDescriptionService} from "../app/service/flag-on-user-description.service";
import {UserDescriptionNestedComponent} from "../app/user-description-nested/user-description-nested.component";
import {UserDescriptonComponentChildComponent} from "../app/user-descripton-component-child/user-descripton-component-child.component";
import {ObservePageComponent} from "../observe-page/observe-page.component";


@Component({
    moduleId: module.id,
    selector: 'app-user-descripton',
    templateUrl: './user-descripton.component.html',
    styleUrls: ['./user-descripton.component.css'],
    providers: [FlagOnUserDescriptionService]
})
export class UserDescriptonComponent implements AfterViewChecked, OnInit{
    ngOnInit(): void {

        
    }
    images = [
        {
            url: '../app/assets/images/aeroplane.jpg',
            description: `first aeroplane image`
        },
        {
            url: '../app/assets/images/aeroplane1.jpg',
            description: `Second aeroplane image`
        },
        {
            url: '../app/assets/images/aeroplane2.jpg',
            description: `Third aeroplane image`
        },
        {
            url: '../app/assets/images/aeroplane3.jpg',
            description: `Forth aeroplane image`
        }
    ];


    private IsHidden: boolean = true;
    major = 1;

     // @ViewChild(UserDescriptionNestedComponent) userDescriptionNested;
    @ViewChild(UserDescriptonComponentChildComponent) userDescriptonComponentChildComponent;
    @ContentChild(UserDescriptonComponentChildComponent) userDescriptonComponentChildComponent1;


    constructor(private router: Router, private flagOnUserDescriptionService: FlagOnUserDescriptionService) {

        localStorage.removeItem('lName')
        console.log(localStorage)

    }

    ngAfterViewChecked() {
        this.IsHidden = this.flagOnUserDescriptionService.getIsHidden();
        // console.log(typeof this.flagOnUserDescriptionService.getIsHidden());
        console.log(this.userDescriptonComponentChildComponent.printConsole())

      //  console.log(this.userDescriptonComponentChildComponent1.printConsole())
    }

    navigateToUserNestedComp = () => {
        this.IsHidden = false
        this.router.navigate(['/userDiscription/userDiscriptionNested'])

    }

    backToObserverPage = () => {
        this.router.navigate(['/observePage'])
        localStorage.setItem('lName', 'aman')
    }
}
