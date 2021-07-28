import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStylesGlobal = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
}));
