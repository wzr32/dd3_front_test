import * as React from 'react';

const Spinner: React.FC = () => {
  return (
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
      role="status"
    />
  );
};

export default Spinner;
