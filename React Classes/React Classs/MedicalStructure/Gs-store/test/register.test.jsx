
import {test,expect} from "vitest";
import Register from "../src/auth/register/Register";
import{render, screen, fireEvent} from "@testing-library/react";

test ("that the input collects firstName", () => {
    render(<Register/>);
    const input  = screen.getByLabelText(/first name/i);
    fireEvent.change(input, {target: {value: "kiki"}});
    expect(input.value).toBe("kiki");
});
// test ("that the input collects firstName", () => {
//     render(<Register/>);
//     const input  = screen.getByLabelText(/first name/i);
//     fireEvent.change(input, {target: {value: "kiki"}});
//     expect(input.value).toBe("kiki");
// });