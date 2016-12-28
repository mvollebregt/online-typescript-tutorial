import {MijnKlasse} from "./opdracht";

// TODO: https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
// TODO: use ace online code editor


describe ('Opdracht 1', () => {
  it('Definieer een TypeScript klasse MijnKlasse', () => {
    new MijnKlasse();
  });
  it('Definieer een property titel met de waarde "hallo"', () => {
    let mijnKlasse = new MijnKlasse();
    if (mijnKlasse.titel !== 'hallo') {
      fail('niet gelukt!');
    }
  });
});

