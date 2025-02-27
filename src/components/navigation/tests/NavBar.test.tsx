import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import MenuIcon from "@/components/icons/MenuIcon";

describe("NavBar Component", () => {
  test("renders NavBar with menu icon and logo", () => {
    render(<NavBar />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  test("renders and clicks on the menu icon", () => {
    const handleMenuOpen = jest.fn();

    render(<MenuIcon onClick={handleMenuOpen} data-testid="menu-icon" />);

    // Find the element
    const menuIcon = screen.getByTestId("menu-icon");

    // Assert that the icon is in the document
    expect(menuIcon).toBeInTheDocument();

    // Simulate a click
    fireEvent.click(menuIcon);

    // Assert that the function was called
    expect(handleMenuOpen).toHaveBeenCalledTimes(1);
  });

  test("opens sidebar when clicking on the menu icon", () => {
    render(<NavBar />);
  
    // Find the Menu Icon
    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
  
    // Verify sidebar starts as invisible
    const overlay = screen.getByTestId("overlay");
    expect(overlay).toHaveClass("opacity-0", "invisible");
  
    // Click the menu icon to open the sidebar
    fireEvent.click(menuIcon);
  
    // Sidebar should now be visible
    expect(overlay).not.toHaveClass("opacity-0", "invisible");
    expect(screen.getByText(/get started/i)).toBeInTheDocument();
  });
});

