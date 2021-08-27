import { App } from './../src/classes/App';

describe('Pattern observer test', () => {
    it("should be return true", () => {
        expect(App.main()).toBe("55")
    })
})
