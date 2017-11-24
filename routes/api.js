const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const FakeAPI = 'https://jsonplaceholder.typicode.com';
const apiKey = '568de22f84c58ba85a90fd2ae779b0ae';
const apiRoot = 'http://classic.maplight.org/services_open_api';

const billSearchApi = (search, jurisdiction='us') =>
  `${apiRoot}/map.bill_search_v1.json?apikey=${apiKey}&jurisdiction=${jurisdiction}&search=${search}`
const billListApi = (session=115, jurisdiction='us', inc_orgs=0, has_orgs=0) =>
  `${apiRoot}/map.bill_list_v1.json?apikey=${apiKey}&jurisdiction=${jurisdiction}&session=${session}&include_organizations=${inc_orgs}&has_organizations=${has_orgs}`
const billPositionApi = (billId=113, prefix='h', session=115, jurisdiction='us') => 
  `${apiRoot}/map.bill_positions_v1.json?apikey=${apiKey}&jurisdiction=${jurisdiction}&session=${session}&prefix=${prefix}&number=${billId}`
const organizationSearchApi = (search, exact=0) => 
  `${apiRoot}/map.organization_search_v1.json?apikey=${apiKey}&search=${search}&exact=${exact}`
const orgPositionsApi = (orgId=9027648, jurisdiction='us') => 
  `${apiRoot}/map.organization_positions_v1.json?apikey=${apiKey}&organization_id=${orgId}&jurisdiction=${jurisdiction}`
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Hey, beautiful.');
});


/*
rguments

jurisdiction required enum
us refers to the United States Congress.
search required string
String to be searched, i.e., the full name or partial name of a bill.
http://classic.maplight.org/services_open_api/map.bill_search_v1
*/
router.get('/bills/search/:str', (req, res) => {
  // Get bills list from maplight api
  // 
    axios.get(billSearchApi(search=req.params.str))
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
// Get all bills
/*
http://classic.maplight.org/services_open_api/map.bill_list_v1
Arguments

jurisdiction required enum
us refers to the United States Congress.

session required enum
109 refers to the 109th session of the United States Congress (2005-2006). 110 refers to the 110th session of the United States Congress (2007-2008). 111 refers to the 111th session of the United States Congress (2009-2010).

include_organizations optional boolean
0 or 1, default 0. 1 includes supporting and opposing organizations. 0 includes a flag indicating the existence of organizations. Both include the last update time.

has_organizations optional boolean
0 or 1, default 1. 1 excludes bills without organizations. 0 includes all bills.
*/
router.get('/bills', (req, res) => {
  // Get bills list from maplight api
  // 
    axios.get(billListApi())
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

/*
https://maplight.org/data_guide/bill-positions-api-documentation/
Arguments

jurisdiction required enum
us refers to the United States Congress.

session required enum
109 refers to the 109th session of the United States Congress (2005-2006). 110 refers to the 110th session of the United States Congress (2007-2008). 111 refers to the 111th session of the United States Congress (2009-2010).

prefix required string
Bill prefix. In US:
h House Bill (i.e. H.R.)
hr House Resolution (i.e. H.Res.)
hj House Joint Resolution (i.e. H.J.Res.)
hc House Concurrent Resolution (i.e. H.Con.Res.)
s Senate Bill (i.e. S.)
sr Senate Resolution (i.e. S.Res.)
sj Senate Joint Resolution (i.e. S.J.Res.)
sc Senate Concurrent Resolution (i.e. S.Con.Res.)

number required string
Number of the bill, without prefix.
*/
router.get('/bill/:billId/position', (req, res) => {
  // Get a single bill position from maplight api
  // 
    axios.get(billPositionApi(billId=req.params.billId))
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

/*
Arguments

search required string
String to be searched, i.e., the full name or partial name of an organization that takes a position on legislation.

exact optional boolean
0 or 1, default 0. 1 performs an exact string match on the entire contents of the field that contains names of organizations. This string match is not case sensitive. 0 performs an partial string match within the field that contains names of organizations.

*/
router.get('/organization/search/:str', (req, res) => {
  // find an org's id by a string search
    axios.get(organizationSearchApi(search=req.params.str))
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

/*
Arguments

organization_id required int
MapLight's internal identifier for organizations; output from the map.organization_search method.

jurisdiction required enum
us refers to the United States Congress.
http://classic.maplight.org/services_open_api/map.organization_positions_v1 
*/
router.get('/organization/:orgId/positions', (req, res) => {
  // Get a single bill position from maplight api
    axios.get(orgPositionsApi(orgId=req.params.orgId))
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


// Get all posts
router.get('/fake', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${FakeAPI}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
    
});


module.exports = router;

/*
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).
Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses (()):

Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
*/



