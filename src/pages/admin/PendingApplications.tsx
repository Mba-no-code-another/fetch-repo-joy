import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PendingApplications = () => {
  const pendingApplications = [
    {
      id: 1,
      name: 'Green Valley Farm',
      email: 'contact@greenvalley.com',
      location: 'Vermont',
      products: ['Organic Vegetables', 'Dairy'],
      appliedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Sunrise Orchards',
      email: 'info@sunriseorchards.com',
      location: 'Washington',
      products: ['Fruits', 'Honey'],
      appliedDate: '2024-01-14'
    }
  ];

  const handleApprove = (id: number) => {
    console.log('Approved application:', id);
  };

  const handleReject = (id: number) => {
    console.log('Rejected application:', id);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Pending Applications</h1>
      
      <div className="space-y-4">
        {pendingApplications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{application.name}</span>
                <Badge variant="outline">Pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p><strong>Email:</strong> {application.email}</p>
                  <p><strong>Location:</strong> {application.location}</p>
                  <p><strong>Applied:</strong> {application.appliedDate}</p>
                </div>
                <div>
                  <p><strong>Products:</strong></p>
                  <div className="flex gap-1 mt-1">
                    {application.products.map((product) => (
                      <Badge key={product} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleApprove(application.id)} size="sm">
                  Approve
                </Button>
                <Button 
                  onClick={() => handleReject(application.id)} 
                  size="sm" 
                  variant="outline"
                >
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PendingApplications;