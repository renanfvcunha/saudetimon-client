import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: '1rem',
  },
  root: {
    width: '100%',
    padding: '1rem 2rem',
  },
  formGroupLabel: {
    marginBottom: '0.5rem',
    color: 'rgba(56, 53, 53)',
    fontSize: 18,
    fontWeight: 500,
  },
  formGroup: {
    border: '1px solid rgba(56, 53, 53, 0.5)',
    borderRadius: 8,
    padding: 4,
    marginBottom: '1rem',
  },
  input: {
    '& .MuiFilledInput-root': {
      backgroundColor: '#fff',
    },
  },
}));

export default useStyles;