import axios from 'axios';
import * as React from 'react';
import Layout from '../../layout/Layout';
import { BUY_ENDPOINT } from '../../shared/config/contants';
import MainProperty from './MainProperty';
import { PropertyType } from './properties.types';
import PropertyList from './PropertyList';
import SellerContactForm from './SellerContactForm';

// interface IPropertyViewProps {}

const PropertyView: React.FC = () => {
  const [elementList, setElementList] = React.useState<PropertyType[]>([]);
  const [apiURL, setApiURL] = React.useState<string>(BUY_ENDPOINT);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] =
    React.useState<PropertyType | null>(null);

  React.useEffect(() => {
    const apiCall = async (): Promise<void> => {
      setLoading(true);
      try {
        const { data } = await axios.get(apiURL);
        setElementList(data);
        setSelectedProperty(data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    apiCall();
  }, [apiURL]);

  const handleSetElement = (item: PropertyType): void => {
    setSelectedProperty(item);
  };

  return (
    <Layout property={selectedProperty}>
      <div className="py-8">
        <div className="flex flex-col md:flex-row mb-10 h-auto">
          <MainProperty property={selectedProperty} />
          <SellerContactForm />
        </div>
        <PropertyList
          list={elementList}
          onSet={handleSetElement}
          setUrl={setApiURL}
          apiURL={apiURL}
          loading={loading}
        />
      </div>
    </Layout>
  );
};

export default PropertyView;
