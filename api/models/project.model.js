const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema ({
  name:{
    type: String,
    required: 'Project name is required',
    minlength: [3, 'Project name needs at least 3 chars']
  },
  authors: [{
    type: String,
    minlength: [2, 'Project author needs at least 2 chars']
  }],
  tags: [String],
  githubUrl: {
    type: String,
    validator: function(url) {
      try {
        new URL(url);
        return true
      } catch(error) {
        return false;
      }

    },
    message: 'Not a valid github url' 
  }

}, { timestamps: true })