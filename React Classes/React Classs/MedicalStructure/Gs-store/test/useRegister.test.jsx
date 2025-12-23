import {describe, it, expect} from "vitest";
import {renderHook} from "@testing-library/react";
import useRegister from "../src/customHooks/useRegister.jsx";

describe("useRegister" ,() => {
    it("should return firstName and a succesful message", () => {
        const userDetails={
            firstName: "kiki",
            lastName: "mama",
            email: "bingo@gmail.com",
            password: "password123",
        }
        const {result} = renderHook(() => useRegister(userDetails));
        expect(result.current.name).toBe("kiki");
        expect(result.current.message).toMatch("Registration successful");
    
}  );
});