import * as React from 'react';
import { PropertyType } from './properties.types';

interface IMainPropertyProps {
  property: PropertyType | null;
}

const MainProperty: React.FC<IMainPropertyProps> = ({ property }) => {
  return (
    <div className="mb-5 mr-5 w-full md:mb-0 md:w-7/12 lg:w-9/12 h-full">
      <div className="mb-5 w-full h-96">
        <img
          src={property?.src}
          alt={property?.name}
          className="rounded-tr-3xl mb-4 object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col bg-white shadow-md shadow-slate-300 rounded-2xl p-4 font-bold">
        <p className="px-10 pb-4 border-b border-solid border-slate-200">
          {property?.name}
        </p>
        <ul className="flex justify-around pt-4">
          <li>
            <i className="fas fa-bed mr-2"></i>
            {property?.bedrooms}
          </li>
          <li>
            <i className="fas fa-shower mr-2"></i>
            {property?.bathroom}
          </li>
          <li>{property?.slot}</li>
          <li>
            <i className="fas fa-warehouse mr-2"></i>
            {property?.mts}
          </li>
          <li>
            <i className="far fa-calendar mr-2"></i>
            {property?.year}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainProperty;
