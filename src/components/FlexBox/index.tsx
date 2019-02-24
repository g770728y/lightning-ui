import * as React from 'react';
import { IBox } from '../../types/PageConfig.type';

interface IProps {
  config: IBox;
}

function getFlexStyle(config: IBox): React.CSSProperties {
  return {
    position: 'relative',
    ...config.style,
    display: 'flex',
    flexDirection: config.direction === 'h' ? 'row' : 'column',
    width: config.w || '100%',
    height: config.h || '100%',
    flexShrink: config.flexible ? 1 : 0,
    flexGrow: config.flexible ? 1 : 0,
    justifyContent: 'stretch',
    alignItems: 'stretch'
  };
}

export const FlexBox: React.SFC<IProps> = function({ config }) {
  const flexStyle = getFlexStyle(config);
  const { id, content, children } = config;
  return (
    <div style={flexStyle} key={id}>
      {content || (children || []).map(child => FlexBox({ config: child }))}
    </div>
  );
};
