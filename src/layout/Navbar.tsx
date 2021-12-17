import * as React from 'react';
import { PropertyType } from '../modules/properties/properties.types';
import Button from '../shared/components/button/Button';
import Logo from '../shared/components/logo/Logo';

interface INavbarProps {
  propData: PropertyType | null;
}

const Navbar: React.FC<INavbarProps> = ({ propData }) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const handleOpenMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  const navMobile: JSX.Element | JSX.Element[] = (
    <ul className="justify-center items-center w-8/12 mx-auto flex flex-col flex-wrap leading-10">
      {[1, 2, 3, 4].map((_, i) => (
        <li className="mb-4" key={`mobile_item-${i}`}>
          NavLink
        </li>
      ))}
      <li>
        <Button title="Work with us" addedClass="bg-amber-400 py-2.5 px-3" />
      </li>
    </ul>
  );

  return (
    <header className="main-gradient px-3 md:px-0">
      {openMenu && (
        <nav className="mobile fixed w-screen h-screen bg-black text-4xl flex flex-col justify-center items-center">
          <i
            onClick={() => handleOpenMenu()}
            className="fas fa-times absolute bottom-10 text-white p-3 rounded-sm border-white border-solid"></i>
          {navMobile}
        </nav>
      )}
      <nav className="container mx-auto flex justify-between items-center h-20">
        <Logo />
        <i
          onClick={() => handleOpenMenu()}
          className="fas fa-bars text-xl md:hidden"></i>
        <ul className="justify-between items-center w-8/12 hidden md:flex">
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>
            <Button
              title="Work with us"
              addedClass="bg-amber-400 w-40 py-2.5"
            />
          </li>
        </ul>
      </nav>
      <div className="container mx-auto flex justify-between items-center font-bold text-lg h-20">
        <span className="capitalize text-2xl">{propData?.name}</span>
        <span className="capitalize text-2xl">
          {'$'} {propData?.cost.toLocaleString('us') || 0}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
