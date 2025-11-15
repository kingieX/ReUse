import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Users,
  Recycle,
  Gift,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

interface PendingDropoff {
  id: string;
  userId: string;
  userName: string;
  location: string;
  weight: string;
  tokens: number;
  date: string;
  photo?: boolean;
}

export function AdminDashboard() {
  const [pendingDropoffs, setPendingDropoffs] = useState<PendingDropoff[]>([
    {
      id: "DROP001",
      userId: "USER123",
      userName: "John Doe",
      location: "Ughelli Recycling Center",
      weight: "2.5kg",
      tokens: 50,
      date: "Nov 12, 2025 - 10:30 AM",
      photo: true,
    },
    {
      id: "DROP002",
      userId: "USER456",
      userName: "Jane Smith",
      location: "Effurum Collection Point",
      weight: "1.8kg",
      tokens: 35,
      date: "Nov 12, 2025 - 11:15 AM",
      photo: false,
    },
    {
      id: "DROP003",
      userId: "USER789",
      userName: "Michael Johnson",
      location: "Warri Green Hub",
      weight: "3.2kg",
      tokens: 65,
      date: "Nov 12, 2025 - 2:45 PM",
      photo: true,
    },
  ]);

  const stats = [
    {
      title: "Total Users",
      value: "2,547",
      change: "+12%",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#3B82F6] to-[#2563EB]",
    },
    {
      title: "Total Drop-offs",
      value: "1,234",
      change: "+8%",
      icon: <Recycle className="w-6 h-6" />,
      color: "from-[#22C55E] to-[#16A34A]",
    },
    {
      title: "Tokens Issued",
      value: "50,234",
      change: "+15%",
      icon: <Gift className="w-6 h-6" />,
      color: "from-[#FACC15] to-[#EAB308]",
    },
    {
      title: "Total Weight",
      value: "500kg",
      change: "+10%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-[#8B5CF6] to-[#7C3AED]",
    },
  ];

  const recentUsers = [
    {
      id: "1",
      name: "John Doe",
      phone: "+234 801 234 5678",
      joinDate: "Nov 12, 2025",
      tokens: 120,
    },
    {
      id: "2",
      name: "Jane Smith",
      phone: "+234 802 345 6789",
      joinDate: "Nov 11, 2025",
      tokens: 85,
    },
    {
      id: "3",
      name: "Michael Johnson",
      phone: "+234 803 456 7890",
      joinDate: "Nov 10, 2025",
      tokens: 150,
    },
    {
      id: "4",
      name: "Sarah Williams",
      phone: "+234 804 567 8901",
      joinDate: "Nov 9, 2025",
      tokens: 95,
    },
    {
      id: "5",
      name: "David Brown",
      phone: "+234 805 678 9012",
      joinDate: "Nov 8, 2025",
      tokens: 110,
    },
  ];

  const recentRedemptions = [
    {
      id: "1",
      user: "John Doe",
      reward: "₦200 Airtime",
      tokens: 75,
      date: "Nov 12, 2025",
      status: "completed",
    },
    {
      id: "2",
      user: "Jane Smith",
      reward: "1GB Data",
      tokens: 90,
      date: "Nov 11, 2025",
      status: "completed",
    },
    {
      id: "3",
      user: "Michael Johnson",
      reward: "₦500 Cash",
      tokens: 200,
      date: "Nov 10, 2025",
      status: "pending",
    },
    {
      id: "4",
      user: "Sarah Williams",
      reward: "₦100 Airtime",
      tokens: 40,
      date: "Nov 9, 2025",
      status: "completed",
    },
  ];

  const handleConfirmDropoff = (dropoffId: string) => {
    setPendingDropoffs((prev) => prev.filter((d) => d.id !== dropoffId));
    toast.success("Drop-off confirmed and tokens credited!");
  };

  const handleRejectDropoff = (dropoffId: string) => {
    setPendingDropoffs((prev) => prev.filter((d) => d.id !== dropoffId));
    toast.error("Drop-off rejected");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2">Admin Dashboard</h1>
          <p className="text-[#64748B]">Manage the ReUse platform</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}
                  >
                    {stat.icon}
                  </div>
                  <Badge className="bg-[#22C55E]/10 text-[#22C55E] border-0">
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="mb-1">{stat.value}</h3>
                <p className="text-[#64748B]">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pending Drop-offs */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Pending Drop-offs</CardTitle>
                <CardDescription>
                  Review and confirm user drop-offs
                </CardDescription>
              </div>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {pendingDropoffs.length} Pending
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Drop-off ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Tokens</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Photo</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingDropoffs.map((dropoff) => (
                    <TableRow key={dropoff.id}>
                      <TableCell>{dropoff.id}</TableCell>
                      <TableCell>
                        <div>
                          <p>{dropoff.userName}</p>
                          <p className="text-[#64748B]">{dropoff.userId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{dropoff.location}</TableCell>
                      <TableCell>{dropoff.weight}</TableCell>
                      <TableCell className="text-[#FACC15]">
                        {dropoff.tokens} tokens
                      </TableCell>
                      <TableCell className="text-[#64748B]">
                        {dropoff.date}
                      </TableCell>
                      <TableCell>
                        {dropoff.photo ? (
                          <Badge>Available</Badge>
                        ) : (
                          <Badge variant="secondary">No Photo</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleConfirmDropoff(dropoff.id)}
                            className="bg-[#22C55E] hover:bg-[#16A34A]"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Confirm
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRejectDropoff(dropoff.id)}
                          >
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {pendingDropoffs.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
                <p className="text-[#64748B]">
                  All drop-offs have been processed!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tabs for Users and Redemptions */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Recent Users</TabsTrigger>
            <TabsTrigger value="redemptions">Recent Redemptions</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Latest user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone Number</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Token Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell className="text-[#64748B]">
                            {user.joinDate}
                          </TableCell>
                          <TableCell className="text-[#FACC15]">
                            {user.tokens} tokens
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="redemptions">
            <Card>
              <CardHeader>
                <CardTitle>Recent Redemptions</CardTitle>
                <CardDescription>Latest reward redemptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Reward</TableHead>
                        <TableHead>Tokens Used</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentRedemptions.map((redemption) => (
                        <TableRow key={redemption.id}>
                          <TableCell>{redemption.user}</TableCell>
                          <TableCell>{redemption.reward}</TableCell>
                          <TableCell className="text-[#FACC15]">
                            {redemption.tokens} tokens
                          </TableCell>
                          <TableCell className="text-[#64748B]">
                            {redemption.date}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                redemption.status === "completed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {redemption.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
