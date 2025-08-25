import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddressForm = ({ onNext }: { onNext: () => void }) => {
  const { from, to, setFrom, setTo } = useAppStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to) {
      onNext();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book a Ride</CardTitle>
        <CardDescription>Enter your pickup and destination addresses.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="from">From</Label>
            <Input
              id="from"
              placeholder="Current Location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <Input
              id="to"
              placeholder="Destination"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">See Fares</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddressForm;