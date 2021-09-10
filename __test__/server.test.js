import { getWeatherForecast, getLocationImage } from "../src/server/server";

describe("Testing the main functions existence", () => {
    test("Testing the main functions are defined", () => {
        expect(getWeatherForecast).toBeDefined();
        expect(getLocationImage).toBeDefined();
    })
});