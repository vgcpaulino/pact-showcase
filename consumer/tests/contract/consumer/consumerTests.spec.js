import { getClient, postClient, getClients } from '../../../src/consumer';
import { inputGetClients, expectedGetClients } from './testData';
import { inputGetOneClient, expectedGetOneClient } from './testData';
import { inputsPostClient, expectedPostClient } from './testData';

describe('Contract Tests', () => {
    // ######################################################################### 
    describe('GET Clients', () => {
        beforeAll(() => {
            const interaction = {
                state: "I have a list of clients",
                uponReceiving: "a request for all clients",
                withRequest: {
                    method: inputGetClients.method,
                    path: inputGetClients.path,
                    headers: {
                        Accept: "application/json, text/plain, */*"
                    }
                },
                willRespondWith: {
                    status: expectedGetClients.status,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    body: expectedGetClients.body
                }
            }
            provider.addInteraction(interaction);
        });

        test("Returns the correct Body, Header and StatusCode", async () => {
            const response = await getClients();
            expect(response.status).toEqual(expectedGetClients.status);
            expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
            expect(response.data).toEqual(expectedGetClients.body);
        });
    });
    // #########################################################################
    describe('GET Client', () => {
        beforeAll(() => {
            const interaction = {
                state: "I have a list of clients",
                uponReceiving: "a request for ONE clients",
                withRequest: {
                    method: inputGetOneClient.method,
                    path: inputGetOneClient.path,
                },
                willRespondWith: {
                    status: expectedGetOneClient.status,
                    body: expectedGetOneClient.body
                }
            }
            provider.addInteraction(interaction);
        });
        test("Returns the correct Body, Header and StatusCode", async () => {
            const response = await getClient(3);
            expect(response.status).toEqual(expectedGetOneClient.status);
            expect(response.data).toEqual(expectedGetOneClient.body);
        });
    });
    // #########################################################################
    describe('POST Client', () => {
        beforeAll(() => {
            const interaction = {
                state: "I create a new Client",
                uponReceiving: "a equest to create a new client with First Name and Last Name",
                withRequest: {
                    method: inputsPostClient.method,
                    path: inputsPostClient.path,
                    headers: inputsPostClient.headers,
                    body: inputsPostClient.body
                },
                willRespondWith: {
                    // status: 200,
                    status: expectedPostClient.status,
                    headers: expectedPostClient.headers,
                    body: expectedPostClient.body
                }
            };
            return provider.addInteraction(interaction);
        });
        test('Return the correct Body, Header and Status Code', async () => {
            const response = await postClient(inputsPostClient.body);
            // expect(response.status).toEqual(expectedPostClient.status);
            expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
            expect(response.data).toMatchObject(inputsPostClient.body);
            expect(typeof response.data.id).toBe('number');
        });
    });
    // #########################################################################
});