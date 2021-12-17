import * as React from 'react';
import { PropertyType } from '../../../modules/properties/properties.types';

interface IItemCardProps {
  item: PropertyType;
  onSet: (item: PropertyType) => void;
}

const ItemCard: React.FC<IItemCardProps> = ({ item, onSet }) => {
  return (
    <div
      className="bg-white shadow-md shadow-slate-400 rounded-3xl w-max-96 mb-10 cursor-pointer hover:scale-1 ease-out duration-300"
      onClick={() => onSet(item)}>
      <div className="rounded-r-2xl">
        <img
          src={item.src}
          alt={item.name}
          className="rounded-t-3xl object-cover h-48 w-96"
        />
      </div>
      <div className="rounded p-5">
        <p className="font-bold capitalize border-slate-300 border-b border-solid pb-3">
          {item.name}
        </p>
        <ul className="flex justify-around font-bold pt-3">
          <li>
            <i className="fas fa-bed mr-2"></i>
            {item.bedrooms}
          </li>
          <li>
            <i className="fas fa-shower mr-2"></i>
            {item.bathroom}
          </li>
          <li>{item.slot}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
