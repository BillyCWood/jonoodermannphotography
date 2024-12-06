import { useState } from 'react'
import { Element } from 'react-scroll';

import photos from './photos';
import { StyledImage } from '../components';

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Portfolio = () => {
  const [index, setIndex] = useState(-1);
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
              componentsProps={ { image: { loading: 'lazy' } } }
              render={{
                image: (props) => <StyledImage { ...props } />
              }}
              breakpoints={[300, 600, 1200]}
              onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />

          </div>
        </div>
      </Element>
    </section>
  )
}

export default Portfolio