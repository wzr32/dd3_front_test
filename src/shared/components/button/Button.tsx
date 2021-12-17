/* eslint-disable react/require-default-props */
import * as React from 'react';
import Spinner from '../spinner/Spinner';

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
  addedClass?: string | undefined;
  loading?: boolean;
  props?: unknown;
}

const Button: React.FC<IButtonProps> = ({
  title,
  addedClass,
  loading,
  ...props
}) => {
  return (
    <button className={`rounded-tr-2xl ${addedClass}`} {...props}>
      {loading ? <Spinner /> : title}
    </button>
  );
};

export default Button;
