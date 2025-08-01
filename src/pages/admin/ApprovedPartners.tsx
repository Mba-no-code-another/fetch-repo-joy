import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ApprovedPartners = () => {
  const approvedPartners = [
    {
      id: 1,
      name: 'Mountain View Farm',
      email: 'contact@mountainview.com',
      location: 'Colorado',
      products: ['Organic Vegetables', 'Herbs'],
      joinedDate: '2023-08-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Coastal Dairy Co.',
      email: 'info@coastaldairy.com',
      location: 'California',
      products: ['Dairy Products', 'Cheese'],
      joinedDate: '2023-07-20',
      status: 'Active'
    }
  ];

  const handleSuspend = (id: number) => {
    console.log('Suspended partner:', id);
  };

  const handleReactivate = (id: number) => {
    console.log('Reactivated partner:', id);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Approved Partners</h1>
      
      <div className="space-y-4">
        {approvedPartners.map((partner) => (
          <Card key={partner.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{partner.name}</span>
                <Badge variant={partner.status === 'Active' ? 'default' : 'secondary'}>
                  {partner.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p><strong>Email:</strong> {partner.email}</p>
                  <p><strong>Location:</strong> {partner.location}</p>
                  <p><strong>Joined:</strong> {partner.joinedDate}</p>
                </div>
                <div>
                  <p><strong>Products:</strong></p>
                  <div className="flex gap-1 mt-1">
                    {partner.products.map((product) => (
                      <Badge key={product} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {partner.status === 'Active' ? (
                  <Button 
                    onClick={() => handleSuspend(partner.id)} 
                    size="sm" 
                    variant="outline"
                  >
                    Suspend
                  </Button>
                ) : (
                  <Button onClick={() => handleReactivate(partner.id)} size="sm">
                    Reactivate
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApprovedPartners;