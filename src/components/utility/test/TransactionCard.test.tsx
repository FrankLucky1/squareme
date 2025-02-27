import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionCard from "../TransactionCard";
import "@testing-library/jest-dom";

jest.mock("../../DataTable", () => ({
  formatDate: jest.fn((date) => date), 
}));

describe("TransactionCard Component", () => {
  const mockTransaction = {
    amount: 5000,
    transaction_type: "Credit",
    date: "2025-02-26",
    time: "14:30",
    status: "processed",
  };

  test("renders transaction details correctly", () => {
    render(<TransactionCard details={mockTransaction} />);

    // Check if the amount is displayed correctly
    expect(screen.getByText("₦ 5000")).toBeInTheDocument();
    
    // Check if the transaction type is displayed
    expect(screen.getByText("Credit")).toBeInTheDocument();
    
    // Check if date is formatted correctly
    expect(screen.getByText("2025-02-26 14:30")).toBeInTheDocument();
    
    // Check if status is displayed
    expect(screen.getByText("processed")).toBeInTheDocument();
  });

  test("renders correct status styling for 'processed'", () => {
    render(<TransactionCard details={mockTransaction} />);
    
    const statusElement = screen.getByText("processed");
    
    // Check if it has the correct class for 'processed'
    expect(statusElement).toHaveClass("border-[#5DC090] bg-[#EFFDED] text-[#144909]");
  });

  test("renders correct status styling for 'failed'", () => {
    const failedTransaction = { ...mockTransaction, status: "failed" };

    render(<TransactionCard details={failedTransaction} />);
    
    const statusElement = screen.getByText("failed");
    
    // Check if it has the correct class for 'failed'
    expect(statusElement).toHaveClass("border-[#F14156] bg-[#FEECEE] text-[#F14156]");
  });

  test("renders empty string when date is missing", () => {
    const transactionWithoutDate = { ...mockTransaction, date: "" };

    render(<TransactionCard details={transactionWithoutDate} />);

    expect(screen.getByText(/14:30/i)).toBeInTheDocument();
  });
});
