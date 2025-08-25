import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const fares = [
  { type: 'Bike', price: '$5', icon: '🚲' },
  { type: 'Auto', price: '$8', icon: '🛺' },
  { type: 'Cab', price: '$12', icon: '🚕' },
];

const FareOptions = ({ onNext }: { onNext: () => void }) => {
  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose a ride</CardTitle>
        <CardDescription>Select your preferred vehicle option.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fares.map((fare) => (
            <div
              key={fare.type}
              onClick={() => setSelected(fare.type)}
              className={cn(
                "flex justify-between items-center p-4 border rounded-md cursor-pointer transition-all",
                selected === fare.type ? "border-black border-2" : ""
              )}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{fare.icon}</span>
                <h3 className="font-semibold">{fare.type}</h3>
              </div>
              <span className="font-bold">{fare.price}</span>
            </div>
          ))}
        </div>
        <Button onClick={onNext} disabled={!selected} className="mt-6 w-full">
          Confirm Ride
        </Button>
      </CardContent>
    </Card>
  );
};

export default FareOptions;