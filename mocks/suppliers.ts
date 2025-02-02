const suppliers =
    [
        {
            "supplierID": 4,
            "companyName": "Tokyo Traders",
            "contactName": "Yoshi Nagase",
            "contactTitle": "Marketing Manager",
            "address": {
                "street": "9-8 Sekimai Musashino-shi",
                "city": "Tokyo",
                "region": "NULL",
                "postalCode": 100,
                "country": "Japan",
                "phone": "(03) 3555-5011"
            }
        },
        {
            "supplierID": 5,
            "companyName": "Cooperativa de Quesos 'Las Cabras'",
            "contactName": "Antonio del Valle Saavedra",
            "contactTitle": "Export Administrator",
            "address": {
                "street": "Calle del Rosal 4",
                "city": "Oviedo",
                "region": "Asturias",
                "postalCode": 33007,
                "country": "Spain",
                "phone": "(98) 598 76 54"
            }
        },
        {
            "supplierID": 6,
            "companyName": "Mayumi's",
            "contactName": "Mayumi Ohno",
            "contactTitle": "Marketing Representative",
            "address": {
                "street": "92 Setsuko Chuo-ku",
                "city": "Osaka",
                "region": "NULL",
                "postalCode": 545,
                "country": "Japan",
                "phone": "(06) 431-7877"
            }
        },
        {
            "supplierID": 7,
            "companyName": "Pavlova Ltd.",
            "contactName": "Ian Devling",
            "contactTitle": "Marketing Manager",
            "address": {
                "street": "74 Rose St. Moonie Ponds",
                "city": "Melbourne",
                "region": "Victoria",
                "postalCode": 3058,
                "country": "Australia",
                "phone": "(03) 444-2343"
            }
        },
        {
            "supplierID": 8,
            "companyName": "Specialty Biscuits Ltd.",
            "contactName": "Peter Wilson",
            "contactTitle": "Sales Representative",
            "address": {
                "street": "29 King's Way",
                "city": "Manchester",
                "region": "NULL",
                "postalCode": "M14 GSD",
                "country": "UK",
                "phone": "(161) 555-4448"
            }
        },
        {
            "supplierID": 9,
            "companyName": "PB Knäckebröd AB",
            "contactName": "Lars Peterson",
            "contactTitle": "Sales Agent",
            "address": {
                "street": "Kaloadagatan 13",
                "city": "Göteborg",
                "region": "NULL",
                "postalCode": "S-345 67",
                "country": "Sweden",
                "phone": "031-987 65 43"
            }
        },
        {
            "supplierID": 10,
            "companyName": "Refrescos Americanas LTDA",
            "contactName": "Carlos Diaz",
            "contactTitle": "Marketing Manager",
            "address": {
                "street": "Av. das Americanas 12.890",
                "city": "Sao Paulo",
                "region": "NULL",
                "postalCode": 5442,
                "country": "Brazil",
                "phone": "(11) 555 4640"
            }
        },
        {
            "supplierID": 11,
            "companyName": "Heli Süßwaren GmbH & Co. KG",
            "contactName": "Petra Winkler",
            "contactTitle": "Sales Manager",
            "address": {
                "street": "Tiergartenstraße 5",
                "city": "Berlin",
                "region": "NULL",
                "postalCode": 10785,
                "country": "Germany",
                "phone": "(010) 9984510"
            }
        },
        {
            "supplierID": 2,
            "companyName": "New Orleans Cajun Delights",
            "contactName": "Shelley Burke",
            "contactTitle": "Order Administrator",
            "address": {
                "street": "P.O. Box 78934",
                "city": "New Orleans",
                "region": "LA",
                "postalCode": 70117,
                "country": "USA",
                "phone": "(100) 555-4822"
            }
        },
        {
            "supplierID": 12,
            "companyName": "Plutzer Lebensmittelgroßmärkte AG",
            "contactName": "Martin Bein",
            "contactTitle": "International Marketing Mgr.",
            "address": {
                "street": "Bogenallee 51",
                "city": "Frankfurt",
                "region": "NULL",
                "postalCode": 60439,
                "country": "Germany",
                "phone": "(069) 992755"
            }
        },
        {
            "supplierID": 13,
            "companyName": "Nord-Ost-Fisch Handelsgesellschaft mbH",
            "contactName": "Sven Petersen",
            "contactTitle": "Coordinator Foreign Markets",
            "address": {
                "street": "Frahmredder 112a",
                "city": "Cuxhaven",
                "region": "NULL",
                "postalCode": 27478,
                "country": "Germany",
                "phone": "(04721) 8713"
            }
        },
        {
            "supplierID": 14,
            "companyName": "Formaggi Fortini s.r.l.",
            "contactName": "Elio Rossi",
            "contactTitle": "Sales Representative",
            "address": {
                "street": "Viale Dante 75",
                "city": "Ravenna",
                "region": "NULL",
                "postalCode": 48100,
                "country": "Italy",
                "phone": "(0544) 60323"
            }
        },
        {
            "supplierID": 15,
            "companyName": "Norske Meierier",
            "contactName": "Beate Vileid",
            "contactTitle": "Marketing Manager",
            "address": {
                "street": "Hatlevegen 5",
                "city": "Sandvika",
                "region": "NULL",
                "postalCode": 1320,
                "country": "Norway",
                "phone": "(0)2-953010"
            }
        },
        {
            "supplierID": 1,
            "companyName": "Exotic Liquids",
            "contactName": "Charlotte Cooper",
            "contactTitle": "Purchasing Manager",
            "address": {
                "street": "49 Gilbert St.",
                "city": "London",
                "region": "NULL",
                "postalCode": "EC1 4SD",
                "country": "UK",
                "phone": "(171) 555-2222"
            }
        },
        {
            "supplierID": 3,
            "companyName": "Grandma Kelly's Homestead",
            "contactName": "Regina Murphy",
            "contactTitle": "Sales Representative",
            "address": {
                "street": "707 Oxford Rd.",
                "city": "Ann Arbor",
                "region": "MI",
                "postalCode": 48104,
                "country": "USA",
                "phone": "(313) 555-5735"
            }
        },
        {
            "supplierID": 16,
            "companyName": "Bigfoot Breweries",
            "contactName": "Cheryl Saylor",
            "contactTitle": "Regional Account Rep.",
            "address": {
                "street": "3400 - 8th Avenue Suite 210",
                "city": "Bend",
                "region": "OR",
                "postalCode": 97101,
                "country": "USA",
                "phone": "(503) 555-9931"
            }
        },
        {
            "supplierID": 17,
            "companyName": "Svensk Sjöföda AB",
            "contactName": "Michael Björn",
            "contactTitle": "Sales Representative",
            "address": {
                "street": "Brovallavägen 231",
                "city": "Stockholm",
                "region": "NULL",
                "postalCode": "S-123 45",
                "country": "Sweden",
                "phone": "08-123 45 67"
            }
        },
        {
            "supplierID": 18,
            "companyName": "Aux joyeux ecclésiastiques",
            "contactName": "Guylène Nodier",
            "contactTitle": "Sales Manager",
            "address": {
                "street": "203 Rue des Francs-Bourgeois",
                "city": "Paris",
                "region": "NULL",
                "postalCode": 75004,
                "country": "France",
                "phone": "(1) 03.83.00.68"
            }
        },
        {
            "supplierID": 19,
            "companyName": "New England Seafood Cannery",
            "contactName": "Robb Merchant",
            "contactTitle": "Wholesale Account Agent",
            "address": {
                "street": "Order Processing Dept. 2100 Paul Revere Blvd.",
                "city": "Boston",
                "region": "MA",
                "postalCode": 2134,
                "country": "USA",
                "phone": "(617) 555-3267"
            }
        },
        {
            "supplierID": 20,
            "companyName": "Leka Trading",
            "contactName": "Chandra Leka",
            "contactTitle": "Owner",
            "address": {
                "street": "471 Serangoon Loop Suite #402",
                "city": "Singapore",
                "region": "NULL",
                "postalCode": 512,
                "country": "Singapore",
                "phone": "555-8787"
            }
        },
        {
            "supplierID": 21,
            "companyName": "Lyngbysild",
            "contactName": "Niels Petersen",
            "contactTitle": "Sales Manager",
            "address": {
                "street": "Lyngbysild Fiskebakken 10",
                "city": "Lyngby",
                "region": "NULL",
                "postalCode": 2800,
                "country": "Denmark",
                "phone": 43844108
            }
        },
        {
            "supplierID": 22,
            "companyName": "Zaanse Snoepfabriek",
            "contactName": "Dirk Luchte",
            "contactTitle": "Accounting Manager",
            "address": {
                "street": "Verkoop Rijnweg 22",
                "city": "Zaandam",
                "region": "NULL",
                "postalCode": "9999 ZZ",
                "country": "Netherlands",
                "phone": "(12345) 1212"
            }
        },
        {
            "supplierID": 25,
            "companyName": "Ma Maison",
            "contactName": "Jean-Guy Lauzon",
            "contactTitle": "Marketing Manager",
            "address": {
                "street": "2960 Rue St. Laurent",
                "city": "Montréal",
                "region": "Québec",
                "postalCode": "H1J 1C3",
                "country": "Canada",
                "phone": "(514) 555-9022"
            }
        },
        {
            "supplierID": 27,
            "companyName": "Escargots Nouveaux",
            "contactName": "Marie Delamare",
            "contactTitle": "Sales Manager",
            "address": {
                "street": "22 rue H. Voiron",
                "city": "Montceau",
                "region": "NULL",
                "postalCode": 71300,
                "country": "France",
                "phone": "85.57.00.07"
            }
        },
        {
            "supplierID": 26,
            "companyName": "Pasta Buttini s.r.l.",
            "contactName": "Giovanni Giudici",
            "contactTitle": "Order Administrator",
            "address": {
                "street": "Via dei Gelsomini 153",
                "city": "Salerno",
                "region": "NULL",
                "postalCode": 84100,
                "country": "Italy",
                "phone": "(089) 6547665"
            }
        },
        {
            "supplierID": 28,
            "companyName": "Gai pâturage",
            "contactName": "Eliane Noz",
            "contactTitle": "Sales Representative",
            "address": {
                "street": "Bat. B 3 rue des Alpes",
                "city": "Annecy",
                "region": "NULL",
                "postalCode": 74000,
                "country": "France",
                "phone": "38.76.98.06"
            }
        },
        {
            "supplierID": 23,
            "companyName": "Karkki Oy",
            "contactName": "Anne Heikkonen",
            "contactTitle": "Product Manager",
            "address": {
                "street": "Valtakatu 12",
                "city": "Lappeenranta",
                "region": "NULL",
                "postalCode": 53120,
                "country": "Finland",
                "phone": "(953) 10956"
            }
        },
        {
            "supplierID": 24,
            "companyName": "G'day Mate",
            "contactName": "Wendy Mackenzie",
            "contactTitle": "Sales Representative",
            "address": {
                "street": "170 Prince Edward Parade Hunter's Hill",
                "city": "Sydney",
                "region": "NSW",
                "postalCode": 2042,
                "country": "Australia",
                "phone": "(02) 555-5914"
            }
        },
        {
            "supplierID": 29,
            "companyName": "Forêts d'érables",
            "contactName": "Chantal Goulet",
            "contactTitle": "Accounting Manager",
            "address": {
                "street": "148 rue Chasseur",
                "city": "Ste-Hyacinthe",
                "region": "Québec",
                "postalCode": "J2S 7S8",
                "country": "Canada",
                "phone": "(514) 555-2955"
            }
        }
    ]

export default suppliers