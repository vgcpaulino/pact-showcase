using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.Owin.Hosting;
using PactNet;
using PactNet.Infrastructure.Outputters;
using Xunit;
using Xunit.Abstractions;

namespace Provider.Api.Web.Tests
{
    public class EventApiTests : IDisposable
    {
        private readonly ITestOutputHelper _output;

        public EventApiTests(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void EnsureEventApiHonoursPactWithConsumer()
        {
            //Arrange
            const string serviceUri = "http://localhost:9222";
            var config = new PactVerifierConfig
            {
                Outputters = new List<IOutput>
                {
                    new XUnitOutput(_output)
                },
                PublishVerificationResults = true,
                ProviderVersion = "1.0.0",
                // ConsumerTags = new List<string>() { "dev" }
            };
            
            using (WebApp.Start<TestStartup>(serviceUri))
            {
                //Act / Assert
                IPactVerifier pactVerifier = new PactVerifier(config);
                pactVerifier
                    .ProviderState($"{serviceUri}/provider-states")
                    .ServiceProvider("APP Backend", serviceUri)
                    .HonoursPactWith("APP Frontend")
                    //  .PactUri($"C:\\POC\\Backend\\Provider.Api.Web.Tests\\pacts\\app_frontend-app_backend.json")
                    // .PactBroker("http://localhost:9292", uriOptions: null, enablePending: true, consumerVersionTags: new   List<string> { "dev" }, providerVersionTags: new List<string> { "dev" }, consumerVersionSelectors: new List<VersionTagSelector> { new VersionTagSelector("dev") })
                    .PactBroker("http://localhost:9292")
                    .Verify();
            }
        }

        public virtual void Dispose()
        {
        }
    }
}
