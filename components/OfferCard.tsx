
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, DollarSign, Send, Eye, FileText, Clock } from "lucide-react";

interface Offer {
  id: string;
  candidateName: string;
  jobTitle: string;
  department: string;
  status: "draft" | "sent" | "viewed" | "signed" | "declined";
  dateSent?: string;
  expiryDate: string;
  salary: number;
  currency: string;
  country: string;
}

interface OfferCardProps {
  offer: Offer;
}

export const OfferCard = ({ offer }: OfferCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft": return "bg-gray-100 text-gray-800 border-gray-200";
      case "sent": return "bg-blue-100 text-blue-800 border-blue-200";
      case "viewed": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "signed": return "bg-green-100 text-green-800 border-green-200";
      case "declined": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "draft": return <FileText className="h-3 w-3" />;
      case "sent": return <Send className="h-3 w-3" />;
      case "viewed": return <Eye className="h-3 w-3" />;
      case "signed": return <FileText className="h-3 w-3" />;
      case "declined": return <FileText className="h-3 w-3" />;
      default: return <FileText className="h-3 w-3" />;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    const currencySymbols: { [key: string]: string } = {
      'ZAR': 'R',
      'USD': '$',
      'BWP': 'P',
      'ZWL': 'Z$'
    };
    
    return `${currencySymbols[currency] || currency} ${amount.toLocaleString()}`;
  };

  const getDaysUntilExpiry = () => {
    const expiry = new Date(offer.expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilExpiry = getDaysUntilExpiry();
  const isExpiringSoon = daysUntilExpiry <= 3 && daysUntilExpiry > 0;
  const isExpired = daysUntilExpiry < 0;

  return (
    <Card className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{offer.candidateName}</h3>
                <p className="text-sm text-gray-600">{offer.jobTitle} • {offer.department}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={`${getStatusColor(offer.status)} border text-xs font-medium`}>
                  {getStatusIcon(offer.status)}
                  <span className="ml-1 capitalize">{offer.status}</span>
                </Badge>
                {isExpiringSoon && (
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Expires in {daysUntilExpiry} days
                  </Badge>
                )}
                {isExpired && (
                  <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Expired
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>{formatCurrency(offer.salary, offer.currency)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{offer.country}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Expires: {new Date(offer.expiryDate).toLocaleDateString()}</span>
              </div>
              {offer.dateSent && (
                <div className="flex items-center gap-1">
                  <Send className="h-4 w-4" />
                  <span>Sent: {new Date(offer.dateSent).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View
            </Button>
            {offer.status === "draft" && (
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Send Offer
              </Button>
            )}
            {["sent", "viewed"].includes(offer.status) && (
              <Button size="sm" variant="outline">
                Remind
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
