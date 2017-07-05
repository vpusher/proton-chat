import { ProtonChatPage } from './app.po';

describe('proton-chat App', () => {
  let page: ProtonChatPage;

  beforeEach(() => {
    page = new ProtonChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
