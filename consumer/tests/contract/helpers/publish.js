let publisher = require("@pact-foundation/pact-node");
let path = require("path");

let opts = {
    pactFilesOrDirs: [ path.resolve(process.cwd(), "tests/contract/pacts")],
    pactBroker: "http://localhost:9292",
    consumerVersion: "1.0.0",
    providerVersion: "1.0.0",
    tags: "dev"
};

publisher.publishPacts(opts);