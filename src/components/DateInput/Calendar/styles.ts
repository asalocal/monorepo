import { styled } from 'styles/Theme.provider';

export const CalendarContainer = styled('div', {
  position: 'absolute',
  backgroundColor: 'white',
  minWidth: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '5px',
  width: '300px',
  pointerEvents: 'auto',
  boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.2)',

  '&::before': {
    content: '',
    borderStyle: 'solid',
    borderColor: '#ffff transparent',
    borderWidth: '6px 6px 0 6px',
    bottom: '20px',
    top: '0',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%) translateY(-100%) rotateZ(180deg)',
  },
});
