import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA_NAME)
    })
})

it("should load restraunt menu component",async()=>{
    await act(async()=>{
        render(

            <BrowserRouter>
                <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
                </Provider>
            </BrowserRouter>
        )
    })
})