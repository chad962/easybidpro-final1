import { useState } from 'react';
import { Card, CardContent } from "../components/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/tabs";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Label } from "../components/label";
import { Separator } from "../components/separator";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("bids");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">EasyBid Pro Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="bids">Active Bids</TabsTrigger>
          <TabsTrigger value="upload">Upload Center</TabsTrigger>
          <TabsTrigger value="history">Bid History</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="accounts">User Accounts</TabsTrigger>
        </TabsList>

        <TabsContent value="bids">
          <Card className="mt-4">
            <CardContent>
              <p className="text-lg">Live bid monitoring from:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Bonfire (Field Dates LLC, UPS Inc)</li>
                <li>IonWave (Field Dates LLC, UPS Inc)</li>
                <li>SAM.gov</li>
                <li>Texas SmartBuy</li>
                <li>City of Houston eBid</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">*API integration in progress for real-time updates</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload">
          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold">Upload Final Documents</h2>
              <Input className="mt-2" type="file" />
              <Button className="mt-4">Submit to Bid</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold">Bid Submission History</h2>
              <p className="text-gray-500 text-sm">View previously submitted bids and outcomes.</p>
              <ul className="mt-2 text-sm list-disc ml-4">
                <li>Bonfire: Playground RFP - Submitted</li>
                <li>IonWave: Water Filtration Contract - In Review</li>
                <li>SAM.gov: Janitorial Services - Not Awarded</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold">Notifications</h2>
              <ul className="mt-2 text-sm">
                <li>- Harris County RFP closes in 2 days</li>
                <li>- Bonfire submission uploaded for UPS Inc</li>
                <li>- New bid opened on SAM.gov for water services</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Company Profiles</h2>
              <Separator className="my-2" />
              <div className="space-y-2">
                <div>
                  <h3 className="font-bold">Field Dates LLC</h3>
                  <p>Email: ccossey@fielddates.com</p>
                  <p>EIN: ****1300</p>
                </div>
                <div>
                  <h3 className="font-bold mt-4">UPS Inc (Ultra Pure Solutions)</h3>
                  <p>Email: ccossey@ultrapuresolutions.com</p>
                  <p>EIN: ****7896</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold">API Credentials (Encrypted)</h3>
                  <p>Bonfire / IonWave Logins saved securely</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accounts">
          <Card className="mt-4">
            <CardContent>
              <h2 className="text-xl font-semibold">User Account Management</h2>
              <Label>Email</Label>
              <Input className="mt-1 mb-2" placeholder="user@example.com" />
              <Label>Password</Label>
              <Input className="mt-1 mb-2" type="password" placeholder="••••••••" />
              <Button className="mt-2">Add New User</Button>
              <p className="text-xs text-gray-500 mt-2">All users will have access to view and submit bids based on permission level.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
