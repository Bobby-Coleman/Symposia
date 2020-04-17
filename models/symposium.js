const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
  }, {
    timestamps: true
  });


const descriptionSchema = new Schema({
    description: String,
  }, {
    timestamps: true
  });

// const postSchema = new Schema({
//     post: {
//         type: String,
//         required: true,
//     },
//     comment: [commentSchema]
// });

const symposiumSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    descriptions: [descriptionSchema],
    comments: [commentSchema]
}, {
    timestamps: true
});
  

module.exports = mongoose.model('Symposium', symposiumSchema)