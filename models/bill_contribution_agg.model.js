var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var BillContributionAggSchema = new Schema(
  {
    "bill_number": String ,
    "state": String ,
    "district": String ,
    "bill_number": String , 
    "position": String ,
    "vote": String ,
    "contributions": Number,
    created_by: { type: Schema.Types.ObjectId, ref: 'Rep' }

  }
, { collection: 'bill-contributions-agg' });;
/**
 * Statics
 */
BillContributionAggSchema.statics = {
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
module.exports = mongoose.model('BillContributionAgg', BillContributionAggSchema);
