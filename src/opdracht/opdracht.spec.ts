import {MijnKlasse} from "./opdracht";

// TODO: traceur == runtime typescript transpilatie
// TODO: https://plnkr.co/edit/02G5E4njHo9y7Po00S5g

let env = jasmine.getEnv();

describe ('Opdracht 1', () => {
  it('Definieer een TypeScript klasse MijnKlasse', () => {
    new MijnKlasse();
  });
  it('Definieer een property titel met de waarde "hallo"', () => {
    let mijnKlasse = new MijnKlasse();
    expect(mijnKlasse.titel).toBe('hallo');
  });
});

