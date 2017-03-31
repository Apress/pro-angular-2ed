import { ExampleAppPage } from './app.po';

describe('example-app App', () => {
  let page: ExampleAppPage;

  beforeEach(() => {
    page = new ExampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
