import {IIdTitles} from './common.interface';

export interface Division extends IIdTitles {
  bbs_code: string;
  row_status?: string;
}

export interface District extends IIdTitles {
  bbs_code: string;
  loc_division_id: number;
  row_status?: string;
}

export interface Upazila extends IIdTitles {
  bbs_code: string;
  loc_division_id: number;
  loc_district_id: number;
  row_status?: string;
}
