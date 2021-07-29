using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Provider.Api.Web.Models
{
    public class ClientsTestData
    {
        public List<Client> GetListOfClients()
        {
            return new List<Client>() {
                GetNewClient("Lisa", "Simpson", 8, 1),
                GetNewClient("Wonder", "Woman", 30, 2),
                GetNewClient("Homer", "Simpson", 39, 3)
            };
        }

        private Client GetNewClient(string firstName, string lastName, int age, int id)
        {
            Client client = new Client();
            client.FirstName = firstName;
            client.LastName = lastName;
            client.Age = age;
            client.Id = id;
            return client;
        }
    }
}
