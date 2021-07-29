const path = require("path");
const Pact = require("@pact-foundation/pact").Pact;

global.port = 8081
global.provider = new Pact({
    port: global.port,
    log: path.resolve(process.cwd(), "tests/contract/logs", "logs-pact.log"),
    dir: path.resolve(process.cwd(), "tests/contract/pacts"),
    spec: 2,
    logLevel: "INFO",
    pactFileWriteMode: "overwrite",
    consumer: "APP Frontend",
    provider: "APP Backend"
});