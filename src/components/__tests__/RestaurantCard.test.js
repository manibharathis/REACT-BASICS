import { RESMOCK } from "../mocks/rescardmock";
import Card from "../RestrauntCard";
import { render,screen } from "@testing-library/react";

test("should contain res title",()=>{
    
render(<Card resData={RESMOCK}/>)
const data = screen.getAllByText("Leon's - Burgers & Wings (Leon Grill)")
  expect(data).toBeInTheDocument()
})


it("should render RestaurantCard component with props Data", () => {
    render(<Card resData={RESMOCK} />);
  
    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  
    expect(name).toBeInTheDocument();
  });