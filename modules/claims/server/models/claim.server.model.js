'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Claim Schema
 */
var ClaimSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Claim name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Claim', ClaimSchema);
