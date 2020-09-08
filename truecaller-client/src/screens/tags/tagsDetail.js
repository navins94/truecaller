import React from 'react';
import { useParams } from 'react-router-dom';
import '../home/Home.css';
import Card from '../../component/postCard/Card';

const tagsDetail = () => {
  const { slug = '' } = useParams();
  return (
    <div className="col col-sm-8">
      <Card tag={slug} page={1} />
    </div>
  );
};

export default tagsDetail;
