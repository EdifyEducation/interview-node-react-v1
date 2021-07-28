import { makeStyles, Theme } from '@material-ui/core/styles';
import { headerHeight } from '../components/Layout/Layout.style';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  books: {
    width: 286,
    height: 384,
    maxWidth: '100%',
    boxShadow: '0 3px 5px rgb(0 0 0 / 10%), 0 1px 18px rgb(0 0 0 / 6%), 0 6px 10px rgb(0 0 0 / 7%)',
  },
  textBox: {
    width: '484px',
    marginRight: '200px',
  },
  divider: {
    width: '100%',
    height: 30,
    backgroundSize: 'contain',
    marginLeft: -10,
  },
}));
