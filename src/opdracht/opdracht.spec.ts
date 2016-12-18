import {MijnKlasse} from "./opdracht";

describe ('Opdracht 1', () => {
  it('Definieer een TypeScript klasse MijnKlasse', () => {
    new MijnKlasse();
  });
  it('Definieer een property titel met de waarde "hallo"', () => {
    let mijnKlasse = new MijnKlasse();
    expect(mijnKlasse.titel).toBe('hallo');
  });
});

