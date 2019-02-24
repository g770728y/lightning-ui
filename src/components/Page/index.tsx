import * as React from 'react';
import { IPageConfig, IBox } from '../../types/PageConfig.type';
import { IPageData } from '../../types/PageData.type';
import { DataGrid } from '../DataGrid/index';
import * as R from 'ramda';
import { FlexBox } from '../FlexBox/index';

interface IProps {
  config: IPageConfig;
  data: IPageData;
}

export const Page: React.SFC<IProps> = function({ config, data }) {
  const {
    layout: layoutConfig,
    portalets: portaletConfigs,
    layout2portalet,
    portalet2entity
  } = config;
  console.log('config:', config);
  console.log('data:', data);
  const id2Portalets: {
    [portaletId: number]: React.ReactNode;
  } = portaletConfigs.reduce((acc, { componentName, id, options }) => {
    let content: React.ReactNode;
    switch (componentName) {
      case 'DataGrid':
        content = <DataGrid options={options} />;
    }
    return { ...acc, id: content };
  }, {});

  const layout2PortaletNode = R.forEachObjIndexed(
    (portaletId, layoutId) => ({ [layoutId]: id2Portalets[portaletId] }),
    layout2portalet
  );

  const newLayoutConfig = appendBoxContent(layoutConfig, layout2PortaletNode);

  return <FlexBox config={newLayoutConfig} />;
};

// 设置box.content
// 返回的值 可直接用于 FlexBox
function appendBoxContent(
  layoutConfig: IBox,
  layout2PortaletNode: { [layoutId: number]: React.ReactNode }
): IBox {
  let _children: IBox[] = [];
  if (layoutConfig.children && layoutConfig.children.length >= 0) {
    _children = layoutConfig.children.map(child =>
      appendBoxContent(child, layout2PortaletNode)
    );
  }

  return {
    ...layoutConfig,
    content: layout2PortaletNode[layoutConfig.id],
    children: _children
  };
}
