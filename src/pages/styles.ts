import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  main: {
    padding: '5rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    '& a': {
      color: '#0070f3',
      textDecoration: 'none',
    },
    '& a:hover, & a:focus, & a:active': {
      textDecoration: 'underline',
    },
  },
  description: {
    textAlign: 'center',
    lineHeight: 1.5,
    fontSize: '1.5rem',
  },
  code: {
    background: '#fafafa',
    borderRadius: 5,
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: 10,
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '45%',
    '& :hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
    '& h2': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& p': {
      margin: 0,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 800,
    marginTop: '3rem',
  },
  footer: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  },
  logo: {
    height: '1em',
    marginLeft: '0.5rem',
  },
}));

export default useStyles;
