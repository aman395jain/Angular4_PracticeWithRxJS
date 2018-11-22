import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {DataFromRegisterationFormService} from '../register-form/data-from-registeration-form.service'
import {error, isUndefined} from "util";
import {Router, ActivatedRouteSnapshot, ActivatedRoute} from "@angular/router";
import {DataFromJsonPlaceHolderService} from "../app/service/data-from-json-place-holder.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    moduleId: module.id,
    selector: 'app-observe-page',
    templateUrl: './observe-page.component.html',
    styleUrls: ['./observe-page.component.css'],
    providers: [DataFromJsonPlaceHolderService]
})
export class ObservePageComponent implements OnInit {


    private urlDataToMethod: any;
    selectAll: any;
    individualCB: any;
    individualForAllCB: any;
    private stateParameters: any

    private dataFrom_getDataUrl: any;
    private shareNameData = new BehaviorSubject('jain');
    shareNameDataAsObservable = this.shareNameData.asObservable();
    // private _observeUrl: url = "https://jsonplaceholder.typicode.com/users";

    constructor(private http: Http, private dataFromRegisterationFormService: DataFromRegisterationFormService, private route: ActivatedRoute, private dataFromJsonPlaceHolderService: DataFromJsonPlaceHolderService) {
        this.getDataUrl();
        this.getDataFromRegister();
        this.individualCB = true
        this.selectAll = true;
        this.individualForAllCB = true;
        this.stateParameters = ''

    }



    ngOnInit(): void {
        this.stateParameters = this.route.snapshot.queryParamMap.get('name')
        this.shareNameData.next('hhhhhhhhh');
        console.log(this.shareNameDataAsObservable.subscribe((val) =>  {
            console.log(val)
        }))
        this.dataFromJsonPlaceHolderService.getDataFromApi().subscribe((data) =>{
            console.log(data)
        })
        this.dataFromJsonPlaceHolderService.getDataFromApi().subscribe((data) =>{
            console.log(data)
        })
    }

    btnToUserDescription = function () {
        //this.router.navigate(['/userDiscription'])
    };
    getDataUrl = function (): any {
        var _observeUrl = "https://jsonplaceholder.typicode.com/users";
        this.http.get(_observeUrl).subscribe((res: Response) => {
            this.urlDataToMethod = res.json();
            // console.log(this.urlDataToMethod[0]);
            return this.urlDataToMethod;
        })
        return this.urlDataToMethod;
    }
    onIndividualCB1 = function (): any {
        this.dataFrom_getDataUrl = this.getDataUrl();
        this.individualForAllCB = true;
        for (var i = 0; i < this.dataFrom_getDataUrl.length; i++) {
            this.individualForAllCB = this.individualForAllCB && this.individualCB
        }
        return this.individualForAllCB;
    }
    onIndividualCB = function (eve: any): any {
        this.dataFrom_getDataUrl = this.getDataUrl();
        this.selectAll = true;
        console.log(eve)
        if (this.onIndividualCB1()) {
            this.selectAll = true;
        } else {
            this.selectAll = false;
        }
        for (var i = 0; i < this.dataFrom_getDataUrl.length; i++) {
            // if (!isUndefined(this.onIndividualCB1())) {
            //     this.selectAll = this.onIndividualCB1();
            // }
        }
    }
    onSelectAll = function (): any {
        if (this.selectAll) {
            this.dataFrom_getDataUrl = this.getDataUrl();
            for (var i = 0; i < this.dataFrom_getDataUrl.length; i++) {
                this.individualCB = true;
            }
        } else {
            this.individualCB = false;
        }
    }

    getDataFromRegister = function (): void {
        this.dataFromRegisterationFormService.sharedDataViaService().subscribe((data: any) => {
            this.data = data; // And he have data here too!
        })

    }


}
