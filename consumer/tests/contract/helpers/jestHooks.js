jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

beforeAll(() => 
    // Setup the pact framework, including start the undnerlying mock server;
    provider.setup()
);

afterAll(() =>
    // Writes the Pact and clears any interactions left behind and shutdown the mock server;
    provider.finalize()
);