using Provider.Api.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace Provider.Api.Web.Controllers
{
    public class ClientsController : ApiController
    {
        private ClientsTestData testData;
        private List<Client> listOfClients;

        public ClientsController()
        {
            testData = new ClientsTestData();
            listOfClients = testData.GetListOfClients();
        }

        // [Route("clients")]
        // public IEnumerable<Client> Get()
        // {
        //     return listOfClients;
        // }

        [Route("clients")]
        public HttpResponseMessage Get()
        {
            var response = Request.CreateResponse(HttpStatusCode.OK, listOfClients);
            response.Headers.Add("X-Students-Total-Count", "X");
            return response;
        }

        [Route("clients/{id}")]
        public Client GetById(int id)
        {
            return listOfClients.Where(client => client.Id == id).FirstOrDefault();
        }

        [Route("clients")]
        public HttpResponseMessage Post(Client client)
        {
            if (client == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }

            int lastId = listOfClients.Last().Id + 1;
            client.Id = lastId;
            listOfClients.Add(client);

            var response = Request.CreateResponse(HttpStatusCode.Created, client);
            return response;
        }

    }
}
