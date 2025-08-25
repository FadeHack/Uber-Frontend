import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Phone, XCircle } from 'lucide-react';

// Using the same mock data for consistency
const mockRider = {
    name: 'James P.',
    rating: 4.9,
    car: 'White Toyota Prius',
    licensePlate: 'ABC-1234',
    avatarUrl: 'https://github.com/shadcn.png',
    eta: '5 minutes',
};

const MapView = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="relative">
      <div className="bg-gray-200 h-[70vh] w-full flex items-center justify-center rounded-md text-gray-500">
        <p className="text-2xl font-bold">— Map View Simulation —</p>
      </div>

      <Card className="absolute bottom-4 left-4 right-4 shadow-2xl">
        <CardContent className="p-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-semibold">Arriving in</p>
                    <p className="text-2xl font-bold text-black">{mockRider.eta}</p>
                </div>
                <div className="text-right">
                    <p className="font-mono text-lg">{mockRider.licensePlate}</p>
                    <p className="text-sm text-gray-600">{mockRider.car}</p>
                </div>
            </div>
            <hr className="my-3"/>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={mockRider.avatarUrl} />
                        <AvatarFallback>{mockRider.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-bold">{mockRider.name}</p>
                        <div className="flex items-center text-sm">
                            <Star size={16} className="text-yellow-400 fill-current mr-1" /> {mockRider.rating}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon"><Phone /></Button>
                    <Button variant="destructive" size="icon"><XCircle /></Button>
                </div>
            </div>
            <Button onClick={onNext} className="mt-4 w-full">
                Ride Completed - Proceed to Payment
            </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapView;