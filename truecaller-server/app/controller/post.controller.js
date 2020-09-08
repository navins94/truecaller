const axios = require('axios');
const createError = require('http-errors');

const BASE_URL = `${process.env.HOST}/${process.env.SITE_ID}/`;

exports.findAllPost = async (req, res, next) => {
  const queryParams = req.query || {};
  const params = {
    number: 25,
    fields:
      'ID,title,date,excerpt,featured_image,title,slug,author,categories',
    ...queryParams,
  };

  try {
    const result = await axios.get(BASE_URL + 'posts', {
      params,
    });
    res.json(result.data);
  } catch (error) {
    console.log(error);
    next(createError(404));
  }
};

exports.findOne = async (req, res, next) => {
  const slug = req.query.slug;
  try {
    const result = await axios.get(`${BASE_URL}posts/slug:${slug}`, {
      params: {
        fields:
          'ID,title,date,content,featured_image,title,author,categories',
      },
    });
    res.json(result.data);
  } catch (error) {
    if (error.response.status) {
      next(createError(404, 'Post Not Found'));
    } else {
      next(createError(500, error));
    }
  }
};
