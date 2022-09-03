export interface IVisitorFeedback {
  id: number;
  form_type: number;
  institute_id?: number;
  organization_id?: number;
  name?: string;
  mobile?: string;
  email?: boolean;
  address?: string;
  comment?: string;
  read_at?: string;
  archived_at?: string;
  archived_by?: string;
  row_status?: string | number;
}

export interface IVisitorFeedbackIndustry extends IVisitorFeedback {
  industry_association_id: number;
  name: string;
  mobile: string;
  comment: string;
}
