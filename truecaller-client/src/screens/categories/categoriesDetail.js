import React from 'react';
import { useParams } from 'react-router-dom';
import '../home/Home.css';
import Card from '../../component/postCard/Card';

const categoriesDetail = () => {
  const { slug = '' } = useParams();
  return (
    <div className="col col-sm-8">
      <Card category={slug} page={1} />
    </div>
  );
};

export default categoriesDetail;
