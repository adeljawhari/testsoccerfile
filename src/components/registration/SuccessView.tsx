import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessView = () => {
  return (
    <Card className="w-full max-w-md mx-auto p-6 text-center bg-white">
      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
      <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for registering! We've received your information and will be
        in touch soon with next steps.
      </p>
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          Please check your email for confirmation and additional details.
        </p>
        <Link to="/">
          <Button className="w-full">Return to Home</Button>
        </Link>
      </div>
    </Card>
  );
};

export default SuccessView;
