import { BlogOcPage } from './app.po';

describe('blog-oc App', () => {
  let page: BlogOcPage;

  beforeEach(() => {
    page = new BlogOcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
