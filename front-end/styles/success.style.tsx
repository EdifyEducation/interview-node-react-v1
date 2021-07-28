import { makeStyles, Theme } from '@material-ui/core/styles';
import { headerHeight } from '../components/Layout/Layout.style';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    flexDirection: 'row',
    paddingTop: 10,
  },
  successImage01: {
    position: 'absolute',
    width: 435,
    height: 420,
    backgroundSize: 'contain',
    left: 0,
    bottom: 0,
    zIndex: -1,
  },
  successImage02: {
    position: 'absolute',
    width: 630,
    height: 120,
    backgroundSize: 'contain',
    right: 0,
    zIndex: -1,
  },
  successContainer: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    flexDirection: 'column',
    top: 0,
    right: 0,
    backgroundColor: '#4317B5',
    zIndex: -1,
  },
  textBox: {
    margin: '220px 0 100px 120px',
  },
  title: {
    color: '#FFFFFF',
    maxWidth: 490,
  },
  subtitle: {
    color: '#FFFFFF',
    maxWidth: 440,
  },
}));
