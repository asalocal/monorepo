import Bold from 'components/Bold';
import Button from '@kaiju-ui/button';
import Checkbox from 'components/Checkbox';
import Flex from 'components/Flex';
import FormComponent from 'components/Form';
import Input from 'components/Input';
import { Col, Container, Row } from 'components/layout';
import Logo from 'components/Logo';
import maskCreation from 'utils/inputMaskCreation';

export default function SignUp() {
  return (
    <Container
      fullWidth
      fullHeight
      css={{
        backgroundColor: '$text',
      }}
    >
      <Row
        css={{
          height: '100%',
        }}
      >
        <Col
          lg="6"
          md="6"
          sm="12"
          css={{
            height: '100%',
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Logo scale={2} />

          <FormComponent
            onSubmit={(ev) => console.log(ev)}
            css={{
              maxWidth: '340px',
            }}
          >
            <Flex
              direction="column"
              css={{
                marginTop: '20px',
                gap: '10px',
              }}
            >
              <Input theme="light" label="Full Name" name="fullname" />
              <Input
                theme="light"
                type="email"
                label="Email"
                name="email"
                validationPattern={/.+@.+\.[A-Za-z]+$/}
                validationMessage="Teste"
              />
              <Input
                theme="light"
                type="tel"
                label="Phone"
                name="phone"
                maskValue={(value) => {
                  const valueFormatted = maskCreation({
                    type: 'cellphone',
                    value,
                  });

                  return valueFormatted;
                }}
              />
              <Input
                theme="light"
                type="password"
                label="Password"
                name="password"
              />
              <Checkbox
                css={{
                  color: 'white',
                }}
                name="termsOfUse"
              >
                I agree with the <Bold>terms of use</Bold>
              </Checkbox>
              <Button>Sign up</Button>
            </Flex>
          </FormComponent>
        </Col>
        <Flex
          css={{
            height: '100%',
            flex: 1,
            backgroundImage: 'url(/assets/signup-background.png)',
            backgroundSize: 'cover',
          }}
          justifyContent="center"
          alignItems="center"
        ></Flex>
      </Row>
    </Container>
  );
}
