import { expect, describe, it } from 'vitest';
import request from 'supertest';
import { app } from './server';

describe('/GET', async () => {
	const response = await request(app).get('/');
	const responseBody = JSON.parse(response.text);
	it('receives correct HTTP code', () => {
		expect(response.statusCode).toBe(200);
	});
	it('has correct content-type', () => {
		expect(response.headers['content-type']).toMatch(/application\/json/);
	});
	it('JSON object contains correct properties', () => {
		expect(responseBody).toHaveProperty('appName');
	});
	it('has an appName that is not empty', () => {
		expect(responseBody.appName).not.toEqual(''); 
	});


}); 