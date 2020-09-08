import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../services/Api';
import './RelatedPost.css';

const RelatedPost = (props) => {
  const [relatedData, setrelatedData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await Api.get(`related?post_id=${props.id}`);
        setrelatedData(result.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      <h2>Related Posts</h2>
      {relatedData.map((item) => (
        <Link to={item.slug} key={item.ID}>
          <div
            className="row align-items-center related-post"
            key={item.ID}
          >
            <div className="col col-sm-3">
              <img
                src={item.featured_image}
                alt={item.title}
                className="post-img"
              />
            </div>
            <div className="col col-sm-9">
              <h2 className="title">{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

RelatedPost.defaultProps = {
  id: false,
};
RelatedPost.propTypes = {
  id: PropTypes.number,
};
export default RelatedPost;
