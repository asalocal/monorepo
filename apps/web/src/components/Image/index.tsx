import { ImgHTMLAttributes } from 'react';
import { BYTCSS } from '@kaiju-ui/theme';
import { ImageContainer } from './styles';

type ImageProps = {
  css?: BYTCSS;
} & ImgHTMLAttributes<HTMLImageElement>;

function Image({ css, ...props }: ImageProps) {
  return <ImageContainer css={css} {...props} />;
}

export default Image;
