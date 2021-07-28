import { makeStyles, useTheme } from '@material-ui/core/styles';

export const headerHeight = 90;
export const defaultWidth = 1300;

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 3px 5px rgb(0 0 0 / 10%), 0 1px 18px rgb(0 0 0 / 6%), 0 6px 10px rgb(0 0 0 / 7%)',
  },
  headerLimits: {
    display: 'flex',
    flex: 1,
    maxWidth: defaultWidth,
    width: '100%',
    height: headerHeight,
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    flexGrow: 1,
    paddingTop: headerHeight,
    maxWidth: defaultWidth,
    width: '100%',
  },
  headerLogo: {
    width: 111,
    height: 54,
    backgroundSize: 'contain',
    cursor: 'pointer',
  },
  headerButtons: {
    marginLeft: '3rem',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& h3': {
      padding: '0 1rem',
      alignSelf: 'baseline',
    },
  },
  button: {
    color: theme.palette.getContrastText('#4218B5'),
    borderRadius: 25,
    width: 180,
    height: 38,
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: '#4218B5',
    '&:hover': {
      backgroundColor: '#4218B5',
    },
  },
  footer: {
    width: '100%',
    height: 323,
    backgroundSize: 'contain',
    backgroundColor: '#F2F2F2',
  },
}));
