import { Responseurl4homePage } from './app.po';

describe('responseurl4home App', () => {
  let page: Responseurl4homePage;

  beforeEach(() => {
    page = new Responseurl4homePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
