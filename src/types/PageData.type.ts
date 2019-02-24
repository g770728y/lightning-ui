export type IPageData = {
  [entityConfigId: number]: { entityName: string; data: IListData };
};

// listData适合dataGrid使用
export interface IListData<Entity = any> {
  list: Entity[];
  where?: object;
  // 鼠标点击时一行
  activeId?: number;
  totalCount: number;
}
