import "@testing-library/jest-dom";
import { getAllByRole, render, screen, waitFor } from "@testing-library/react";
import { MainNav } from "../src/components/main-nav";
import { getAllCountries } from "@/lib/data-extraction";
import Home from "../src/app/page";

// Mock all modules from this path
jest.mock("@/lib/data-extraction");

// Basic test to check component renders
describe("MainNav", () => {
  it("renders without crashing", () => {
    const { container } = render(<MainNav />);
    // Assert that something was rendered
    expect(container.firstChild).toBeInTheDocument();
  });
});

describe("Home", () => {
  it("renders loading Skeleton initially", async () => {
    // Mock the getAllCountries function to return a promise that resolves to an empty array
    getAllCountries.mockResolvedValue([]);

    render(<Home />);

    // Use waitFor to handle any asynchorounous state updates in the component
    await waitFor(() => {
      const animatedElements = screen.queryAllByText((content, element) =>
        element.classList.contains("animate-pulse")
      );
      // Check that at least one element from the Skeleton has been rendered
      expect(animatedElements.length).toBeGreaterThan(0);
    });
  });
});
