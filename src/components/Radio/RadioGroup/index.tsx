import Radio, { RadioProps } from '..';
import { RadioGroupProvider } from '../context/RadioContext';

interface IRadioGroupProps {
  children: React.ReactElement<RadioProps>[];
}

const RadioGroup = ({ children }: IRadioGroupProps) => {
  return (
    <>
      <RadioGroupProvider>
        {children &&
          children.map((item) => (
            <Radio
              name={item.props.name}
              value={item.props.value}
              label={item.props.label}
            />
          ))}
      </RadioGroupProvider>
    </>
  );
};

export default RadioGroup;
