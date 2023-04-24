interface InputMaskCreation {
  type: 'cellphone' | 'date';
  value: string;
}

function cellphoneMask(value: string) {
  const removedCharacters = value.replace(/\D/g, '');

  const phoneWithDDD = removedCharacters.replace(
    /^(\d{2})(\d{  5})/g,
    '($1) $2'
  );
  const valueFormatted = phoneWithDDD.replace(/(\d)(\d{4})$/, '$1-$2');

  return valueFormatted;
}

function dateMask(value: string) {
  const dateFormatted = value.replace(/\D/g, '');

  const dateMasked = dateFormatted
    .replace(/^(\d{2})(\d)/g, '$1/$2')
    .replace(/^(\d{2}\/\d{2})(\d{1,4})/g, '$1/$2');

  return dateMasked;
}

function maskCreation({ type, value }: InputMaskCreation) {
  const maskFunctions = {
    cellphone: cellphoneMask,
    date: dateMask,
  };

  return maskFunctions[type as 'cellphone' | 'date'](value);
}

export default maskCreation;
