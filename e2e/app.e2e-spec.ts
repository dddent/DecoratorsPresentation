import { DecoratorsPresPage } from './app.po';

describe('decorators-pres App', function() {
  let page: DecoratorsPresPage;

  beforeEach(() => {
    page = new DecoratorsPresPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
