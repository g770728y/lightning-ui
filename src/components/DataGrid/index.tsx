import * as React from 'react';
import { IDataGridOptions, IDataGridConfig } from '../../types/PageConfig.type';
import { IListData } from '../../types/PageData.type';
import './styles.css';

interface IProps {
  data: IListData;
  options: IDataGridConfig;
}

export const DataGrid: React.SFC<IProps> = function({ data, options }) {
  return (
    <div className="lightninig-data-grid-container">
      {/* <GridSearch data={} config={}/>
      <GridActions data={} config={}/> */}
      <GridTable data={data} config={} />
    </div>
  );
};
