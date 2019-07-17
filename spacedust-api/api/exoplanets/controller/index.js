const queries = require('./../query');

const getExoplanets = async (req, res) => {
  try {
    const owner = req.user.sub;
    const exoplanets = await queries.getExoplanets(owner);
    res.json({ result: exoplanets });
  } catch (err) {
    return err;
  }
};

const getExoplanet = async (req, res) => {
  try {
    const owner = req.user.sub;
    const id = req.params.id;
    const exoplanet = await queries.getExoplanet(owner, id);
    res.json({ result: exoplanet });
  } catch (err) {
    return err;
  }
};

const postExoplanet = async (req, res) => {
  try {
    const owner = req.user.sub;
    const exoplanet = req.body.data;
    const newExoplanet = await queries.createExoplanet(owner, exoplanet);
    res.json({ message: 'Exoplanet created', result: newExoplanet });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteExoplanet = async (req, res) => {
  try {
    const owner = req.user.sub;
    const id = req.params.id;
    await queries.deleteExoplanet(owner, id);
    res.json({ message: 'Exoplanet deleted' });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getExoplanets,
  getExoplanet,
  postExoplanet,
  deleteExoplanet
};
