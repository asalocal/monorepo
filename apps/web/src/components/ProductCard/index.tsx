'use client';
import Flex from 'components/Flex';
import { ProductCardContainer, ProductCardImage } from './styles';

import Label from '@kaiju-ui/label';
import Image from 'components/Image';
import Button from '@kaiju-ui/button';

interface IProductCardProps {
  image: string;
  title: string;
  description: string;
  user: {
    avatar: string;
    name: string;
    type: any;
  };
}

function ProductCard({ image, title, description, user }: IProductCardProps) {
  return (
    <ProductCardContainer>
      <Label
        css={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
        }}
      >
        Teste
      </Label>
      <ProductCardImage src={image} />
      <h2>{title}</h2>
      <Flex
        css={{
          margin: '10px 0',
        }}
        direction="row"
      >
        <Flex
          css={{
            gap: '5px',
            img: {
              width: '20px',
              height: '20px',
              objectFit: 'cover',
              borderRadius: '20px',
            },
          }}
          direction="row"
          alignItems="center"
        >
          <Image src={user.avatar} />
          <span>{user.name}</span>
        </Flex>
      </Flex>
      <p>{description}</p>
      <Flex justifyContent="end">
        <Button
          css={{
            justifySelf: 'end',
            width: 'fit-content',
            fontWeight: '500',
          }}
        >
          Learn More
        </Button>
      </Flex>
    </ProductCardContainer>
  );
}

export default ProductCard;
