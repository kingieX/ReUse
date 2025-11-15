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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Recycle, Gift, Calendar, Filter } from "lucide-react";
import { Button } from "../ui/button";

interface Transaction {
  id: string;
  type: "dropoff" | "redemption";
  description: string;
  tokens: number;
  date: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  location?: string;
}

export function TransactionHistory() {
  const [filter, setFilter] = useState<"all" | "dropoff" | "redemption">("all");

  const transactions: Transaction[] = [
    {
      id: "TXN001",
      type: "dropoff",
      description: "Plastic bottles recycling",
      location: "Ikeja Recycling Center",
      tokens: 50,
      date: "Nov 12, 2025 - 10:30 AM",
      status: "confirmed",
    },
    {
      id: "TXN002",
      type: "redemption",
      description: "₦200 Airtime - MTN",
      tokens: -75,
      date: "Nov 11, 2025 - 3:45 PM",
      status: "completed",
    },
    {
      id: "TXN003",
      type: "dropoff",
      description: "Glass containers recycling",
      location: "Victoria Island Collection Point",
      tokens: 30,
      date: "Nov 10, 2025 - 2:15 PM",
      status: "confirmed",
    },
    {
      id: "TXN004",
      type: "dropoff",
      description: "Metal cans recycling",
      location: "Lekki Green Hub",
      tokens: 25,
      date: "Nov 9, 2025 - 11:00 AM",
      status: "pending",
    },
    {
      id: "TXN005",
      type: "redemption",
      description: "1GB Data - Airtel",
      tokens: -90,
      date: "Nov 8, 2025 - 4:20 PM",
      status: "completed",
    },
    {
      id: "TXN006",
      type: "dropoff",
      description: "Mixed recyclables",
      location: "Surulere Eco Center",
      tokens: 40,
      date: "Nov 7, 2025 - 9:30 AM",
      status: "confirmed",
    },
    {
      id: "TXN007",
      type: "redemption",
      description: "₦100 Airtime - Glo",
      tokens: -40,
      date: "Nov 5, 2025 - 1:15 PM",
      status: "completed",
    },
    {
      id: "TXN008",
      type: "dropoff",
      description: "Plastic containers recycling",
      location: "Ikeja Recycling Center",
      tokens: 35,
      date: "Nov 4, 2025 - 3:00 PM",
      status: "confirmed",
    },
  ];

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  const totalEarned = transactions
    .filter((t) => t.type === "dropoff" && t.tokens > 0)
    .reduce((sum, t) => sum + t.tokens, 0);

  const totalRedeemed = Math.abs(
    transactions
      .filter((t) => t.type === "redemption" && t.tokens < 0)
      .reduce((sum, t) => sum + t.tokens, 0)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2">Transaction History</h1>
          <p className="text-[#64748B]">
            View all your recycling activities and redemptions
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#64748B] mb-1">Total Earned</p>
                  <h3 className="text-[#22C55E]">+{totalEarned} Tokens</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-[#22C55E]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#64748B] mb-1">Total Redeemed</p>
                  <h3 className="text-[#FACC15]">{totalRedeemed} Tokens</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#FACC15]/10 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-[#FACC15]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#64748B] mb-1">Total Transactions</p>
                  <h3>{transactions.length}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#3B82F6]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>All Transactions</CardTitle>
                <CardDescription>
                  Complete history of your activities
                </CardDescription>
              </div>
              <Tabs
                value={filter}
                onValueChange={(v: any) => setFilter(v as any)}
                className="w-full sm:w-auto"
              >
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="dropoff">Drop-offs</TabsTrigger>
                  <TabsTrigger value="redemption">Redemptions</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Tokens</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {transaction.type === "dropoff" ? (
                            <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
                              <Recycle className="w-4 h-4 text-[#22C55E]" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-[#FACC15]/10 flex items-center justify-center">
                              <Gift className="w-4 h-4 text-[#FACC15]" />
                            </div>
                          )}
                          <span className="capitalize">{transaction.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p>{transaction.description}</p>
                          {transaction.location && (
                            <p className="text-[#64748B]">
                              {transaction.location}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={
                            transaction.tokens > 0
                              ? "text-[#22C55E]"
                              : "text-[#64748B]"
                          }
                        >
                          {transaction.tokens > 0 ? "+" : ""}
                          {transaction.tokens}
                        </span>
                      </TableCell>
                      <TableCell className="text-[#64748B]">
                        {transaction.date}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <Filter className="w-12 h-12 text-[#64748B] mx-auto mb-4" />
                <p className="text-[#64748B]">
                  No transactions found for this filter
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
