import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 401,
        });
    });

    await page.route('**/login', async (route) => {
        await route.fulfill({
            status: 200,
            json: {
                two_factor: true,
            },
        });
    });

    await page.goto('/');

    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page).toHaveURL('/auth/verify');
});

test('user can authenticate with authenticator code challenge', async ({
    page,
}) => {
    await page.route('**/two-factor-challenge', async (route) => {
        expect(route.request().postDataJSON()).toMatchObject({
            code: '123456',
        });

        await route.fulfill({
            status: 200,
        });
    });

    await page.getByTestId('codeInput').locator('input').nth(1).fill('123456');
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByTestId('breadcrumbs')).toContainText('Dashboard');
});

test('user can authenticate with recovery code challenge', async ({ page }) => {
    await page.route('**/two-factor-challenge', async (route) => {
        expect(route.request().postDataJSON()).toMatchObject({
            recovery_code: 'dsfhsdf-32r132',
        });

        await route.fulfill({
            status: 200,
        });
    });

    await page.getByTestId('recovery').click();

    await expect(page).toHaveURL('/auth/recovery');
    await page.getByTestId('recoveryCodeInput').fill('dsfhsdf-32r132');
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByTestId('breadcrumbs')).toContainText('Dashboard');
});
