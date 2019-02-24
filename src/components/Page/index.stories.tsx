import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IPageConfig, IEntityConfig } from '../../types/PageConfig.type';
import { IPageData, IListData } from '../../types/PageData.type';
import { Page } from './index';
import { _pageData, userListData } from './mock/data.data';
import { _pageConfig } from './mock/config.data';
import * as R from 'ramda';

function getList(entityConfig: IEntityConfig): Promise<IListData> {
  const p1 = Promise.resolve().then(() => {
    return userListData.list;
  });
  const p2 = Promise.resolve().then(() => {
    return 2;
  });
  return Promise.all([p1, p2]).then(([list, count]) => ({
    list,
    totalCount: count,
    activeId: -1
  }));
}

function zebra(xs1: any[], xs2: any[]): any[] {
  if (xs1.length !== xs2.length)
    throw new Error('zebra方法必须接收两个同样长度的数组');
  return xs1.reduce((acc, x1, idx) => [...acc, x1, xs2[idx]], []);
}

function getPageData(pageConfig: IPageConfig): Promise<IPageData> {
  return Promise.all(pageConfig.entities.map(getList))
    .then(lists => zebra(pageConfig.entities.map(R.prop('id')), lists))
    .then(R.splitEvery(2))
    .then(R.fromPairs) as Promise<IPageData>;
}

const PageContainer: React.SFC<{ pageId: number }> = function({ pageId }) {
  const [pageConfig, setPageConfig] = React.useState<IPageConfig>();
  const [pageData, setPageData] = React.useState<IPageData>();
  React.useEffect(() => {
    Promise.resolve()
      .then(() => {
        setPageConfig(_pageConfig);
        return _pageConfig;
      })
      .then(getPageData)
      .then(pd => setPageData(pd));
  }, [pageId]);

  if (!pageConfig || !pageData) return null;

  return <Page config={pageConfig} data={pageData} />;
};

storiesOf('Page', module).add('单个表格(简单)', () => {
  // 真实情形中, 应根据page的id去查询config, 这里用mock直接替换
  return <PageContainer pageId={1} />;
});
