import { useState, useEffect, useRef } from 'react';

const chars = '0101';

export const useMatrixText = (
  phrases: [string, string], 
  startDelay: number = 500, 
  scrambleSpeed: number = 30
) => {
  const [displayText, setDisplayText] = useState(phrases[0]);
  
  const scrambleIntervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const [, finalText] = phrases;

    const scramble = (text: string) => {
      let counter = 0;
      
      scrambleIntervalRef.current = window.setInterval(() => {
        const newText = text
          .split('')
          .map((_, index) => {
            if (index < counter) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        setDisplayText(newText);
        
        if (counter >= text.length) {
          if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
        }
        
        counter += 1 / 3;
      }, scrambleSpeed);
    };

    timeoutRef.current = window.setTimeout(() => {
      scramble(finalText);
    }, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
    };
  }, [phrases, scrambleSpeed, startDelay]);
  //normally i'd  leave it empty but since vscode is crying
  //about empty deps array,so i filled it since them deps have no effect

  return displayText;
};