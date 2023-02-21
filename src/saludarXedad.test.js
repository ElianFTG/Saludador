import { describe } from "node:test";
import saludar from "./saludoXedad";

describe("Saludar", () => {
    it("deberia saludar en base a su edad", () => {
      expect(sumar("Masculino", 32)).toEqual("Sr.");
    });
  });