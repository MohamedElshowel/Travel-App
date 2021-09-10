import serverRewire from "../src/server/server";

describe("Testing the main functions existence", () => {
  test("main functions are defined", () => {
    const getWeatherForecast = serverRewire.__get__("getWeatherForecast");
    const getLocationImage = serverRewire.__get__("getLocationImage");

    expect(getWeatherForecast).toBeDefined();
    expect(getLocationImage).toBeDefined();
  });
});
