import { test, expect } from '@playwright/test';

test.describe('API Endpoints', () => {
  const API_KEY = 'fsk_server_133e61fa671d3e927a1eba415220a284';

  test('should return flags from API endpoint', async ({ request }) => {
    const response = await request.get('/api/v1/flags', {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('flags');
    expect(Array.isArray(data.flags)).toBeTruthy();
  });

  test('should reject request without API key', async ({ request }) => {
    const response = await request.get('/api/v1/flags');

    expect(response.status()).toBe(401);
  });

  test('should reject request with invalid API key', async ({ request }) => {
    const response = await request.get('/api/v1/flags', {
      headers: {
        'x-api-key': 'invalid_key_12345',
      },
    });

    expect(response.status()).toBe(401);
  });

  test('should evaluate flag with user context', async ({ request }) => {
    const response = await request.get('/api/v1/flags', {
      headers: {
        'x-api-key': API_KEY,
      },
      params: {
        userId: 'test-user-123',
        email: 'test@example.com',
        country: 'US',
      },
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('flags');
    
    // Check if flags have evaluation results
    if (data.flags.length > 0) {
      const flag = data.flags[0];
      expect(flag).toHaveProperty('value');
      expect(flag).toHaveProperty('key');
    }
  });

  test('should return proper CORS headers', async ({ request }) => {
    const response = await request.get('/api/v1/flags', {
      headers: {
        'x-api-key': API_KEY,
        'Origin': 'http://localhost:3001',
      },
    });

    expect(response.ok()).toBeTruthy();
    
    // Check CORS headers
    const headers = response.headers();
    expect(headers['access-control-allow-origin']).toBe('*');
    expect(headers['access-control-allow-methods']).toContain('GET');
  });

  test('should handle OPTIONS preflight request', async ({ request }) => {
    const response = await request.fetch('/api/v1/flags', {
      method: 'OPTIONS',
      headers: {
        'Origin': 'http://localhost:3001',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'x-api-key',
      },
    });

    expect(response.status()).toBe(200);
    
    const headers = response.headers();
    expect(headers['access-control-allow-origin']).toBe('*');
    expect(headers['access-control-allow-methods']).toContain('GET');
    expect(headers['access-control-allow-headers']).toContain('x-api-key');
  });

  test('should include cache headers', async ({ request }) => {
    const response = await request.get('/api/v1/flags', {
      headers: {
        'x-api-key': API_KEY,
      },
    });

    expect(response.ok()).toBeTruthy();
    
    const headers = response.headers();
    expect(headers['cache-control']).toBe('public, s-maxage=60, stale-while-revalidate=30');
  });
});
