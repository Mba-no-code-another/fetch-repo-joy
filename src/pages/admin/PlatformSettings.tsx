import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PlatformSettings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Platform Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Commission Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Platform Commission (%)</label>
              <input 
                type="number" 
                defaultValue="10" 
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <Button size="sm">Update</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="email-notifications" defaultChecked />
              <label htmlFor="email-notifications">Email Notifications</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sms-notifications" />
              <label htmlFor="sms-notifications">SMS Notifications</label>
            </div>
            <Button size="sm">Save Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approval Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="auto-approve" />
              <label htmlFor="auto-approve">Auto-approve verified partners</label>
            </div>
            <div>
              <label className="text-sm font-medium">Review Period (days)</label>
              <input 
                type="number" 
                defaultValue="7" 
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <Button size="sm">Update</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" size="sm">Clear Cache</Button>
            <Button variant="outline" size="sm">Export Data</Button>
            <Button variant="outline" size="sm">System Backup</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformSettings;