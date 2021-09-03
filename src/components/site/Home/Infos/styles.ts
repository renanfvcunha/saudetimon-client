import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#d1cecf',
  },
  infoTitleBox: {
    backgroundColor: '#35458f',
    width: 260,
    height: 24,
    margin: '1rem 0 0',
    textAlign: 'center',
  },
  infoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  paragraphs: {
    margin: '2rem',
  },
  paragraph: {
    color: '#001f61',
  },
  icon: {
    color: '#001f61',
    paddingTop: 8,
  },
}));

export default useStyles;
