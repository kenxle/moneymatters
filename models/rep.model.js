var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var RepSchema = new Schema(
  {
    id: {type: String, required: true},
    FECId: {type: String, required: true},
    CRPId: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    date_of_birth: {type: String, required: true},
    party: {type: String, required: true},
    district: {type: String, required: true},
    state: {type: String, required: true},
    total_receipts: Number, 
    total_from_individuals: Number, 
    total_from_pacs: Number,
    total_contributions: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);
/**
 * Statics
 */
RepSchema.statics = {
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
/*
{  
   "id":"A000374",
   "title":"Representative",
   "short_title":"Rep.",
   "api_uri":"https://api.propublica.org/congress/v1/members/A000374.json",
   "first_name":"Ralph",
   "middle_name":null,
   "last_name":"Abraham",
   "date_of_birth":"1954-09-16",
   "party":"R",
   "leadership_role":null,
   "twitter_account":"RepAbraham",
   "facebook_account":"CongressmanRalphAbraham",
   "youtube_account":null,
   "govtrack_id":"412630",
   "cspan_id":"76236",
   "votesmart_id":"155414",
   "icpsr_id":"21522",
   "crp_id":"N00036633",
   "google_entity_id":"/m/012dwd7_",
   "fec_candidate_id":"H4LA05221",
   "url":"https://abraham.house.gov/",
   "rss_url":"https://abraham.house.gov/rss.xml",
   "contact_form":null,
   "in_office":true,
   "dw_nominate":0.493,
   "ideal_point":null,
   "seniority":"4",
   "next_election":"2018",
   "total_votes":639,
   "missed_votes":2,
   "total_present":0,
   "ocd_id":"ocd-division/country:us/state:la/cd:5",
   "office":"417 Cannon House Office Building",
   "phone":"202-225-8490",
   "fax":"202-225-5639",
   "state":"LA",
   "district":"5",
   "at_large":false,
   "geoid":"2205",
   "missed_votes_pct":0.31,
   "votes_with_party_pct":96.39
}

{  
   "id":"H4LA05221",
   "name":"ABRAHAM, RALPH LEE DR. JR.",
   "party":"REP",
   "district":"/races/LA/house/05.json",
   "fec_uri":"http://docquery.fec.gov/cgi-bin/fecimg/?H4LA05221",
   "committee":"/committees/C00563940.json",
   "state":"/races/LA.json",
   "mailing_address":"P.O. BOX 271",
   "mailing_city":"ARCHIBALD",
   "mailing_state":"LA",
   "mailing_zip":"71218",
   "status":"I",
   "total_receipts":607693.18,
   "total_from_individuals":281400,
   "total_from_pacs":306995.86,
   "total_contributions":588395.86,
   "candidate_loans":0,
   "total_disbursements":438812.89,
   "begin_cash":39951.13,
   "end_cash":208161.38,
   "total_refunds":5200,
   "debts_owed":75000,
   "date_coverage_from":"2015-01-01",
   "date_coverage_to":"2016-12-31",
   "independent_expenditures":0,
   "coordinated_expenditures":0,
   "other_cycles":[  
      2018,
      2014
   ]
}
*/


/**
 * @typedef User
 */
//Export model
module.exports = mongoose.model('Rep', RepSchema);
