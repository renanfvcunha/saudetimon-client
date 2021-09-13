import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem 0',
  },
  questionContainer: {
    padding: '0 1rem',
  },
  questionItem: {
    marginTop: '1rem',
  },
  question: {
    fontWeight: 700,
    color: '#7a7a7a',
  },
  answer: {
    color: '#7a7a7a',
    marginTop: '0.25rem',
  },
}));

export default useStyles;
