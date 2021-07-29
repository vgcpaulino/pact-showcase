import { Matchers } from '@pact-foundation/pact';

export const inputGetClients = {
    path: '/clients',
    method: 'GET',
    headers: {
        Accept: "application/json, text/plain, */*"
    }
};

export const expectedGetClients = {
    status: 200,
    body: [
        {
            "firstName": "Lisa",
            "lastName": "Simpson",
            "age": 8,
            "id": 1
        },
        {
            "firstName": "Wonder",
            "lastName": "Woman",
            "age": 30,
            "id": 2
        },
        {
            "firstName": "Homer",
            "lastName": "Simpson",
            "age": 39,
            "id": 3
        }
    ]
};

export const inputGetOneClient = {
    path: '/clients/3',
    method: 'GET'
};

export const expectedGetOneClient = {
    status: 200,
    body: {
        firstName: "Homer",
        lastName: "Simpson",
        age: 39,
        id: 3
    }
};

export const inputsPostClient = {
    path: '/clients',
    method: 'POST',
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    body: {
        firstName: "John",
        lastName: "Doe",
        age: 31
    }
}

export const expectedPostClient = {
    status: 201,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    body: {
        firstName: "John",
        lastName: "Doe",
        age: 31,
        id: Matchers.integer(10)
    }
}

