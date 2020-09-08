import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';
import './Tags.css';

const Tags = () => {
  const color = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    return `#${n.slice(0, 6)}`;
  };

  const [catData, setCatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await Api.get('tags');
        setCatData(result.data.tags);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <h5 className="cat-header">Tags</h5>
          <ul>
            {catData.map((item) => (
              <li key={item.ID}>
                <Link
                  to={`/tag/${item.slug}`}
                  style={{ borderLeftColor: color() }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tags;
