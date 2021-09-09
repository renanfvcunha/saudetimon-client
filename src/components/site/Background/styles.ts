import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  background: {
    background: `#2b3876 url("/assets/images/background.png")`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default useStyles;
