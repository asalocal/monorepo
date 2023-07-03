import api from 'api/api';
import Flex from 'components/Flex';
import ProductCard from 'components/ProductCard';
import { Container } from 'components/layout';

async function ItineraryList() {
  const itinerariesRequest = async () => {
    const data = await api.get('/itineraries');

    return data.data;
  };

  const itinerariesList = await itinerariesRequest();

  return (
    <Container
      css={{
        margin: '50px auto',
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        css={{
          gap: '50px',
        }}
      >
        {itinerariesList.map((it: any) => (
          <>
            <ProductCard
              image={it.pictures[0]}
              title={it.title}
              description={it.description}
              user={{
                avatar:
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
                name: 'Testing',
                type: 'Test',
              }}
            />
          </>
        ))}
      </Flex>
    </Container>
  );
}

export default ItineraryList;
