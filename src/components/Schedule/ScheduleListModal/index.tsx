import { TrashIcon } from '@modulz/radix-icons';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Modal from 'components/Modal';
import Text from 'components/Text';
import { ICity, useSchedule } from 'context/ScheduleContext';
import { trips } from 'mocks/trips';
import { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { ITrips } from 'types/Trips';
import CitiesList from './CitiesList';

interface IScheduleListModalProps {
  open: boolean;
  onCloseModal: () => void;
}

function ModalTitle({ name }: { name: string }) {
  return (
    <>
      <Flex
        alignItems="center"
        css={{
          svg: {
            marginRight: '10px',
          },
        }}
      >
        <FiMapPin />
        <Text>
          My Schedule /{' '}
          <Text as="span" css={{ color: '$primary' }}>
            {name}
          </Text>
        </Text>
      </Flex>
    </>
  );
}

function ScheduleListModal({ open, onCloseModal }: IScheduleListModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { schedule, removeCity, deleteSchedule } = useSchedule();

  const handleRemoveCity = (name: string) => {
    if (schedule.cities?.length === 1) {
      deleteSchedule();

      if (onCloseModal) {
        onCloseModal();
      }

      return;
    }

    removeCity(name);
  };

  const handleCleanSchedule = () => {
    if (onCloseModal) {
      onCloseModal();
    }

    deleteSchedule();
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      <Modal
        title={<ModalTitle name={schedule.name} />}
        isOpen={isOpen}
        position="right"
        onCloseModal={() => {
          setIsOpen(false);

          if (onCloseModal) {
            onCloseModal();
          }
        }}
      >
        <Flex
          direction="column"
          alignItems="spaceBetween"
          css={{ height: '100%' }}
        >
          <CitiesList handleRemoveCity={handleRemoveCity} />

          <Button
            variant="alternative"
            onClick={handleCleanSchedule}
            css={{ marginBottom: '10px' }}
          >
            Clean Schedule
          </Button>
        </Flex>
      </Modal>
    </>
  );
}

export default ScheduleListModal;
