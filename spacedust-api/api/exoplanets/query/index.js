const Exoplanet = require('./../model');

const getExoplanets = async owner => {
  try {
    return await Exoplanet.find({ owner });
  } catch (err) {
    return err;
  }
};

const getExoplanet = async (owner, id) => {
  try {
    return await Exoplanet.findOne({ owner, _id: id });
  } catch (err) {
    return err;
  }
};

const createExoplanet = async (owner, exoplanetData) => {
  try {
    const newExoplanet = new Exoplanet(exoplanetData);
    newExoplanet.owner = owner;
    return await newExoplanet.save();
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteExoplanet = async (owner, id) => {
  try {
    return await Exoplanet.findOneAndRemove({ owner, _id: id });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getExoplanets,
  getExoplanet,
  createExoplanet,
  deleteExoplanet
};
