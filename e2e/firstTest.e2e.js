describe('First Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('click in button', async () => {
    const Buttonclick = await element(by.id('click'));
    const ButtonPeopleclick = await element(by.id('click-people'));
  
    await Buttonclick.tap();
    await ButtonPeopleclick.tap();
  });

  it('click in button goback', async () => {
    const ButtonGoBackclick = await element(by.id('click-goback'));
  
    await ButtonGoBackclick.tap();
  });

});
