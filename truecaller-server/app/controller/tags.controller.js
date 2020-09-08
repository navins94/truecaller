const axios = require('axios');
const createError = require('http-errors');

const BASE_URL = `${process.env.HOST}/${process.env.SITE_ID}/`;

exports.findAllTags = async (req, res, next) => {
  try {
    const result = await axios.get(`${BASE_URL}tags`, {
      params: {
        number: 10,
        order: 'DESC',
        order_by: 'count',
        fields: 'name,slug,ID',
      },
    });
    res.json(result.data);
  } catch (error) {
    next(createError(500, error));
  }
};
