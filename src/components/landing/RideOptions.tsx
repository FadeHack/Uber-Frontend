import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Bike, Sparkles } from "lucide-react";

const RideOptions = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Find the perfect ride</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <Car className="mx-auto mb-4" size={48} />
              <CardTitle>UberX</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Affordable, everyday rides for you and up to 3 friends.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Sparkles className="mx-auto mb-4" size={48} />
              <CardTitle>Uber Premier</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Elevate your experience with high-end cars and top-rated drivers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Bike className="mx-auto mb-4" size={48} />
              <CardTitle>Uber Moto</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quick and affordable bike rides for solo trips through the city.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RideOptions;