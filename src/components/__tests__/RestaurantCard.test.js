import { render, screen } from "@testing-library/react";
import Card from "../RestrauntCard";
import { PromotedCard } from "../RestrauntCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";


it("should render RestaurantCard component with props Data", () => {
    render(<Card resData={MOCK_DATA} />);
  
    const name = screen.getByText("Olio - The Wood Fired Pizzeria");
  
    expect(name).toBeInTheDocument();
  });
  
  it("should render RestaurantCard component with Promoted Label", () => {
    // Home Work - test HOC : withPromtedLabel()
    const DummyComponent = () => <div>Protected Content</div>;
    const Wrapped = (PromotedCard(DummyComponent))
    render(
      <Wrapped></Wrapped>
    )
    
  
    expect(screen.getByText('Promoted')).toBeInTheDocument();

  });