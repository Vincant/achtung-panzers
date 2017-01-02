import { AchtungPanzersPage } from './app.po';

describe('achtung-panzers App', function() {
  let page: AchtungPanzersPage;

  beforeEach(() => {
    page = new AchtungPanzersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
