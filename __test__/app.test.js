const request = require('supertest');
const app = require('../app')


describe('GET /', () => {
	const url = "/";
    test('It should give status code 200', () => {
        return request(app).get(url).then(response => {
            expect(response.statusCode).toBe(200)
        })
    });

    test('It should return Welcome to Express!', () => {
        return request(app).get(url).then(response => {
            expect(response.text).toBe('Welcome to Express!')
        })
    });

})

describe('GET /testAPI', () => {
    
    jest.setTimeout(10000);
    const url = "/testAPI";

    test('It should give status code 200', async () => {

        const response = await request(app).get(url);
        expect(response.statusCode).toBe(200);
    });

})
