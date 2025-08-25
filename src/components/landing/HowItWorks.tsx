import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, UserCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin size={32} />
              </div>
              <CardTitle>1. Enter Destination</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Open the app and enter where you want to go in the "Where to?" box.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Car size={32} />
              </div>
              <CardTitle>2. Choose Your Ride</CardTitle>
            </CardHeader>
            <CardContent>
              <p>See upfront pricing and all the ride options available in your area.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <UserCheck size={32} />
              </div>
              <CardTitle>3. Meet Your Driver</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track your driver's arrival and see their details so you can find them.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;