import { render, screen } from "@testing-library/react";
import SideBar from "../SideBar";
import { usePathname } from "next/navigation";
import "@testing-library/jest-dom"

// Mock usePathname from Next.js
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("SideBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the sidebar with all menu items", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    render(<SideBar />);

    const menuItems = [
      "get started",
      "dashboard",
      "accounts",
      "transfers",
      "transactions",
      "settings",
    ];


    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("applies active styling to the correct menu item", () => {
    (usePathname as jest.Mock).mockReturnValue("/transactions");
  
    render(<SideBar />);
  
    const activeLink = screen.getByText("transactions").closest("a");
    
    expect(activeLink).toHaveClass("bg-[#3976E8]");
    expect(activeLink).toHaveClass("text-white"); // Ensures text-white is on the <a>
  });
});
