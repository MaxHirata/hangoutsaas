import { HangOutAppPage } from './app.po';

describe('hang-out-app App', () => {
  let page: HangOutAppPage;

  beforeEach(() => {
    page = new HangOutAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
