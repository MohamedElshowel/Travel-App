import { generateWeatherJournal } from "../src/client/js/app";

describe("Testing the generateWeatherJournal is existed and exported", () => {
    test("Testing the generateWeatherJournal() function", () => {
        expect(generateWeatherJournal).toBeDefined();
    })
});