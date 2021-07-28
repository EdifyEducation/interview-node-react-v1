import Head from 'next/head';
import { CardMedia, Typography } from '@material-ui/core';
import { useStyles } from '../styles/index.style';
import Layout from '../components/Layout/Layout';

export default function Home() {
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.textBox}>
          <Typography variant="h3" component="h1" gutterBottom>
            <b>404</b>
          </Typography>

          <CardMedia image="/layout/divider.svg" className={styles.divider} />

          <Typography variant="h5" component="h5" gutterBottom>
            Page not Found
          </Typography>
        </div>
      </div>
    </Layout>
  );
}
