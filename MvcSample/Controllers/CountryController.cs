using System.Web.Mvc;
using MvcSample.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Script.Serialization;

namespace MvcSample.Controllers
{
    public class CountryController : Controller
    {
        // GET: Country
        public ActionResult Index()
        {
            //return View("Index", "", SerializedCountryData());
            return View("Index");
        }

        [HttpGet]
        public string SerializedCountryData()
        {
            var countries = new[]
                {
                    new Country {id = 1, name = "United States", capital = "Washington, D.C.", description ="The United States of America, commonly known as the United States (U.S.) or America, is a federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions. Forty-eight of the fifty states and the federal district are contiguous and located in North America between Canada and Mexico. The state of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The state of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea, stretching across nine time zones. The extremely diverse geography, climate and wildlife of the United States make it one of the world's 17 megadiverse countries.", area = 9833520, population = 323127513, gdp = 57220},
                    new Country {id = 2, name = "United Kingdom", capital = "London", description ="The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country in western Europe. Lying off the north-western coast of the European mainland, the United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland and many smaller islands. Northern Ireland is the only part of the United Kingdom that shares a land border with another sovereign state‍—‌the Republic of Ireland. Apart from this land border, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to its east, the English Channel to its south and the Celtic Sea to its south-south-west, giving it the 12th-longest coastline in the world.", area = 242495, population = 65648000, gdp = 42514},
                    new Country {id = 3, name = "Canada", capital = "Ottawa", description ="Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area and the fourth-largest country by land area. Canada's southern border with the United States is the world's longest bi-national land border. The majority of the country has a cold or severely cold winter climate, but southerly areas are warm in summer. Canada is sparsely populated, the majority of its land territory being dominated by forest and tundra and the Rocky Mountains.", area = 9984670 , population = 35151728, gdp = 46199},
                    new Country {id = 4, name = "Australia", capital = "Canberra", description ="Australia officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. The neighbouring countries are Papua New Guinea, Indonesia and East Timor to the north; the Solomon Islands and Vanuatu to the north-east; and New Zealand to the south-east. Australia's capital is Canberra, and its largest urban area is Sydney.", area = 7692024 , population = 24598900, gdp = 48806},
                    new Country {id = 5, name = "New Zealand", capital = "Wellington", description ="New Zealand is an island nation in the southwestern Pacific Ocean. The country geographically comprises two main landmasses—the North Island (or Te Ika-a-Māui), and the South Island (or Te Waipounamu)—and around 600 smaller islands. New Zealand is situated some 1,500 kilometres east of Australia across the Tasman Sea and roughly 1,000 kilometres south of the Pacific island areas of New Caledonia, Fiji, and Tonga. Because of its remoteness, it was one of the last lands to be settled by humans. During its long period of isolation, New Zealand developed a distinct biodiversity of animal, fungal and plant life.", area = 268021 , population = 4801440, gdp = 36950}
                };
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            return JsonConvert.SerializeObject(countries, Formatting.None, settings);
        }

        [HttpGet]
        public string getCountryDetail(int id)
        {
            JavaScriptSerializer js = new JavaScriptSerializer();
            Country[] country = js.Deserialize<Country[]>(SerializedCountryData());
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            try
            {
                return JsonConvert.SerializeObject(country[id - 1], Formatting.None, settings);
            }
            catch
            {
                var error = "{ 'error':'No information is found!'}";
                return JsonConvert.SerializeObject(error, Formatting.None, settings);
            }
        }
    }
}