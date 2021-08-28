import { RunStation } from './../src/classes/RunStation';

describe('Pattern Observer', () => {
    
    it("Should be return DisplayCondition", () => {
        expect(RunStation.main()).toBe("Conditions actuelles 26 degrés C et 65 % d'humidité");
    });

    it("Should be return DisplayStats", () => {
        expect(RunStation.main1()).toBe("Température Moy/Max/Min 26");
    });
})
