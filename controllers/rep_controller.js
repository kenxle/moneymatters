const express = require('express');

const Rep = require('../models/rep.model');
const parseJson = require('parse-json');
var stringify = require('json-stringify');

/**
 * Load user and append to req.
 */
exports.load = (req, res, next, id) => {
  Rep.get(id)
    .then((user) => {
      req.user = user; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
exports.get = (req, res) => {
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
exports.create = (req, res, next) => {
  const user = new Rep({
    username: req.body.username,
    mobileNumber: req.body.mobileNumber
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
exports.update = (req, res, next) => {
  const user = req.user;
  user.username = req.body.username;
  user.mobileNumber = req.body.mobileNumber;

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => {
    	console.log("error on update");
    	next(e)
    });
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
exports.list = (req, res, next) => {
  const { limit = 500, skip = 0 } = req.query;
  console.log({limit,skip});
  Rep.list({ limit, skip })
    .then(users => {
    	console.log("success" + users);
    	res.status(200).json(users)
    })
    .catch(e => {
    	console.log("error" + e);
    	next(e);
    });
}

/**
 * Delete user.
 * @returns {User}
 */
exports.remove = (req, res, next) =>{
  const user = req.user;
  user.remove()
    .then(deletedUser => res.json(deletedUser))
    .catch(e => next(e));
}



// declare axios for making http requests
const axios = require('axios');
const FakeAPI = 'https://jsonplaceholder.typicode.com';
const apiKey = '568de22f84c58ba85a90fd2ae779b0ae';
const apiRoot = 'http://classic.maplight.org/services_open_api';

const ppApiKey = 'LKV45QBHnDnobkwg65n1FjkNiQ34g1AgP0KNKS7d';

const OSAPIKey = '888643663298ac42f23e8490316f2750'
const OSAPIRoot = `https://www.opensecrets.org/api/?apikey=${OSAPIKey}&output=json`


const billSearch = ({search, jurisdiction='us'}) =>
  `${apiRoot}/map.bill_search_v1.json?apikey=${apiKey}&jurisdiction=${jurisdiction}&search=${search}`
const billList = ({session=115, jurisdiction='us', inc_orgs=0, has_orgs=0}) =>
  `${apiRoot}/map.bill_list_v1.json?apikey=${apiKey}&jurisdiction=${jurisdiction}&session=${session}&include_organizations=${inc_orgs}&has_organizations=${has_orgs}`
const billPosition = ({billId=113, prefix='h', session=115, jurisdiction='us'}) => 
  `${apiRoot}/map.bill_positions_v1.json?apikey=${apiKey}&jurisdiction=${jurisdiction}&session=${session}&prefix=${prefix}&number=${billId}`
const organizationSearch = ({search, exact=0}) => 
  `${apiRoot}/map.organization_search_v1.json?apikey=${apiKey}&search=${search}&exact=${exact}`
const orgPositions = ({orgId=9027648, jurisdiction='us'}) => 
  `${apiRoot}/map.organization_positions_v1.json?apikey=${apiKey}&organization_id=${orgId}&jurisdiction=${jurisdiction}`

const interestContributions  = ({crpid, cycle='2016'}) => 
  `${OSAPIRoot}&method=candIndustry&cid=${crpid}&cycle=${cycle}&`


const membersList = ({session=115, chamber='house'}) =>
  `https://api.propublica.org/congress/v1/${session}/${chamber}/members.json`
const memberContributions  = ({FECId=115, cycle=2016}) => 
  `https://api.propublica.org/campaign-finance/v1/${cycle}/candidates/${FECId}.json`


/*
candIndustry

Provides the top ten industries contributing to a specified candidate for a House or Senate seat or member of Congress. These are 6-year numbers for Senators/Senate candidates; 2-year total for Representatives/House candidates.

Parameters
apikey:	(required) Your API Key
cid:	(required) CRP CandidateID
cycle:	2012, 2014, 2016, 2018 (blank or out of range cycle will return most recent cycle)
*/
exports.getInterestContributions = (req, res) => {
  // Get bills list from maplight api
  // 
    let url = interestContributions({crpid: req.params.crpid})
    console.log("GET: " + url)
    axios.get(url, {
      headers: {
        'X-API-Key': ppApiKey
      }
    })
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
};

exports.listChamberSession = (req, res) => {
  // Get bills list from maplight api
  // 
    let url = membersList({chamber: req.params.chamber, session: req.params.session})
    console.log("GET: " + url)
    axios.get(url, {
      headers: {
        'X-API-Key': ppApiKey
      }
    })
    .then(bills => {
      res.status(200).json(bills.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
}

exports.updateDatabase = (req, res) => {
	let url = membersList({chamber: req.params.chamber})
    console.log("GET: " + url)
    axios.get(url, {
      headers: {
        'X-API-Key': ppApiKey
      }
    })
    .then(bills => {
      members = bills.data.results[0].members
      
      wait = 500;
      members.map(member =>{
      	Rep.update({id: member.id},
		    {
		    	id: member.id,
		    	 FECId: member.fec_candidate_id,
		    	 CRPId: member.crp_id,
			    first_name: member.first_name,
			    last_name: member.last_name,
			    date_of_birth: member.date_of_birth,
			    party: member.party,
			    district: member.district,
			    state: member.state,
			    total_receipts: member.total_receipts,
			    total_from_individuals: member.total_from_individuals,
			    total_from_pacs: member.total_from_pacs,
			    total_contributions: member.total_contributions
		    }, 
		    {$setOnInsert: member}, 
		    {upsert: true}, 
		    function(err, numAffected) { 
		   		if(err){
		    		console.log(err)
		    	}else{
		    		console.log(numAffected)
		    	} 
			}
		); 
         
		setTimeout((member) => {
			let url = memberContributions({FECId: member.fec_candidate_id})
	        console.log("GET: " + url)
	        axios.get(url, {
	          headers: {
	            'X-API-Key': ppApiKey
	          }
	        })
	        .then(bills => {
	        	console.log(bills.data.results) 
	        	Rep.update({id: member.id}, 
				    {
				    	id: member.id,
					    total_receipts: bills.data.results[0].total_receipts,
					    total_from_individuals: bills.data.results[0].total_from_individuals,
					    total_from_pacs: bills.data.results[0].total_from_pacs,
					    total_contributions: bills.data.results[0].total_contributions 
					}, 
				    // {$setOnInsert: member}, 
				    // {upsert: true}, 
				    function(err, numAffected) { 
				   		if(err){
				    		console.log("error updating: " + err)
				    	}else{
				    		console.log("success: " + numAffected)
				    		
				    	}
					}
				);
	          	 
	        })
	        .catch(error => {
	          console.log(error)
	        });
		}, wait, member)
        wait +=500;
        
        
        
      })

      res.status(200).json(members);
    })
    .catch(error => {
      res.status(500).send(error)
    });
}



exports.updateDatabaseMembers = (req, res) => {
	console.log("running update on core member data only");
	let url = membersList({})
    console.log("GET: " + url)
    axios.get(url, {
      headers: {
        'X-API-Key': ppApiKey
      }
    })
    .then(bills => {
      members = bills.data.results[0].members
      
      wait = 500;
      members.map(member =>{
      	Rep.update({id: member.id},
		    {id: member.id,
		    	 FECId: member.fec_candidate_id,
		    	 CRPId: member.crp_id,
			    first_name: member.first_name,
			    last_name: member.last_name,
			    date_of_birth: member.date_of_birth,
			    party: member.party,
			    district: member.district,
			    state: member.state,
			    total_receipts: member.total_receipts,
			    total_from_individuals: member.total_from_individuals,
			    total_from_pacs: member.total_from_pacs,
			    total_contributions: member.total_contributions
		    }, 
		    {$setOnInsert: member}, 
		    {upsert: true}, 
		    function(err, numAffected) { 
		   		if(err){
		    		console.log(err)
		    	}else{
		    		console.log(numAffected)
		    	} 
			}
		); 
         
        
        
      })

      res.status(200).json(members);
    })
    .catch(error => {
      res.status(500).send(error)
    });
}



/*
deprecated in favor of 'list'
Query Parameters

Parameter Description
congress  102-115 for House, 80-115 for Senate
chamber house or senate
https://projects.propublica.org/api-docs/congress-api/members/
*/ 
exports.getMembers = (req, res) => {
  // Get bills list from maplight api
  // 
    let url = membersList({chamber: req.params.chamber})
    console.log("GET: " + url)
    axios.get(url, {
      headers: {
        'X-API-Key': ppApiKey
      }
    })
    .then(bills => {
      members = bills.data.results[0].members
///
      // members.map(member =>{
      //   // console.log(member);
      //   // console.log(member.fec_candidate_id)
      //   let url = memberContributions({FECId: member.fec_candidate_id})
      //   console.log("GET: " + url)
      //   axios.get(url, {
      //     headers: {
      //       'X-API-Key': ppApiKey
      //     }
      //   })
      //   .then(bills => {
      //     for (let key in bills.data.results){
      //       member[key] = bills.data.results[key]
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   });
        //
        //
        //
      // })
///
      res.status(200).json(members);
    })
    .catch(error => {
      res.status(500).send(error)
    });
};
