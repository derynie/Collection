import { CollectionWebPage } from './app.po';

describe('collection-web App', () => {
  let page: CollectionWebPage;

  beforeEach(() => {
    page = new CollectionWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
