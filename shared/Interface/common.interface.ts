import {
  Cell,
  CellProps,
  CellValue,
  ColumnInstance,
  FilterProps,
  Filters,
  FilterValue,
  IdType,
  Row,
  TableInstance,
  TableState,
} from 'react-table';
import {GridColDef} from '@mui/x-data-grid';

export interface IIdHolder {
  id: number;
}

export interface IIdTitle extends IIdHolder {
  title: string;
}

export interface IIdTitles extends IIdTitle {
  title_en?: string;
}

export interface ICreateUpdateAt {
  updated_at?: string | undefined;
  created_at?: string | undefined;
}

export interface IIdTitleCreateUpdateAt extends IIdTitles, ICreateUpdateAt {}

export interface IFAQ {
  show_in: number;
  institute_id?: number;
  organization_id?: number;
  industry_association_id?: number;
  question: string;
  answer: string;
  row_status: number;
  other_language_fields?: object;
}

export interface IStaticPageCommon extends IIdTitle {
  sub_title?: string;
}

export interface IColumnInstance<T extends object> extends ColumnInstance<any> {
  filter?: any;
  canFilter: boolean;
  filterValue: any;
  setFilter: (updater: any) => void;
  preFilteredRows: Array<any>;
  align: string;
  selectFilterItems?: Array<ISelectFilterItem>;
  permanentVisible?: boolean;
}

export interface IFilters<T extends object> extends Filters<any> {
  id: IdType<any>;
  value: FilterValue;
}

export interface ITableState extends TableState {
  filters: IFilters<any>;
}

export interface IFilterProps<T extends object> extends FilterProps<any> {
  column: IColumnInstance<any>;
}

export interface ITableInstance<T extends object> extends TableInstance<any> {
  setAllFilters: (
    updater: Filters<any> | ((filters: Filters<any>) => Filters<any>),
  ) => void;
  setFilter: (id: any, updater: any) => void;
  allColumns: Array<IColumnInstance<any>>;
  state: ITableState;
  page: Array<Row>;
  prepareRow: (row: Row) => void;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
  setPageSize: (pageSize: number) => void;
}

export interface ICellProps<T extends object> extends CellProps<any> {
  column: IColumnInstance<any>;
  row: Row<any>;
  cell: Cell<any, any>;
  value: CellValue<any>;
}

export interface ISelectFilterItem {
  id: number | string;
  title: string;
}

export interface FilterItem {
  filterKey: string;
  filterValue: any;
}

export interface IGridFilter {
  apiPath: string;
  valueFieldName: string;
  labelFieldNames: Array<string>;
  multiSelect?: boolean;
}

export interface IGridColDef extends GridColDef {
  filter?: IGridFilter;
  filterKey?: string;
}
