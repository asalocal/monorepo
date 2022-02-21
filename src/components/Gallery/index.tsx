import Flex from 'components/Flex';
import Image from 'components/Image';
import { useState, useCallback } from 'react';
import { BYTCSS } from 'styles/Theme.provider';
import generateHash from 'utils/generateHash';
import { GalleryImage } from './styles';

interface GalleryProps {
  thumbs: string[];
  orientation?: 'horizontal' | 'vertical';
  thumbCSS?: BYTCSS;
  slidesCSS?: BYTCSS;
}

function Gallery({
  thumbs,
  orientation = 'horizontal',
  thumbCSS,
  slidesCSS,
}: GalleryProps) {
  const [thumbActive, setThumbActive] = useState(0);

  const handleThumbClick = useCallback((index: number) => {
    setThumbActive(index);
  }, []);

  return (
    <>
      <Flex direction={orientation === 'vertical' ? 'row' : 'column'}>
        <Flex css={{ maxWidth: '250px', width: '100%' }}>
          <Image
            src={thumbs[thumbActive]}
            alt=""
            css={{
              borderRadius: '10px',
              height: '200px',
              width: '200px',
              objectFit: 'cover',
              marginRight: '10px',
              ...thumbCSS,
            }}
          />
        </Flex>

        <Flex
          direction={orientation === 'vertical' ? 'column' : 'row'}
          justifyContent="spaceBetween"
          css={{
            marginLeft: orientation === 'vertical' ? '5px' : '0',
            marginTop: orientation === 'vertical' ? '0' : '10px',
          }}
        >
          {thumbs.map((thumb, index) => {
            return (
              <GalleryImage
                key={`${generateHash()}-${index}`}
                src={thumb}
                onClick={() => handleThumbClick(index)}
                alt=""
                order={orientation}
                isActive={index === thumbActive}
                css={slidesCSS}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}

export default Gallery;
