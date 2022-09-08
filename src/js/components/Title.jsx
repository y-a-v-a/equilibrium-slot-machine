import React from 'react';

const Title = () => {
  return (
    <>
      <h1 itemProp="artist" itemScope itemType="https://schema.org/Person">
        <span itemProp="name">ax710.org and y-a-v-a.org</span>
      </h1>
      <h3 className="title" itemProp="name" lang="en">
        Three Ball Total Equilibrium Slot Machine{' '}
        <i itemProp="dateCreated" dateTime="2020">
          2020
        </i>
      </h3>
    </>
  );
};

export default React.memo(Title);
