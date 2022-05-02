import { Form } from '@unform/web';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Input from 'components/Input';
import Modal, { ModalProps } from 'components/Modal';
import Text from 'components/Text';
import { useSchedule } from 'context/ScheduleContext';
import { useToast } from 'context/ToastContext';
import { useCallback, useEffect, useState } from 'react';
import { ITrips } from 'types/Trips';

type CreateModalScheduleProps = {
  goingTo: string;
  trip: ITrips;
  departure: string;
  dateOfReturn: string;
  closeModal: () => void;
  open: boolean;
};
function CreateModalSchedule({
  goingTo,
  departure,
  open,
  closeModal,
  dateOfReturn,
  trip,
}: CreateModalScheduleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { createSchedule } = useSchedule();
  const { addToast } = useToast();

  const handleCreateSchedule = useCallback(
    (data) => {
      createSchedule({
        city: {
          name: trip.name,
          id: trip.id,
          location: trip.subtitle,
        },
        name: data.scheduleName,
        departure: String(departure),
        dateOfReturn: String(dateOfReturn),
      });

      addToast({
        title: 'Trip created with success',
        message: 'Now you can add more cities to your trip',
        type: 'success',
      });

      setIsOpen(false);

      if (closeModal) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <>
      <Modal
        title="Create Schedule"
        onCloseModal={() => {
          setIsOpen(false);

          if (closeModal) {
            closeModal();
          }
        }}
        isOpen={isOpen}
      >
        <Flex direction="column" css={{ padding: '10px' }}>
          <Text as="h4" css={{ marginBottom: '10px' }}>
            You're going to{' '}
            <Text as="strong" css={{ color: '$gray11' }}>
              {goingTo}
            </Text>
          </Text>
          <Text css={{ color: '$gray10' }}>
            Now your need to define the name of your trip
          </Text>
          <Form onSubmit={handleCreateSchedule}>
            <Input
              type="text"
              label="Name of the Schedule"
              name="scheduleName"
              css={{ margin: '15px 0' }}
            />
            <Flex>
              <Button
                type="button"
                onClick={(ev) => {
                  ev.preventDefault();

                  setIsOpen(false);

                  if (closeModal) {
                    closeModal();
                  }
                }}
                variant="alternative"
                css={{ marginRight: '10px' }}
              >
                <Text as="span">Cancel</Text>
              </Button>
              <Button type="submit">
                <Text>Create</Text>
              </Button>
            </Flex>
          </Form>
        </Flex>
      </Modal>
    </>
  );
}

export default CreateModalSchedule;
