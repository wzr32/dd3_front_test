import * as React from 'react';
import Button from '../../shared/components/button/Button';
import ItemCard from '../../shared/components/card/ItemCard';
import { BUY_ENDPOINT, RENT_ENDPOINT } from '../../shared/config/contants';
import { PropertyType } from './properties.types';

interface IPropertyListProps {
  list: PropertyType[];
  apiURL: string;
  loading: boolean;
  setUrl: (value: string) => void;
  onSet: (item: PropertyType) => void;
}

const filterOpt = [
  'Name',
  'Cost',
  'Bedrooms',
  'Bathroom',
  'Year',
  'Slot',
  'Mts',
];

const PropertyList: React.FC<IPropertyListProps> = ({
  list,
  apiURL,
  loading,
  setUrl,
  onSet,
}) => {
  const [filterField, setFilterField] = React.useState<string>('');
  const [filterArray, setFilterArray] = React.useState<
    PropertyType[] | never[]
  >([]);

  React.useEffect(() => {
    setFilterArray(list);
  }, [list]);

  const handleOnFilter = (value: string): void => {
    const auxArray = [...list];
    const auxFilterArray: PropertyType[] = [];

    const reg = new RegExp(value, 'gi');

    auxArray.forEach((element) => {
      if (
        String(
          element[`${filterField?.toLowerCase() as keyof PropertyType}`],
        ).match(reg)
      ) {
        auxFilterArray.push(element);
      }
    });
    setFilterArray(auxFilterArray);
  };

  const handleChangeType = (value: string): void => {
    setFilterField(value);
  };

  const handleOnChangeData = (val: string): void => {
    if (val === 'buy') {
      setUrl(BUY_ENDPOINT);
    } else if (val === 'rent') {
      setUrl(RENT_ENDPOINT);
    }
  };

  let content: JSX.Element | JSX.Element[] = (
    <div className="my-28">No data to show</div>
  );

  if (loading) {
    content = (
      <>
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"></div>
        <span className="visually-hidden">Loading...</span>
      </>
    );
  }

  if (filterArray.length) {
    content = (
      <>
        {filterArray.map((item, i) => (
          <ItemCard key={`property-${i}`} item={item} onSet={onSet} />
        ))}
      </>
    );
  }

  return (
    <>
      <span className="w-32 h-1 block deco-gradient" />
      <div className="flex flex-col justify-center md:flex-row md:justify-between items-center mb-8 mt-3">
        <h3 className="text-6xl font-bold mb-10 md:mb-1">Similar listings</h3>
        <div>
          <input
            data-tooltip-target="tooltip-filter"
            type="text"
            placeholder="Search list..."
            className="mr-4 border border-slate-300 border-solid rounded-md w-60 h-8 px-3"
            onChange={(e) => handleOnFilter(e.target.value)}
          />
          <select
            className="bg-white w-24 h-8 border border-slate-300 rounded-md border-solid text-slate-400"
            onChange={(e) => {
              handleChangeType(e.target.value);
            }}
            value={filterField}>
            <option value="" disabled>
              Type
            </option>
            {filterOpt.map((opt, i) => (
              <option
                className="capitalize"
                value={opt}
                key={`filter_type-${i}`}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-10 text-center md:text-left">
        <Button
          title="Buy"
          addedClass={`bg-amber-400 px-5 py-1 mr-4 ${
            apiURL === BUY_ENDPOINT ? 'bg-black text-white' : null
          }`}
          onClick={() => handleOnChangeData('buy')}
        />
        <Button
          title="Rent"
          addedClass={`bg-amber-400 px-5 py-1 mr-4 ${
            apiURL === RENT_ENDPOINT ? 'bg-black text-white' : null
          }`}
          onClick={() => handleOnChangeData('rent')}
        />
      </div>
      <div className="flex justify-center md:justify-between flex-wrap">
        {content}
      </div>
    </>
  );
};

export default PropertyList;
