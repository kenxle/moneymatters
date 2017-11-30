const express = require('express');

const BillContribution = require('../models/bill_contribution.model');


/**
 * Load user and append to req.
 */
exports.load = (req, res, next, id) => {
  BillContribution.get(id)
    .then((user) => {
      req.user = user; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

exports.test = (req, res, next) => {


  res.status(200).json("{you: 'made', it: 'here2'}")
}
exports.getBillContributions = (req, res, next, id) => {
  console.log("bill contributions");

  BillContribution
  .aggregate(
    { $match: { "Bill Number": "H.R 10"}},
    { $group: {
        _id: "Legislator",
        "total": {
            "$sum": "Contribution Amount"
        } 
    }})
  // .unwind('tags')
  .exec(callback);

  // res.status(200).json("{you: 'made', it: 'here'}")
}


exports.cleanData = (req, res, next) => {
  console.log("clean bill contributions");

  const { limit = 300000, skip = 0 } = req.query;
  console.log({limit,skip});
  BillContribution.list({ limit, skip })
    .then(users => {
      // console.log("success" + users);
      for (user of users){
          // const user = req.user;
          // user.username = req.body.username;
          console.log("user");
          user['Contribution Amount'] = user['Contribution Amount'].replace("$", '').replace(",", "");

          user.save()
            .then(savedUser => {
              console.log('error saving user'); 
              console.log(savedUser)
            })
            .catch(e => {
              console.log("error on update");
              // next(e)
    });
      }
      // res.status(200).json(users)
    })
    .catch(e => {
      console.log("error" + e);
      next(e);
    });

  // res.status(200).json("{you: 'made', it: 'here'}")
}
// /**
//  * Get user
//  * @returns {User}
//  */
exports.get = (req, res) => {
  return res.json(req.user);
}

// /**
//  * Create new user
//  * @property {string} req.body.username - The username of user.
//  * @property {string} req.body.mobileNumber - The mobileNumber of user.
//  * @returns {User}
//  */
// exports.create = (req, res, next) => {
//   const user = new BillContribution({
//     username: req.body.username,
//     mobileNumber: req.body.mobileNumber
//   });

//   user.save()
//     .then(savedUser => res.json(savedUser))
//     .catch(e => next(e));
// }

// /**
//  * Update existing user
//  * @property {string} req.body.username - The username of user.
//  * @property {string} req.body.mobileNumber - The mobileNumber of user.
//  * @returns {User}
//  */
// exports.update = (req, res, next) => {
//   const user = req.user;
//   user.username = req.body.username;
//   user.mobileNumber = req.body.mobileNumber;

//   user.save()
//     .then(savedUser => res.json(savedUser))
//     .catch(e => {
//       console.log("error on update");
//       next(e)
//     });
// }

// /**
//  * Get user list.
//  * @property {number} req.query.skip - Number of users to be skipped.
//  * @property {number} req.query.limit - Limit number of users to be returned.
//  * @returns {User[]}
//  */
exports.list = (req, res, next) => {
  const { limit = 500, skip = 0 } = req.query;
  console.log({limit,skip});
  BillContribution.list({ limit, skip })
    .then(users => {
      console.log("success" + users);
      res.status(200).json(users)
    })
    .catch(e => {
      console.log("error" + e);
      next(e);
    });
}
  
// /**
//  * Delete user.
//  * @returns {User}
//  */
// exports.remove = (req, res, next) =>{
//   const user = req.user;
//   user.remove()
//     .then(deletedUser => res.json(deletedUser))
//     .catch(e => next(e));
// }


