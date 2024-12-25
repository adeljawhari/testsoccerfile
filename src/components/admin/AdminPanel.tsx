import React, { useState, useEffect } from "react";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin/login");
      return;
    }

    // Load registrations from localStorage
    const storedRegistrations = JSON.parse(
      localStorage.getItem("registrations") || "[]",
    );
    setRegistrations(storedRegistrations);
  }, [navigate]);

  return (
    <div className="container mx-auto py-10">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Player Registrations</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Experience</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.map((registration: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{registration.name}</TableCell>
                <TableCell>{registration.email}</TableCell>
                <TableCell>{registration.phone}</TableCell>
                <TableCell>{registration.age}</TableCell>
                <TableCell>{registration.position}</TableCell>
                <TableCell>{registration.experience}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminPanel;
