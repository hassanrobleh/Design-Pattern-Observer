import { RunStation } from './../src/classes/RunStation';
describe('Pattern Observer', () => {
    
    it("Should be return condition", () => {
        expect(RunStation.main()).toBe("Conditions actuelles 26 degrés C et 65 % d'humidité");
    })
})
