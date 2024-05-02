import{test,expect} from '@playwright/test'
test('Home page', async({page})=>{
    await page.goto('https://google.com');

    expect(await page.goto('https://google.com')).toHaveText('google');
    expect().toHaveLength();
})