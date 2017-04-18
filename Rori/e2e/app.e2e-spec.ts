import { RoriPage } from './app.po';

describe('rori App', () => {
  let page: RoriPage;

  beforeEach(() => {
    page = new RoriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
