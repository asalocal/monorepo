import Flex from 'components/Flex';
import Image from 'components/Image';
import ProfileCard from 'components/ProfileCard';
import Text from 'components/Text';
import { IUserTripData } from 'types/Trips';

interface ITripUserProps {
  user: IUserTripData;
}

function TripUser({ user }: ITripUserProps) {
  return (
    <>
      <ProfileCard
        label={
          <>
            <img src={user.avatar} alt={user.name} />
            <Text
              as="span"
              css={{
                color: '$gray11',
                opacity: 0.5,
              }}
            >
              {user.name}
            </Text>
          </>
        }
      >
        <Flex direction="column" css={{ padding: '20px' }}>
          <Flex alignItems="center">
            <Image
              src={user.avatar}
              alt={user.name}
              css={{
                height: '80px',
                width: '80px',
                objectFit: 'cover',
                borderRadius: '60px',
              }}
            />
            <Flex direction="column" css={{ marginLeft: '10px' }}>
              <Text as="h3" css={{ color: '#333333' }}>
                {user.name}
              </Text>
              {user.rank && (
                <Text as="span" css={{ color: '#C4C4C4', fontSize: '14px' }}>
                  {user.rank}
                </Text>
              )}
            </Flex>
          </Flex>

          <Flex css={{ marginTop: '20px' }}>
            {user.bio ? (
              <Text as="p" css={{ color: '#C4C4C4' }}>
                {user.bio}
              </Text>
            ) : (
              <Text as="span" css={{ color: '#C4C4C4' }}>
                User has no description
              </Text>
            )}
          </Flex>

          <Flex justifyContent="spaceBetween" css={{ marginTop: '20px' }}>
            <Text as="span" css={{ color: '#333333' }}>
              {user.following} following
            </Text>
            <Text as="span" css={{ color: '#333333' }}>
              {user.followers} followers
            </Text>
            <Text as="span" css={{ color: '#333333' }}>
              {user.trips} trips
            </Text>
          </Flex>
        </Flex>
      </ProfileCard>
    </>
  );
}

export default TripUser;
