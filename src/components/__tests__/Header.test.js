import { fireEvent, screen,render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

test("should render header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:'Login'})
    expect(loginButton).toBeInTheDocument();
});

test("should cart contain 0 items",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartValue = screen.getByText("Cart - (0 )")
    expect(cartValue).toBeInTheDocument()
})

it("Should render Header Component with a Cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/);
  
    expect(cartItems).toBeInTheDocument();
  });
  it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "Login" });
  
    fireEvent.click(loginButton);
  
    const logoutButton = screen.getByRole("button", { name: "Logout" });
  
    expect(logoutButton).toBeInTheDocument();
  });