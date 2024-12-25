import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const Results = () => {
  const navigate = useNavigate();
  const registrations = JSON.parse(
    localStorage.getItem("registrations") || "[]",
  );

  useEffect(() => {
    const isAuthenticated =
      sessionStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="container mx-auto py-10">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Registration Results</h2>
        {registrations.length === 0 ? (
          <p className="text-center text-gray-500">No registrations found</p>
        ) : (
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
        )}
      </Card>
    </div>
  );
};

export default Results;
