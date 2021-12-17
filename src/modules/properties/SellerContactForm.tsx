import * as React from 'react';
import Button from '../../shared/components/button/Button';
import { FormDataType } from './properties.types';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  comment: '',
};

const SellerContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormDataType>(initialForm);
  const [submiting, setSubmiting] = React.useState<boolean>(false);

  const handleChange = (field: string, value: string): void => {
    const auxObject = { ...formData };
    Object.assign(auxObject, { [field]: value });
    setFormData(auxObject);
  };

  const handleSubmit = (): void => {
    console.log('submiting');

    setSubmiting(true);
    setTimeout(() => {
      setFormData(() => initialForm);
      setSubmiting((prevState) => !prevState);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-slate-300 shadow-sm p-5 w-full md:w-4/12 lg:w-3/12">
      <div className="flex bg-slate-100 py-2 px-4 rounded-lg items-center mb-2">
        <img
          className="inline-block h-12 w-12 rounded-full mr-4"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <p className="capitalize">name</p>
          <p className="text-sm text-amber-500">View profile</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-slate-300 rounded-lg py-4 px-6 my-1"
          value={formData?.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full border border-slate-300 rounded-lg py-4 px-6 my-1"
          value={formData?.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full border border-slate-300 rounded-lg py-4 px-6 my-1"
          value={formData?.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <textarea
          cols={30}
          rows={2}
          placeholder="Hello, I am interested in…"
          className="w-full border border-slate-300 rounded-lg py-4 px-6 my-1 resize-none"
          value={formData?.comment}
          onChange={(e) => handleChange('comment', e.target.value)}></textarea>
        <Button
          title="Learn More"
          addedClass="bg-black text-white py-2.5 w-full h-14"
          loading={submiting}
          disabled={submiting}
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default SellerContactForm;
