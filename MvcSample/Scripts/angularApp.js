angular.module('angApp', []).controller('countryController', ['$scope', '$http', function ($scope, $http) {
    //$scope.countries = [
    //    { id: 1, name: "United States", capital: "Washington, D.C.", description: "The United States of America, commonly known as the United States (U.S.) or America, is a federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions. Forty-eight of the fifty states and the federal district are contiguous and located in North America between Canada and Mexico. The state of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The state of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea, stretching across nine time zones. The extremely diverse geography, climate and wildlife of the United States make it one of the world's 17 megadiverse countries.", area: 9833520, population: 323127513, gdp: 57220 },
    //    { id: 2, name: "United Kingdom", capital: "London", description: "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country in western Europe. Lying off the north-western coast of the European mainland, the United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland and many smaller islands. Northern Ireland is the only part of the United Kingdom that shares a land border with another sovereign state‍—‌the Republic of Ireland. Apart from this land border, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to its east, the English Channel to its south and the Celtic Sea to its south-south-west, giving it the 12th-longest coastline in the world.", area: 242495, population: 65648000, gdp: 42514 },
    //    { id: 3, name: "Canada", capital: "Ottawa", description: "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area and the fourth-largest country by land area. Canada's southern border with the United States is the world's longest bi-national land border. The majority of the country has a cold or severely cold winter climate, but southerly areas are warm in summer. Canada is sparsely populated, the majority of its land territory being dominated by forest and tundra and the Rocky Mountains.", area: 9984670, population: 35151728, gdp: 46199 },
    //    { id: 4, name: "Australia", capital: "Canberra", description: "Australia officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. The neighbouring countries are Papua New Guinea, Indonesia and East Timor to the north; the Solomon Islands and Vanuatu to the north-east; and New Zealand to the south-east. Australia's capital is Canberra, and its largest urban area is Sydney.", area: 7692024, population: 24598900, gdp: 48806 },
    //    { id: 5, name: "New Zealand", capital: "Wellington", description: "New Zealand is an island nation in the southwestern Pacific Ocean. The country geographically comprises two main landmasses—the North Island (or Te Ika-a-Māui), and the South Island (or Te Waipounamu)—and around 600 smaller islands. New Zealand is situated some 1,500 kilometres east of Australia across the Tasman Sea and roughly 1,000 kilometres south of the Pacific island areas of New Caledonia, Fiji, and Tonga. Because of its remoteness, it was one of the last lands to be settled by humans. During its long period of isolation, New Zealand developed a distinct biodiversity of animal, fungal and plant life.", area: 268021, population: 4801440, gdp: 36950 },
    //    { id: 6, name: "France", capital: "Paris", description: "France, officially the French Republic, is a country with territory status in western Europe and several overseas regions and territories. The European, or metropolitan, area of France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. The republic also includes French Guiana on the South American continent and several islands in the Atlantic, Pacific and Indian oceans. The country's 18 integral regions (5 of which are situated overseas) span a combined area of 643,801 square kilometres which, as of January 2017, has a total population of almost 67 million people. France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban centres include Marseille, Lyon, Lille, Nice, Toulouse and Bordeaux.", area: 643801, population: 66991000, gdp: 43652},
    //    { id: 7, name: "Germany", capital: "Berlin", description: "Germany, German: Deutschland, officially the Federal Republic of Germany is a federal parliamentary republic in central-western Europe. It includes 16 constituent states, covers an area of 357,021 square kilometres, and has a largely temperate seasonal climate. With about 82 million inhabitants, Germany is the most populous member state of the European Union. After the United States, it is the second most popular immigration destination in the world. Germany's capital and largest metropolis is Berlin, while its largest conurbation is the Ruhr, with its main centres of Dortmund and Essen. The country's other major cities are Hamburg, Munich, Cologne, Frankfurt, Stuttgart, Düsseldorf, Leipzig, Bremen, Dresden, Hannover and Nuremberg.", area: 357168, population: 82175700, gdp: 48111},
    //    { id: 8, name: "Italy", capital: "Rome", description: "Italy, Italian: Italia, officially the Italian Republic, is a unitary parliamentary republic in Europe. Located in the heart of the Mediterranean Sea, Italy shares open land borders with France, Switzerland, Austria, Slovenia, San Marino and Vatican City. Italy covers an area of 301,338 km2 and has a largely temperate seasonal and Mediterranean climate. Due to its shape, it is often referred to in Italy as lo Stivale (the Boot). With 61 million inhabitants it is the fourth most populous EU member state.", area: 301338, population: 60599936, gdp: 36833},
    //    { id: 9, name: "Spain", capital: "Madrid", description: "Spain, Spanish: España, officially the Kingdom of Spain (Spanish: Reino de España), is a sovereign state located on the Iberian Peninsula in southwestern Europe, with two large archipelagoes, the Balearic Islands in the Mediterranean Sea and the Canary Islands off the North African Atlantic coast, two cities, Ceuta and Melilla, in the North African mainland and several small islands in the Alboran Sea near the Moroccan coast. The country's mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean. It is the only European country to have a border with an African country Morocco and its African territory accounts for nearly 5% of its population, mostly in the Canary Islands but also in Ceuta and Melilla.", area: 505990, population: 46468102, gdp: 38239},
    //    { id: 10, name: "Japan", capital: "Tokyo", description: "Japan, Japanese: 日本 Nippon or Nihon, is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland, and stretches from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the southwest. The kanji that make up Japan's name mean 'sun origin'. Japan is often referred to by the famous epithet 'Land of the Rising Sun' in reference to its Japanese name.", area: 377972, population: 126740000, gdp: 42860 }
    //    //Russia
    //    //China
    //    //India
    //    //Brazil
    //    //Mexico
    //    //Korea
    //    //Taiwan
    //    //Hong Kong
    //    //Singapore
    //    //Israel
    //];
    $scope.countries = "";

    $scope.loadCountries = function () {
        $http.get("http://localhost:57468/country/SerializedCountryData").then(successCallback, errorCallback)
    };

    function successCallback(response) {
        $scope.countries = response.data;
        $scope.showError = !$scope.showError;
    }
    function errorCallback(error) {
        $scope.error = error;
        //$scope.showError = true;
    }

    $scope.loadCountries();
    $scope.nation = "";

    $scope.getCountryDetails = function (id) {
        $scope.nation = $scope.countries[id-1];
        $scope.showMe = !$scope.showMe;
    }
    $scope.goBack = function () {
        $scope.showMe = !$scope.showMe;
    }
}]);