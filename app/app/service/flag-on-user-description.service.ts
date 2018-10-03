import { Injectable } from '@angular/core';

@Injectable()
export class FlagOnUserDescriptionService {

    private _IsHidden: any;
    getIsHidden = () => {
        this._IsHidden = this.setIsHidden;
        return this._IsHidden;
    }

    setIsHidden(value: any) {
        this._IsHidden = value;
    }

  constructor() {
  }

}
