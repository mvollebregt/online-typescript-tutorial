import { OnlineTypeScriptTutorialPage } from './app.po';

describe('OnlineTypeScriptTutorial App', function() {
  let page: OnlineTypeScriptTutorialPage;

  beforeEach(() => {
    page = new OnlineTypeScriptTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
