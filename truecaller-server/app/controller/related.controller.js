const axios = require('axios');
const createError = require('http-errors');

const BASE_URL = `${process.env.HOST}/${process.env.SITE_ID}/`;

exports.findRelated = async (req, res, next) => {
  const id = req.query.post_id;
  try {
    axios
      .post(`${BASE_URL}posts/${id}/related`, {
        size: 3,
      })
      .then(({ data: { hits } }) => {
        axios
          .all(
            hits.map((hit) =>
              axios.get(`${BASE_URL}posts/${hit.fields.post_id}`, {
                params: {
                  fields: 'ID,title,date,featured_image,slug',
                },
              })
            )
          )
          .then(
            axios.spread((...response) =>
              res.json(
                response
                  .map((resp) => resp.data)
                  .sort((post1, post2) => post2.date > post1.date)
              )
            )
          );
      });
  } catch (error) {
    next(createError(500, error));
  }
};
