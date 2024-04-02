import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../Redux/store';
import { aucnetActions, getListCategoryAucnet } from '../services/Aucnet.slice';
import { categoryType } from '../services/Aucnet.type';
import { useSelector } from 'react-redux';

const useGetCategoryAucnet = () => {
  const dispatch = useAppDispatch();

  const listCategory = useSelector<RootState, categoryType[] | null>(
    (state) => state.categoryAucnet.listCategory,
  );

  useEffect(() => {
    if (!listCategory) {
      onCategoryAucnet();
    }
  }, [listCategory]);

  const onCategoryAucnet = () => {
    const getCategoryAucnetSucess = (resdata: categoryType[]) => {
      dispatch(aucnetActions.setListCategoryAucnet(resdata));
    };

    dispatch(getListCategoryAucnet(getCategoryAucnetSucess));
  };

  return {};
};

export default useGetCategoryAucnet;
