import { test, expect, describe, it } from 'vitest';
import request from 'supertest';
import { app } from './server';

describe('root route works', () => {
	test('GET /', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
}) 