import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

// Mock rider data
const mockRider = {
    name: 'James P.',
    rating: 4.9,
    car: 'White Toyota Prius',
    licensePlate: 'ABC-1234',
    avatarUrl: 'https://github.com/shadcn.png',
};

const FindingRider = ({ onNext }: { onNext: () => void }) => {
  const [isFinding, setIsFinding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinding(false); // Rider found!
    }, 4000); // Simulate a 4-second search
    return () => clearTimeout(timer);
  }, []);

  if (isFinding) {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Finding you a ride...</CardTitle>
          <CardDescription>Please wait while we connect you with a nearby driver.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900 mx-auto mt-4"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="text-center">
        <CardHeader>
            <CardTitle>We've found you a driver!</CardTitle>
            <CardDescription>Your ride is on the way.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <Avatar className="w-24 h-24 mx-auto border-4 border-gray-200">
                <AvatarImage src={mockRider.avatarUrl} alt={mockRider.name} />
                <AvatarFallback>{mockRider.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-xl font-bold">{mockRider.name}</div>
            <div className="flex items-center justify-center text-lg">
                <Star className="text-yellow-400 fill-current mr-1" /> {mockRider.rating}
            </div>
            <div className="text-gray-600">
                <p>{mockRider.car}</p>
                <p className="font-mono text-lg">{mockRider.licensePlate}</p>
            </div>
            <Button onClick={onNext} className="w-full">
                Track your ride
            </Button>
        </CardContent>
    </Card>
  );
};

export default FindingRider;