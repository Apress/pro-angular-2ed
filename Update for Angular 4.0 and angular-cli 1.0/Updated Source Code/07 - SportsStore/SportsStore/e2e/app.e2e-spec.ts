import { SportsStorePage } from './app.po';

describe('sports-store App', () => {
  let page: SportsStorePage;

  beforeEach(() => {
    page = new SportsStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
