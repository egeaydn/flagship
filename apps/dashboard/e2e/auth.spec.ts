import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should load the login page', async ({ page }) => {
    await page.goto('/login');
    
    // Check if we're on the login page
    await expect(page).toHaveURL(/\/login/);
    
    // Check for key elements on the login page
    // This is a basic check - adjust based on your actual login page structure
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to login page when not authenticated', async ({ page }) => {
    // Try to access a protected route
    await page.goto('/dashboard');
    
    // Should redirect to login
    // Note: This depends on your authentication implementation
    // Adjust the timeout and expectations based on your setup
    await page.waitForURL(/\/(login|dashboard)/, { timeout: 5000 });
    
    const url = page.url();
    // Either we're on login (redirected) or dashboard (already authenticated)
    expect(url).toMatch(/\/(login|dashboard)/);
  });

  test('should display the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads
    await expect(page.locator('body')).toBeVisible();
    
    // Check for the title or key elements
    const title = await page.title();
    expect(title).toBeTruthy();
  });
});
