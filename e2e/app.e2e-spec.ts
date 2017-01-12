import { PoniacPage } from './app.po';

describe('poniac App', function() {
  let page: PoniacPage;

  beforeEach(() => {
    page = new PoniacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
