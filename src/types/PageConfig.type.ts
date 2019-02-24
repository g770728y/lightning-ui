export interface IPageConfig {
  layout: IBox;
  portalets: IPortaletConfig[];
  entities: IEntityConfig[];

  // 将关联分离出来
  layout2portalet: { [layoutId: number]: number };
  portalet2entity: { [portaletId: number]: number };
}

export interface IBox {
  id: number;
  direction: 'h' | 'v';
  w?: string | number;
  h?: string | number;
  flexible?: boolean;
  style?: React.CSSProperties;
  children?: IBox[];
  content?: React.ReactNode;
}

export type IPortaletConfig = IDataGridConfig;

export interface IDataGridConfig extends IPortaletConfigBase {
  componentName: 'DataGrid';
  options: IDataGridOptions;
}

export interface IDataGridOptions {
  search: any;
  actions: any;
  table: any;
}

interface IPortaletConfigBase {
  id: number;
}

export interface IEntityConfig {
  id: number;
  name: string;
  pageStrategy?: 'f' | 'b';
  pageSize?: number;
  pageNo?: number;
  where?: object;
}
