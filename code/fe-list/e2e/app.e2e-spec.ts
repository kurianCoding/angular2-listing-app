import { FeListPage } from './app.po';

describe('fe-list App', () => {
  let page: FeListPage;

  beforeEach(() => {
    page = new FeListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
