import * as React from 'react';
import { PropertyType } from '../modules/properties/properties.types';
import Footer from './Footer';
import Navbar from './Navbar';

interface ILayoutProps {
  property: PropertyType | null;
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ property, children }) => {
  return (
    <>
      <Navbar propData={property} />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
