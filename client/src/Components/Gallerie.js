import '../Style/Gallerie.scss';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const Gallerie = ({ pictures }) => {
  return (
    <>
      <ScrollContainer
        hideScrollbars={false}
        className='gallerie'
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rebeccapurple green',
        }}
      >
        {pictures.map((item, idx) => (
          <img key={idx} src={item.img ? item.img : item} alt='' />
        ))}
      </ScrollContainer>
    </>
  );
};

export default Gallerie;
