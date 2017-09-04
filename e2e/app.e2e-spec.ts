import { FirstAngularProgramPage } from './app.po';

describe('first-angular-program App', function() {
  let page: FirstAngularProgramPage;

  beforeEach(() => {
    page = new FirstAngularProgramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
