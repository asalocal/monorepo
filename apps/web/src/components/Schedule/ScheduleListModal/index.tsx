import { TrashIcon } from '@modulz/radix-icons';
import Button from '@kaiju-ui/button';
import Flex from 'components/Flex';
import Modal from 'components/Modal';
import Text from 'components/Text';
import { ICity, useSchedule } from 'context/ScheduleContext';
import useOpenModal from 'hooks/useOpenModal';
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
  const [isOpen, setIsOpen] = useOpenModal();
  const [deleteModal, setDeleteModal] = useOpenModal();

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
    setDeleteModal(true);
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

      <Modal
        title="Delete schedule"
        onCloseModal={() => setDeleteModal(false)}
        isOpen={deleteModal}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          css={{ width: '100%', height: '100%' }}
        >
          <Text>Are you sure you want to delete this schedule?</Text>
          <Flex
            css={{
              marginTop: '20px',

              button: {
                width: '100%',
              },

              'button + button': {
                marginLeft: '10px',
              },
            }}
          >
            <Button onClick={() => setDeleteModal(false)} variant="alternative">
              <Text>Cancel</Text>
            </Button>
            <Button onClick={() => deleteSchedule()}>
              <Text>Delete</Text>
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
}

export default ScheduleListModal;
