import Button from 'components/Button';
import Flex from 'components/Flex';
import Text from 'components/Text';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';
import Gallery from 'components/Gallery';
import TripUser from './TripUser';
import { useSchedule } from 'context/ScheduleContext';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form } from '@unform/web';
import { useToast } from 'context/ToastContext';
import CreateModalSchedule from 'components/Schedule/CreateModalSchedule';
import { useAuth } from 'context/AuthContext';
import useOpenModal from 'hooks/useOpenModal';

interface CityProps {
  trip: ITrips;
  view?: 'grid' | 'list';
  goingTo: string;
}

function City({ trip, goingTo, view = 'list' }: CityProps) {
  const [open, setOpen] = useOpenModal();
  const { user } = useAuth();
  const { addToast } = useToast();
  const {
    addCity,
    schedule: { id },
  } = useSchedule();
  const { query } = useRouter();

  const handleOpenModal = useCallback(() => {
    if (!id) {
      if (!user.id) {
        addToast({
          type: 'error',
          title: 'You need to be signed in',
          message: 'Please sign in to create a schedule',
        });

        window.location.href = `/signin?url=/explore${window.location.search}`;
        return;
      }

      setOpen(true);

      return;
    } else {
      addCity({
        city: {
          name: trip.name,
          location: trip.subtitle,
        },
      });
    }
  }, [id, user.id]);

  return (
    <>
      <Flex
        key={`${Date.now()}-${trip.id}`}
        direction={view === 'list' ? 'row' : 'column'}
        css={{
          width: `${view === 'list' ? '100%' : '290px'}`,
          padding: '15px',
        }}
      >
        <Gallery
          thumbCSS={{
            width: view === 'list' ? '200px !important' : '260px !important',
            height: view === 'list' ? '200px !important' : '260px !important',
          }}
          slidesCSS={{
            width: view === 'list' ? '35px' : '40px !important',
            height: view === 'list' ? '35px' : '40px !important',
          }}
          orientation={view === 'list' ? 'vertical' : 'horizontal'}
          thumbs={trip.thumbs}
        />
        <Flex
          direction="column"
          css={{
            margin: view === 'grid' ? '10px 0 ' : '0 15px',
          }}
        >
          <Text as="h2">{trip.name}</Text>
          <Flex direction={view === 'grid' ? 'column' : 'row'}>
            <Text
              as="span"
              css={{
                color: '$gray11',
                display: 'flex',
                alignItems: 'center',
                opacity: 0.5,

                svg: {
                  marginRight: '10px',
                },
              }}
            >
              <FiMapPin /> {trip.subtitle}
            </Text>
            <Flex
              alignItems="center"
              css={{
                marginLeft: view === 'grid' ? '0' : '10px',
                img: {
                  height: '20px',
                  width: '20px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  margin: 0,
                  marginRight: '10px',
                },
              }}
            >
              <TripUser user={trip.user} />
            </Flex>
          </Flex>

          <Text
            as="p"
            css={{
              marginTop: '10px',
              width: '100%',
              height: '80px',
              letterSpacing: '-0.5px',
              overflow: 'hidden',
              whiteSpace: 'pre-wrap',
              textOverflow: ' [...]',
              color: '$gray9',
            }}
          >
            {trip.description}
          </Text>

          <Flex
            alignItems="end"
            justifyContent="end"
            css={{ marginTop: '10px' }}
          >
            <Button
              variant="alternative"
              css={{
                marginRight: '20px',
                borderColor: '$primary !important',
                color: '$primary !important',

                width: '200px',
              }}
            >
              See more details
            </Button>
            <Button onClick={handleOpenModal} css={{ width: '200px' }}>
              Add to the schedule
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <CreateModalSchedule
        open={open}
        closeModal={() => setOpen(false)}
        goingTo={goingTo}
        dateOfReturn={String(query.dateOfReturn)}
        departure={String(query.departure)}
        trip={trip}
      />
    </>
  );
}

export default City;
