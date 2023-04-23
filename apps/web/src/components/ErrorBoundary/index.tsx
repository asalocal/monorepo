import React from 'react';
import { Container } from 'components/layout';
import Flex from 'components/Flex';
import Button from '@kaiju-ui/button';

class ErrorBoundary extends React.Component<
  {},
  { hasError: boolean; error: any }
> {
  constructor(props: any) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container
          fullWidth
          css={{ height: '100vh', backgroundColor: '$primary' }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            css={{ width: '100%', height: '100%', color: '$gray1' }}
          >
            <Flex
              alignItems="center"
              direction="column"
              css={{
                p: {
                  color: '$gray3',
                },
              }}
            >
              <h2>Oops, there is an error!</h2>
              {this.state.error && <p>{this.state.error.message}</p>}
              <Button
                type="button"
                variant="alternative"
                onClick={() => this.setState({ hasError: false })}
                css={{
                  marginTop: '1rem',
                  borderColor: '$gray1 !important',
                  color: '$gray1 !important',
                }}
              >
                Try again?
              </Button>
            </Flex>
          </Flex>
        </Container>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
