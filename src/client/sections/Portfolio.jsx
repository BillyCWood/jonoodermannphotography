import React from 'react'
import { Element } from 'react-scroll';

import photos from './photos';

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const Portfolio = () => {
  return (
    <section className='relative mt-24'>
      <Element name='portfolio'>
        <div className='pt-10 text-center w-full min-h-screen flex flex-col'>
          <div className='section-title'>Portfolio</div>
          <div className='mx-auto w-4/5'>
            <RowsPhotoAlbum 
              photos={photos}
              targetRowHeight={150}
              rowConstraints={{
                maxPhotos: 4,
                singleRowMaxHeight: 250,
              }}
            />
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Portfolio