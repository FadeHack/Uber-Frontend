import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppStore } from '@/lib/store';
import { Link } from 'react-router-dom';

const Payment = () => {
    const { from, to } = useAppStore();
  return (
    <Card>
        <CardHeader className='text-center'>
            <CardTitle>Complete Your Payment</CardTitle>
            <CardDescription>This is a simulated payment screen for your ride from {from} to {to}.</CardDescription>
        </CardHeader>
        <CardContent className='text-center'>
            <p className='text-3xl font-bold mb-6'>$12.00</p>
            <div className='space-y-4'>
                <Button className="w-full">Pay with Card</Button>
                <Button className="w-full" variant="outline">Pay with PayPal</Button>
                <Link to="/">
                    <Button className="w-full mt-4" variant="secondary">Back to Home</Button>
                </Link>
            </div>
        </CardContent>
    </Card>
  );
};

export default Payment;