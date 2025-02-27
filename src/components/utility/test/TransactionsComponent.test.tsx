import React from "react";
import { render, screen } from "@testing-library/react";
import { useGetTransactionsQuery } from "@/lib/api";

import "@testing-library/jest-dom";
import TransactionsComponent from "@/components/TransactionsComponent";

// Mock API hook
jest.mock("@/lib/api", () => ({
  useGetTransactionsQuery: jest.fn(),
}));

// Mock TransactionCard component
jest.mock("../TransactionCard", () => {
  const MockTransactionCard = () => <div data-testid="transaction-card" />;
  MockTransactionCard.displayName = "MockTransactionCard";
  return MockTransactionCard;
});

// Mock Loader component
jest.mock("../../utility/Loader", () => {
  const MockLoader = () => <div data-testid="loader" />;
  MockLoader.displayName = "MockLoader";
  return MockLoader;
});

describe("TransactionsComponent", () => {
  it("renders loader while loading", () => {
    (useGetTransactionsQuery as jest.Mock).mockReturnValue({ isLoading: true });

    render(<TransactionsComponent />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders error message on API failure", () => {
    (useGetTransactionsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: { status: 500 },
    });

    render(<TransactionsComponent />);

    expect(screen.getByText("Error: 500")).toBeInTheDocument();
  });

  it("renders transactions when data is available", () => {
    const mockData = [
      { id: 1, amount: "1000", description: "Payment 1" },
      { id: 2, amount: "2500", description: "Payment 2" },
    ];
    (useGetTransactionsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockData,
    });

    render(<TransactionsComponent />);

    // Expecting correct number of transactions
    const transactions = screen.getAllByTestId("transaction-card");
    expect(transactions.length).toBe(mockData.length);
  });
});
