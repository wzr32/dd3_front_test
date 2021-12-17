import * as React from 'react';
import Button from '../shared/components/button/Button';
import Logo from '../shared/components/logo/Logo';

const Footer: React.FC = () => {
  return (
    <section className="main-gradient">
      <div className="container mx-auto">
        <div className="py-14 flex flex-col justify-center md:justify-between md:flex-row">
          <h3 className="font-bold text-3xl text-center mb-5 md:text-5xl sm:text-4xl sm:text-left">
            Make your dreams a <span style={{ color: '#FFAC12' }}>reality</span>
          </h3>
          <Button
            title="Work with us"
            addedClass="bg-amber-500 text-black py-4 w-44 sm:w-36 py-2 mx-auto md:mx-0"
          />
        </div>
        <hr />
        <div className="flex justify-evenly flex-wrap py-14 ">
          <div className="mr-10">
            <Logo />
            <div className="flex justify-evenly md:justify-between mx-auto py-4">
              <i className="fab fa-facebook-f text-2xl"></i>
              <i className="fab fa-twitter text-2xl"></i>
              <i className="fab fa-instagram text-2xl"></i>
            </div>
          </div>
          {[1, 2, 3].map((_, index) => (
            <ul key={index} className="mb-5 text-center">
              <li className="font-bold">Column Heading</li>
              {[1, 2, 3, 4].map((_, i) => (
                <li className="cursor-pointer" key={`column_item-${i}`}>
                  Link goes here
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
