import { LazyLoadEverythingPage } from './app.po';

describe('lazy-load-everything App', () => {
  let page: LazyLoadEverythingPage;

  beforeEach(() => {
    page = new LazyLoadEverythingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
