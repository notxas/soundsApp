const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exoplanetModel = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  radius: { type: String, required: false },
  orbitalPeriod: { type: String, required: false },
  discoveryYear: { type: String, required: true },
  image: { type: String, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('exoplanet', exoplanetModel);
