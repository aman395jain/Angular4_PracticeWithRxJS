import { TestBed, inject } from '@angular/core/testing';

import { DataFromRegisterationFormService } from './data-from-registeration-form.service';

describe('DataFromRegisterationFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFromRegisterationFormService]
    });
  });

  it('should be created', inject([DataFromRegisterationFormService], (service: DataFromRegisterationFormService) => {
    expect(service).toBeTruthy();
  }));
});
