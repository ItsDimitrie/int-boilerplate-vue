import { expect, test } from '@playwright/test';

test('user authenticates with email and password', async ({ page }) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 401,
        });
    });

    await page.route('**/login', async (route) => {
        const postData = route.request().postDataJSON();

        expect(postData).toMatchObject({
            email: 'henk@devries.nl',
            password: '12345678',
        });

        await route.fulfill({
            status: 200,
            json: {
                two_factor: false,
            },
        });
    });

    await page.goto('/');

    await page.locator('#email').fill('henk@devries.nl');
    await page.locator('#password').fill('12345678');

    const loginButton = page.getByRole('button', { name: 'Log in' });
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    await expect(page).toHaveURL('/');
    await expect(page.getByTestId('breadcrumbs')).toContainText('Dashboard');
});

test('redirects to the intended page after log in', async ({ page }) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 401,
        });
    });

    await page.route('**/login', async (route) => {
        await route.fulfill({
            status: 200,
            json: {
                two_factor: false,
            },
        });
    });

    await page.goto('/datatable/create');
    await expect(page).toHaveURL('/login');

    const loginButton = page.getByRole('button', { name: 'Log in' });
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    await expect(page).toHaveURL('/datatable/create');
    await expect(page.getByTestId('breadcrumbs')).toContainText('Datatable');
    await expect(page.getByTestId('breadcrumbs')).toContainText('Create');
});

test('should show dashboard when user is already logged in', async ({
    page,
}) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 200,
            json: {
                data: {
                    id: 1,
                    email: 'henk@devries.nl',
                    first_name: 'Henk',
                    last_name: 'de Vries',
                },
            },
        });
    });

    await page.goto('/');
    await expect(page).toHaveURL('/');
    await expect(page.getByTestId('breadcrumbs')).toContainText('Dashboard');
});

test('user requests password reset link', async ({ page }) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 401,
        });
    });

    await page.route('**/forgot-password', async (route) => {
        const requestData = route.request().postDataJSON();

        expect(requestData).toMatchObject({
            email: 'henk@devries.nl',
        });

        await route.fulfill({
            status: 200,
        });
    });

    await page.goto('/');
    await page.locator('a:has-text("Forgot your password?")').click();
    await page.waitForURL('/forgot-password');

    await page.locator('#forgot-email').fill('henk@devries.nl');
    await page.getByRole('button', { name: 'Request password reset' }).click();
    await expect(page.locator('h3')).toContainText('Check your inbox');
});

test('user resets password', async ({ page }) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 401,
        });
    });

    await page.route('**/reset-password', async (route) => {
        const requestData = route.request().postDataJSON();

        expect(requestData).toMatchObject({
            token: 'token123',
            email: 'henk@devries.nl',
            password: '12345678',
            password_confirmation: '12345678',
        });

        await route.fulfill({
            status: 200,
        });
    });

    await page.goto('/reset-password/token123');
    await page.locator('#email').fill('henk@devries.nl');
    await page.locator('#password').fill('12345678');
    await page.locator('#password-confirmation').fill('12345678');
    await page.getByRole('button', { name: 'Reset password' }).click();

    await expect(page.getByTestId('resetSuccess')).toBeVisible();
});

test('redirects to dashboard when landing on login page while authenticated', async ({
    page,
}) => {
    await page.route('**/user', async (route) => {
        await route.fulfill({
            status: 200,
        });
    });

    await page.goto('/login');
    await page.waitForURL('/');
});
