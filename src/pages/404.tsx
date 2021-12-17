import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { useRouter } from 'next/router';

function Custom404() {
  const { back } = useRouter();
  return (
    <>
      <Flex
        justifyContent="center"
        direction="column"
        alignItems="center"
        css={{ height: '100vh', backgroundColor: '$primary' }}
      >
        <Text as="h1" css={{ color: '$gray1' }}>
          We're very sorry, something has gone really wrong
        </Text>
        <Text css={{ color: '$gray4', marginTop: '15px' }} as="p">
          Go back to the homepage and please, try again
        </Text>

        <Button
          variant="alternative"
          css={{ maxWidth: '200px', marginTop: '15px' }}
          onClick={() => back()}
        >
          Return to Homepage
        </Button>
      </Flex>
    </>
  );
}

export default Custom404;
