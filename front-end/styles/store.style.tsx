import { makeStyles, Theme } from '@material-ui/core/styles';
import { headerHeight } from '../components/Layout/Layout.style';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    minHeight: `calc(100vh - ${headerHeight}px)`,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 10,
  },
  storeTitle: {
    width: '100%',
    height: 152,
    backgroundSize: 'contain',
  },
  storeSubtitle: {
    textAlign: 'center',
    fontWeight: 'normal',
    maxWidth: 800,
    margin: '25px 0',
  },
  storeContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 286,
  },
  bookImage: {
    width: 286,
    height: 384,
    boxShadow: '0 3px 5px rgb(0 0 0 / 10%), 0 1px 18px rgb(0 0 0 / 6%), 0 6px 10px rgb(0 0 0 / 7%)',
  },

  bookTitle: {
    width: '100%',
    marginTop: 20,
    fontWeight: 'bold',
    height: 50,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  bookDescription: {
    width: '100%',
    marginTop: 20,
    height: 100,
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  bookValue: {
    width: '100%',
    marginTop: 20,
    fontWeight: 'bold',
  },
  bookQuantity: {
    width: '100%',
    marginTop: 20,
  },
  checkoutContainer: {
    display: 'flex',
    width: '100%',
    height: 100,
    margin: '50px 0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4317B5',
    borderRadius: 15,
  },
  checkoutInput: {
    width: 400,
    marginRight: 15,
    '& .MuiFilledInput-root': {
      backgroundColor: '#FFFFFF',
    },
  },
  button: {
    color: '#FFFFFF',
    borderRadius: 25,
    width: 180,
    height: 38,
    textTransform: 'none',
    backgroundColor: '#FFC112',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#FFC112',
    },
  },
}));
