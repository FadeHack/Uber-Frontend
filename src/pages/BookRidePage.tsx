import { useState } from 'react';
import AddressForm from '@/components/booking/AddressForm';
import FareOptions from '@/components/booking/FareOptions';
import FindingRider from '@/components/booking/FindingRider';
import MapView from '@/components/booking/MapView';
import Payment from '@/components/booking/Payment';

type RideStep = 'address' | 'fares' | 'finding' | 'map' | 'payment';

const BookRidePage = () => {
  const [step, setStep] = useState<RideStep>('address');

  const renderStep = () => {
    switch (step) {
      case 'address':
        return <AddressForm onNext={() => setStep('fares')} />;
      case 'fares':
        return <FareOptions onNext={() => setStep('finding')} />;
      case 'finding':
        return <FindingRider onNext={() => setStep('map')} />;
      case 'map':
        return <MapView onNext={() => setStep('payment')} />;
      case 'payment':
        return <Payment />;
      default:
        return <AddressForm onNext={() => setStep('fares')} />;
    }
  };

  return <div className="max-w-xl mx-auto">{renderStep()}</div>;
};

export default BookRidePage;