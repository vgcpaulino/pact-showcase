# POC Pact - Contract Tests
This repository contains a showcase for Contract Testing with [Pact](https://pact.io/). Although in the same repository, the "Provider" and "Consumer" are distinct projects.  
The "Provider" representing the Backend application, and the "Consumer" representing the Frontend application. In a different scenario, the "Provider" could also contain some service that acts as a "Consumer" for another service, for example the integration between two APIs.  

The "Provider" in this showcase was created using .NET Core and C#, the "Consumer" was created with NodeJs and JavaScript. In order to show how the tool can be used in a multiplatform solution.

## Notes:
- The Consumer generates the contract file inside the "pacts" folder, and the Provider can run the tests using this local file or fetching it from the Pact Broker.
The following file contains the setup to use one or another:
*"EventAPITests.cs" file, line 45.*
- The Consumer runs it against a mocked provider. The confirmation that the pact is validated will only occur when the Provider runs the tests on their side, or when the pact was validated once and the new version it's equal to the previous one.
- The Provider tests it's pretty much starting the service, getting the pact file, and run each item inside the "interactions" (pact file).

## Step By Step:
**Check this guide with a step by step, about how to execute the showcase:** 
[HERE](./docs/executionGuide.md)
