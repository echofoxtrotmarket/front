import { CustomButton } from '@Components/CustomButton/CustomButton';
import { FC } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { ISingleMarket } from '../../types';
import style from './SingleMarketProduct.module.scss';
import { StoreCart } from './store/cart';
import { StoreFavorites } from './store/favorites';

export const SingleMarketProduct: FC<ISingleMarket> = ({ name, raw_description, price, id }) => {
  const product = { name, raw_description, price, id };
  const { addToCart } = StoreCart;
  const { addToFavorite } = StoreFavorites;

  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
      <CustomButton onClick={() => addToCart({ product_id: id, quantity: 1 })} size="full">
        Добавить в корзину
      </CustomButton>
      <HiOutlineHeart onClick={() => addToFavorite({ product_id: id })} className={style.favorite} />
    </div>
  );
};
