import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    flex: 1,
  },
  button: {
    height: '100%',
  },
  fileNameContainer: {
    marginTop: '0.25rem',
  },
  fileName: {
    fontSize: 12,
    fontStyle: 'italic',
    display: 'inline-block',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  closeIcon: {
    width: 15,
    height: 15,
    color: '#fff',
    borderRadius: '50%',
    backgroundColor: 'red',
    cursor: 'pointer',
  },
}));

export default useStyles;
