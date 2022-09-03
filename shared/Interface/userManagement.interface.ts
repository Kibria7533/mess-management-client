import {IIdHolder, IIdTitles} from './common.interface';

export interface IUser extends IIdHolder {
  user_type_code: string;
  role_id: string;
  first_name?: string;
  last_name?: string;
  username: string;
  email: string;
  mobile: string;
  organization_id?: string | number | null;
  institute_id?: string | number | null;
  loc_district_id?: string | number | null;
  loc_division_id?: string | number | null;
  loc_upazila_id?: string | number | null;
  avatar_path?: string;
  password?: string;
  address?: string;
  row_status?: string;
  branch_id?: string | number;
  training_center_id?: string | number;
}
export interface IYouth extends IIdHolder {
  first_name?: string;
  last_name?: string;
  username?: string;
  email: string;
  mobile: string;
  avatar_path?: string;
  password?: string;
  address?: string;
  about_me?: string;
  gender?: number;
  birth_date?: string;
}
export interface IRole extends IIdTitles {
  key: string;
  permission_group_id: string | number | null;
  permission_sub_group_id: string | number | null;
  organization_id?: string | number | null;
  institute_id?: string | number | null;
  description?: string | null;
  row_status?: string;
}

export interface IPermission extends IIdTitles {
  title: string;
  key: string;
  module: string;
}
