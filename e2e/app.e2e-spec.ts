import { PwdValidatorPage } from './app.po';

describe('pwd-validator App', () => {
  let page: PwdValidatorPage;

  beforeEach(() => {
    page = new PwdValidatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
