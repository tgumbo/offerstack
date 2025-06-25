'use client';

import { useState } from 'react';
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, TrendingUp, Users, Clock, Eye, Send, Download } from 'lucide-react';
import { Container } from '@/components/common/container';


// Mock data - replace with actual data fetching
const mockOffers = [
    {
        id: '1',
        candidateName: 'Sarah Mthembu',
        jobTitle: 'Senior Developer',
        status: 'sent' as const,
        dateSent: '2024-06-20',
    },
    {
        id: '2',
        candidateName: 'Michael Chikwanha',
        jobTitle: 'Marketing Manager',
        status: 'signed' as const,
        dateSent: '2024-06-18',
    },
    {
        id: '3',
        candidateName: 'Amara Ndumiso',
        jobTitle: 'UX Designer',
        status: 'expired' as const,
        dateSent: '2024-06-15',
    },
];

const Dashboard = () => {

    const [offers] = useState(mockOffers);

    const stats = {
        totalOffers: offers.length,
        signed: offers.filter(o => o.status === 'signed').length,
        pending: offers.filter(o => ['sent', 'viewed'].includes(o.status)).length,
        expired: offers.filter(o => o.status === 'expired').length,
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'draft': return 'bg-gray-100 text-gray-800';
            case 'sent': return 'bg-blue-100 text-blue-800';
            case 'viewed': return 'bg-yellow-100 text-yellow-800';
            case 'signed': return 'bg-green-100 text-green-800';
            case 'expired': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Container>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600 mt-1">Welcome back, first last!</p>
                    </div>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                        <Link href="/offers/new">
                            <Plus className="h-4 w-4 mr-2" />
                            New Offer
                        </Link>
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium opacity-90">Total Offers</CardTitle>
                            <FileText className="h-4 w-4 opacity-90" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalOffers}</div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium opacity-90">Signed</CardTitle>
                            <TrendingUp className="h-4 w-4 opacity-90" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.signed}</div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium opacity-90">Pending</CardTitle>
                            <Users className="h-4 w-4 opacity-90" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.pending}</div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-pink-500 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium opacity-90">Expired</CardTitle>
                            <Clock className="h-4 w-4 opacity-90" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.expired}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Offers Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Offers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Candidate Name</TableHead>
                                    <TableHead>Job Title</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date Sent</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {offers.map((offer) => (
                                    <TableRow key={offer.id}>
                                        <TableCell className="font-medium">{offer.candidateName}</TableCell>
                                        <TableCell>{offer.jobTitle}</TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(offer.status)}>
                                                {offer.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{new Date(offer.dateSent).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={`/offers/preview/${offer.id}`}>
                                                        <Eye className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <Send className="h-4 w-4" />
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
};

export default Dashboard;
