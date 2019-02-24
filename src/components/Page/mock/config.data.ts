import { IPageConfig } from '../../../types/PageConfig.type';

export const _pageConfig: IPageConfig = {
  layout: {
    id: 1,
    direction: 'v',
    w: '100%',
    h: '100%',
    flexible: true,
    children: [
      {
        id: 2,
        direction: 'h',
        w: '100%',
        h: 300,
        flexible: false,
        style: { background: '#f2f2f2' }
      },
      {
        id: 3,
        direction: 'h',
        w: '100%',
        h: '50%',
        flexible: true
      }
    ]
  },
  portalets: [
    {
      id: 12,
      componentName: 'DataGrid',
      options: {
        search: {},
        actions: {},
        table: {}
      }
    },
    {
      id: 13,
      componentName: 'DataGrid',
      options: {
        search: {},
        actions: {},
        table: {}
      }
    }
  ],
  entities: [
    {
      id: 111,
      name: 'user',
      pageStrategy: 'f',
      pageSize: 10,
      pageNo: 1,
      where: {}
    }
  ],
  // 分离关联关系
  layout2portalet: { 2: 12, 3: 13 },
  portalet2entity: { 12: 111 }
};
