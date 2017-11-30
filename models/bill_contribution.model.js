var mongoose = require('mongoose');


var Schema = mongoose.Schema;

/*
{
    "_id": {
        "$oid": "5a1d9fd3f57362df47ef12ff"
    },
    "Bill Number": "H.R. 10",
    "Bill Name": "Financial CHOICE Act of 2017",
    "Legislator": "A. Donald McEachin",
    "Party": "Democrat",
    "Represents": "VA House district 4",
    "Vote": "No",
    "Contribution Type": "Non-PAC",
    "Presidential": "",
    "Contribution Amount": "$50",
    "Contribution Date": "8/31/16",
    "Contributor": "Tillett, Stephen",
    "Contributor Occupation": "MINISTRY",
    "Contributor Employer": "United Methodist Church",
    "Contributor Interest Group": "Churches, clergy & religious organizations",
    "Contributor Interest Group Code": "X7000",
    "Interest Group Position": "Oppose",
    "Contributor City": "Ellicott City",
    "Contributor State": "MD",
    "Contributor Zip": 21043
}
*/
var BillContributionSchema = new Schema(
  {
    "Bill Number": String ,
    "Bill Name": String,
    "Legislator": String,
    "Party": String,
    "Represents": String,
    "Vote": String,
    "Contribution Type": String,
    "Presidential": String,
    "Contribution Amount": String,
    "Contribution Date": String,
    "Contributor": String,
    "Contributor Occupation": String,
    "Contributor Employer": String,
    "Contributor Interest Group": String,
    "Contributor Interest Group Code": String,
    "Interest Group Position": String,
    "Contributor City": String,
    "Contributor State": String,
    "Contributor Zip": Number
  }
, { collection: 'bill-contributions' });;
/**
 * Statics
 */
BillContributionSchema.statics = {
  /**
   * Get post
   * @param {ObjectId} id - The objectId of post.
   * @returns {Promise<Post, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((post) => {
        if (post) {
          return post;
        }
        const err = new APIError('No such post exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<Post[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};



/**
 * @typedef User
 */
//Export model
module.exports = mongoose.model('BillContribution', BillContributionSchema);
