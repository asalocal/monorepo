'use client';
import { useEffect, useState } from 'react';

import * as pt from '../translations/pt/pt.json';
import * as br from '../translations/pt/br.json';
import * as us from '../translations/en/us.json';
import * as gb from '../translations/en/gb.json';

interface ITranslations {
  [key: string]: Record<string, Record<string, string>>;
}

function useTranslations() {
  const [language, setLanguage] = useState<string>('en-US');

  const translate = (id: string) => {
    const [idiom, localization] = language.split('-');

    const translations: ITranslations = {
      en: {
        us,
        gb,
        default: us,
      },
      pt: {
        br,
        pt,
        default: br,
      },
    };

    const translationObject = translations[idiom];

    return translationObject[localization ? localization.toLowerCase() : idiom][
      id
    ];
  };

  useEffect(() => {
    if (navigator) {
      setLanguage(navigator.language);
    }
  }, []);

  return { language, translate };
}

export default useTranslations;
