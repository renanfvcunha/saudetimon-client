import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  rectangle: {
    width: '100%',
    height: 15,
  },
  bgYellow: {
    backgroundColor: '#ffc311',
  },
  bgLtBlue: {
    backgroundColor: '#73c2d0',
  },
  bgGreen: {
    backgroundColor: '#82bb71',
  },
  bgDkBlue: {
    backgroundColor: '#044f99',
  },
  images: {
    padding: '30px 10% 30px 5%',

    '@media (max-width: 600px)': {
      padding: '20px 10% 20px 5%',
    },
  },
  logo: {
    '@media (max-width: 600px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
    },
  },
  image: {
    width: 'auto',
    height: 150,

    '@media (max-width: 600px)': {
      height: 100,
    },
  },
}));

export default useStyles;
