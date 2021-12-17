import * as React from 'react';
import icon from '../../assets/ICON_LOGO.png';
import text from '../../assets/TEXT_LOGO.png';

const Logo: React.FC = () => {
  return (
    <div className="flex h-8 w-24">
      <img className="mr-2" src={icon} alt="" />
      <img className="object-contain" src={text} alt="" />
    </div>
  );
};

export default Logo;
