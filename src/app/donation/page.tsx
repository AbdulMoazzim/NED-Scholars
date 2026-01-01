"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  CreditCard,
  DollarSign,
  Building2,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  GraduationCap,
  Loader2,
  Info,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { CreateDonation } from "@/app/actions/donations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function DonatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");
  const [donationType, setDonationType] = useState("general");
  const [frequency, setFrequency] = useState("one_time");
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    donorAddress: "",
    donorCity: "",
    donorCountry: "Pakistan",
    message: "",
    isAnonymous: false,
  });

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"];

  const donationCategories = [
    {
      id: "general",
      name: "General Fund",
      description: "Support where it's needed most",
      icon: <Heart className="w-6 h-6" />,
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      id: "scholarship",
      name: "Scholarships",
      description: "Help students achieve their dreams",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      id: "education",
      name: "Educational Programs",
      description: "Fund training and workshops",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      description: "Build better facilities",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const paymentMethods = {
    pakistan: [
      {
        id: "citizen",
        name: "Citizen Foundation Account",
        description: "Bank transfer in Pakistan",
        details: {
          bankName: "Allied Bank Limited",
          accountTitle: "The Citizen Foundation",
          accountNumber: "0010032567890123",
          iban: "PK12ABCD0010032567890123",
        },
      },
      {
        id: "bank_transfer",
        name: "Direct Bank Transfer",
        description: "Transfer to our local account",
        details: {
          bankName: "Meezan Bank",
          accountTitle: "NED Scholars Foundation",
          accountNumber: "01234567890",
          iban: "PK12MEZN0001234567890",
        },
      },
    ],
    international: [
      {
        id: "paypal",
        name: "PayPal",
        description: "Credit/Debit card via PayPal",
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        id: "zelle",
        name: "Zelle",
        description: "US bank transfer",
        details: {
          email: "donations@nedscholars.org",
          phone: "+1-555-123-4567",
        },
      },
      {
        id: "zeffy",
        name: "Zeffy",
        description: "Zero-fee donation platform",
        link: "https://www.zeffy.com/donate/nedscholars",
      },
      {
        id: "mail",
        name: "Mail Check",
        description: "Send a check by mail",
        details: {
          address: "NED Scholars Foundation",
          street: "123 University Avenue",
          city: "Karachi",
          postal: "75270",
          country: "Pakistan",
        },
      },
    ],
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getSelectedAmount = () => {
    return amount === "custom" ? parseFloat(customAmount) : parseFloat(amount);
  };

  const validateForm = () => {
    if (!formData.donorName || !formData.donorEmail) {
      toast.error("Please fill in required fields");
      return false;
    }

    const donationAmount = getSelectedAmount();
    if (!donationAmount || donationAmount <= 0) {
      toast.error("Please enter a valid donation amount");
      return false;
    }

    return true;
  };

//   const createDonationRecord = async (transactionId?: string, subscriptionId?: string) => {
//     try {
//       const result = await CreateDonation({
//         ...formData,
//         amount: getSelectedAmount(),
//         currency: "USD",
//         donationType,
//         frequency,
//         paymentMethod,
//         transactionId,
//         subscriptionId,
//       });

//       if (result.success) {
//         return result.data;
//       } else {
//         throw new Error(result.error);
//       }
//     } catch (error) {
//       console.error("Error creating donation record:", error);
//       throw error;
//     }
//   };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="w-16 h-16 text-[#1164A3]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps us empower the next generation of engineers
            and innovators through education, mentorship, and opportunity.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-[#82B4CC]/30">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-[#1164A3] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Secure Donations</h3>
              <p className="text-sm text-gray-600">
                Your payment information is encrypted and secure
              </p>
            </CardContent>
          </Card>
          <Card className="border-[#82B4CC]/30">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-[#68B9C4] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Tax Deductible</h3>
              <p className="text-sm text-gray-600">
                Receive tax receipts for all donations
              </p>
            </CardContent>
          </Card>
          <Card className="border-[#82B4CC]/30">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-[#82B4CC] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Direct Impact</h3>
              <p className="text-sm text-gray-600">
                100% of donations go directly to our programs
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Donation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Donation Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Donation Category */}
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#1164A3]" />
                  Choose Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {donationCategories.map((category) => (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all ${
                        donationType === category.id
                          ? "border-[#1164A3] border-2 bg-[#1164A3]/5"
                          : "border-[#82B4CC]/30 hover:border-[#68B9C4]"
                      }`}
                      onClick={() => setDonationType(category.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}
                          >
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">
                              {category.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Donation Frequency */}
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <CardTitle>Donation Frequency</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={frequency} onValueChange={setFrequency}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg border-2 cursor-pointer ${
                        frequency === "one_time"
                          ? "border-[#1164A3] bg-[#1164A3]/5"
                          : "border-[#82B4CC]/30"
                      }`}
                      onClick={() => setFrequency("one_time")}
                    >
                      <RadioGroupItem value="one_time" id="one_time" />
                      <Label htmlFor="one_time" className="cursor-pointer font-semibold">
                        One-Time
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg border-2 cursor-pointer ${
                        frequency === "monthly"
                          ? "border-[#1164A3] bg-[#1164A3]/5"
                          : "border-[#82B4CC]/30"
                      }`}
                      onClick={() => setFrequency("monthly")}
                    >
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly" className="cursor-pointer font-semibold">
                        Monthly
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg border-2 cursor-pointer ${
                        frequency === "yearly"
                          ? "border-[#1164A3] bg-[#1164A3]/5"
                          : "border-[#82B4CC]/30"
                      }`}
                      onClick={() => setFrequency("yearly")}
                    >
                      <RadioGroupItem value="yearly" id="yearly" />
                      <Label htmlFor="yearly" className="cursor-pointer font-semibold">
                        Yearly
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
                {frequency !== "one_time" && (
                  <div className="mt-4 p-3 bg-[#68B9C4]/10 rounded-lg border border-[#68B9C4]/30">
                    <p className="text-sm text-gray-700 flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#1164A3] mt-0.5 flex-shrink-0" />
                      Recurring donations provide stable support and help us plan
                      long-term programs. You can cancel anytime.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Donation Amount */}
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <CardTitle>Donation Amount (USD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amt) => (
                    <Button
                      key={amt}
                      variant={amount === amt ? "default" : "outline"}
                      className={
                        amount === amt
                          ? "bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                          : "border-[#82B4CC]/50 hover:border-[#1164A3]"
                      }
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount("");
                      }}
                    >
                      ${amt}
                    </Button>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label>Custom Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount("custom");
                      }}
                      className="pl-10 border-[#82B4CC]/50 focus:ring-[#1164A3]"
                      min="1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donor Information */}
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name *</Label>
                    <Input
                      value={formData.donorName}
                      onChange={(e) => handleInputChange("donorName", e.target.value)}
                      placeholder="John Doe"
                      className="border-[#82B4CC]/50 focus:ring-[#1164A3]"
                      required
                    />
                  </div>
                  <div>
                    <Label>Email Address *</Label>
                    <Input
                      type="email"
                      value={formData.donorEmail}
                      onChange={(e) => handleInputChange("donorEmail", e.target.value)}
                      placeholder="john@example.com"
                      className="border-[#82B4CC]/50 focus:ring-[#1164A3]"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Phone (Optional)</Label>
                    <Input
                      type="tel"
                      value={formData.donorPhone}
                      onChange={(e) => handleInputChange("donorPhone", e.target.value)}
                      placeholder="+92 300 1234567"
                      className="border-[#82B4CC]/50 focus:ring-[#1164A3]"
                    />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Select
                      value={formData.donorCountry}
                      onValueChange={(value) => handleInputChange("donorCountry", value)}
                    >
                      <SelectTrigger className="border-[#82B4CC]/50 focus:ring-[#1164A3]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                        <SelectItem value="USA">United States</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="UAE">UAE</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Message (Optional)</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Leave a message of support..."
                    rows={3}
                    className="border-[#82B4CC]/50 focus:ring-[#1164A3]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Checkbox
                    id="anonymous"
                    checked={formData.isAnonymous}
                    onCheckedChange={(checked) =>
                      handleInputChange("isAnonymous", checked)
                    }
                  /> */}
                  <Label htmlFor="anonymous" className="cursor-pointer">
                    Make this donation anonymous
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="international" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="international">International</TabsTrigger>
                    <TabsTrigger value="pakistan">Pakistan</TabsTrigger>
                  </TabsList>

                  {/* International Payment Methods */}
                  <TabsContent value="international" className="space-y-4">
                    {paymentMethods.international.map((method) => (
                      <Card
                        key={method.id}
                        className={`cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? "border-[#1164A3] border-2 bg-[#1164A3]/5"
                            : "border-[#82B4CC]/30 hover:border-[#68B9C4]"
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {method.icon}
                              <div>
                                <h4 className="font-semibold text-gray-800">
                                  {method.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {method.description}
                                </p>
                              </div>
                            </div>
                            {/* <RadioGroupItem
                              value={method.id}
                              checked={paymentMethod === method.id}
                            /> */}
                          </div>
                          {paymentMethod === method.id && method.details && (
                            <div className="mt-4 p-3 bg-[#82B4CC]/10 rounded-lg">
                              {"email" in method.details && (
                                <div className="space-y-2 text-sm">
                                  <p>
                                    <span className="font-medium">Email:</span>{" "}
                                    {method.details.email}
                                  </p>
                                  <p>
                                    <span className="font-medium">Phone:</span>{" "}
                                    {method.details.phone}
                                  </p>
                                </div>
                              )}
                              {"address" in method.details && (
                                <div className="space-y-1 text-sm">
                                  <p className="font-medium">{method.details.address}</p>
                                  <p>{method.details.street}</p>
                                  <p>
                                    {method.details.city}, {method.details.postal}
                                  </p>
                                  <p>{method.details.country}</p>
                                </div>
                              )}
                            </div>
                          )}
                          {paymentMethod === method.id && method.link && (
                            <div className="mt-4">
                              <Button
                                className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                                onClick={() => window.open(method.link, "_blank")}
                              >
                                Donate via {method.name}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}

                    {/* PayPal Integration */}
                    {paymentMethod === "paypal" && validateForm() && (
                      <Card className="border-[#1164A3] bg-[#1164A3]/5">
                        <CardContent className="p-6">
                          <PayPalScriptProvider
                            options={{
                              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
                              currency: "USD",
                              intent: frequency === "one_time" ? "capture" : "subscription",
                            }}
                          >
                            {/* <PayPalButtons
                              style={{ layout: "vertical", color: "blue" }}
                              createOrder={async (data, actions) => {
                                return 
                                // actions.order.create({
                                //   purchase_units: [
                                //     // {
                                //     //   amount: {
                                //     //     value: getSelectedAmount().toFixed(2),
                                //     //   },
                                //     //   description: `Donation to NED Scholars - ${donationType}`,
                                //     // },
                                //   ],
                                });
                              }}
                              onApprove={async (data, actions) => {
                                if (actions.order) {
                                  const details = await actions.order.capture();
                                //   await createDonationRecord(details.id);
                                  toast.success("Thank you for your donation!");
                                  router.push(`/donate/success?orderId=${details.id}`);
                                }
                              }}
                              onError={(err) => {
                                console.error("PayPal error:", err);
                                toast.error("Payment failed. Please try again.");
                              }}
                            /> */}
                          </PayPalScriptProvider>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>

                  {/* Pakistan Payment Methods */}
                  <TabsContent value="pakistan" className="space-y-4">
                    {paymentMethods.pakistan.map((method) => (
                      <Card
                        key={method.id}
                        className={`cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? "border-[#1164A3] border-2 bg-[#1164A3]/5"
                            : "border-[#82B4CC]/30 hover:border-[#68B9C4]"
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {method.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {method.description}
                              </p>
                            </div>
                        
                            {/* <RadioGroupItem
                              value={method.id}
                              checked={paymentMethod === method.id}
                            /> */}
                          </div>
                          {paymentMethod === method.id && method.details && (
                            <div className="p-4 bg-[#82B4CC]/10 rounded-lg space-y-2 text-sm">
                              <p>
                                <span className="font-medium">Bank:</span>{" "}
                                {method.details.bankName}
                              </p>
                              <p>
                                <span className="font-medium">Account Title:</span>{" "}
                                {method.details.accountTitle}
                              </p>
                              <p>
                                <span className="font-medium">Account Number:</span>{" "}
                                {method.details.accountNumber}
                              </p>
                              <p>
                                <span className="font-medium">IBAN:</span>{" "}
                                {method.details.iban}
                              </p>
                              <div className="pt-2 border-t border-[#82B4CC]/30 mt-3">
                                <p className="text-xs text-gray-600">
                                  Please email proof of transfer to{" "}
                                  <a
                                    href="mailto:donations@nedscholars.org"
                                    className="text-[#1164A3] hover:underline"
                                  >
                                    donations@nedscholars.org
                                  </a>
                                </p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Donation Summary */}
              <Card className="border-[#1164A3] border-2 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#1164A3]/10 to-[#68B9C4]/10">
                  <CardTitle>Donation Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-[#82B4CC]/30">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-gray-800">
                      {donationCategories.find((c) => c.id === donationType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#82B4CC]/30">
                    <span className="text-gray-600">Frequency:</span>
                    <Badge className="bg-[#68B9C4] text-white">
                      {frequency === "one_time"
                        ? "One-Time"
                        : frequency === "monthly"
                        ? "Monthly"
                        : "Yearly"}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#82B4CC]/30">
                    <span className="text-gray-600">Amount:</span>
                    <span className="text-2xl font-bold text-[#1164A3]">
                      ${getSelectedAmount().toFixed(2)}
                    </span>
                  </div>
                  {frequency !== "one_time" && (
                    <div className="p-3 bg-[#68B9C4]/10 rounded-lg">
                      <p className="text-sm text-gray-700">
                        You&apos;ll be charged ${getSelectedAmount().toFixed(2)} {frequency}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Impact Message */}
              <Card className="border-[#82B4CC]/30 bg-gradient-to-br from-[#82B4CC]/10 to-[#B0A3B3]/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#1164A3]" />
                    Your Impact
                  </h4>
                  <p className="text-sm text-gray-700">
                    Your ${getSelectedAmount()} donation can provide:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {getSelectedAmount() >= 1000 && (
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                        Full scholarship for one student
                      </li>
                    )}
                    {getSelectedAmount() >= 500 && (
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                        Training workshop for 20 students
                      </li>
                    )}
                    {getSelectedAmount() >= 100 && (
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                        Educational materials for 10 scholars
                      </li>
                    )}
                    {getSelectedAmount() >= 50 && (
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                        Mentorship session for 5 students
                      </li>
                    )}
                    {getSelectedAmount() >= 25 && (
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                        Study materials for 2 students
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Need Help?</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#1164A3]" />
                    <a
                      href="mailto:donations@nedscholars.org"
                      className="hover:text-[#1164A3]"
                    >
                      donations@nedscholars.org
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#1164A3]" />
                    <span>+92 21 9926 1261-8</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}