import { Typography } from '@material-ui/core';

export default function nl2br(text: string, className?: string): JSX.Element[] {
  const textSplitted = text.split('\n');

  const newText = textSplitted.map((txt, i) => {
    if (txt !== '') {
      return (
        <Typography className={className} key={i.toString()}>
          {txt}
        </Typography>
      );
    }

    return <br key={i.toString()} />;
  });

  return newText;
}
