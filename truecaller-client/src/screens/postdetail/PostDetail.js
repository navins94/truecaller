/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostDetail.css';
import TimeAgo from 'react-timeago';
import Api from '../../services/Api';
import RelatedPost from '../../component/relatedPost/RelatedPost';

const PostDetail = () => {
  const categories = (cat) => {
    return Object.keys(cat).map((key) => {
      return (
        <Link to={`categories/${cat[key].slug}`} className="clink">
          {cat[key].name}
        </Link>
      );
    });
  };

  const { slug } = useParams();
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await Api.get('post/detail', {
          params: {
            slug,
          },
        });
        setPostData(result.data);
      } catch (error) {
        setIsError(error.response.data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [slug]);

  return (
    <div className="col col-sm-8">
      {isError && <div>{isError.error}</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="post-wrapper">
          <div className="post-detail">
            <img
              src={postData.featured_image}
              alt={postData.title}
              className="post-img"
            />
            {postData.categories && (
              <div className="card-meta">
                {categories(postData.categories)}
              </div>
            )}
            <h1 className="card-title">{postData.title}</h1>
            <div className="card-meta d-flex">
              {postData.author && (
                <span className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.725 2.146c-1.016.756-1.289 1.953-1.239 2.59.064.779.222 1.793.222 1.793s-.313.17-.313.854c.109 1.717.683.976.801 1.729.284 1.814.933 1.491.933 2.481 0 1.649-.68 2.42-2.803 3.334C3.196 15.845 1 17 1 19v1h18v-1c0-2-2.197-3.155-4.328-4.072-2.123-.914-2.801-1.684-2.801-3.334 0-.99.647-.667.932-2.481.119-.753.692-.012.803-1.729 0-.684-.314-.854-.314-.854s.158-1.014.221-1.793c.065-.817-.398-2.561-2.3-3.096-.333-.34-.558-.881.466-1.424-2.24-.105-2.761 1.067-3.954 1.929z" />
                  </svg>
                  <span style={{ marginLeft: '5px' }}>
                    {`${postData.author.first_name} ${postData.author.last_name}`}
                  </span>
                </span>
              )}
              {postData.date && (
                <span className="d-flex align-items-center ml-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm-.001 17.2a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 1 1 0 15.2zM11 9.33V4H9v6.245l-3.546 2.048 1 1.732 4.115-2.377A.955.955 0 0 0 11 10.9v-.168l4.24-4.166a6.584 6.584 0 0 0-.647-.766L11 9.33z" />
                  </svg>
                  <span style={{ marginLeft: '5px' }}>
                    <TimeAgo date={postData.date} />
                  </span>
                </span>
              )}
            </div>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: postData.content,
              }}
            />
          </div>
          {postData.ID && <RelatedPost id={postData.ID} />}
        </div>
      )}
    </div>
  );
};

export default PostDetail;
