import { Action } from '@ngrx/store';

export const LOAD_EMAIL = 'LOAD EMAIL';
export const LOAD_EMAIL_FAIL = 'LOAD EMAIL FAIL';
export const LOAD_EMAIL_SUCCESS = 'LOAD EMAIL SUCCESS';

export class LoadEmail implements Action{
   readonly type = LOAD_EMAIL;
}