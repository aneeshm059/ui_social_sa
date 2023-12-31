import React from 'react';
import PropTypes from 'prop-types';
import { GalleryCard } from '../style';
import Heading from '../../../components/heading/heading';

function StudentClassGalleryCard({ item }) {
  const { name, img, category } = item;
  return (
    <GalleryCard style={{ marginBottom: '25px' }}>
      <figure>
        <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
        <figcaption>
          <div className="gallery-single-content">
            <Heading className="gallery-single-title" as="h4">
              {name}
            </Heading>
            <p>{category}</p>
          </div>
        </figcaption>
      </figure>
    </GalleryCard>
  );
}

StudentClassGalleryCard.propTypes = {
  item: PropTypes.object,
};

export default StudentClassGalleryCard;
