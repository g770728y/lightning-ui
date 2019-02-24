import { IPageData, IListData } from '../../../types/PageData.type';
import { IUserEntity } from '../../../entities/user.entities';

export const userListData: IListData<IUserEntity> = {
  list: [
    {
      id: 1,
      name: 'wsq',
      sex: 'w',
      age: 14
    },
    {
      id: 2,
      name: 'gtt',
      sex: 'm',
      age: 14
    }
  ],
  activeId: -1,
  totalCount: 2
};

export const _pageData: IPageData = {
  1: { entityName: 'user', data: userListData }
};
