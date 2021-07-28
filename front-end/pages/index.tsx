import Head from 'next/head';
import { CardMedia, Typography } from '@material-ui/core';
import { useStyles } from '../styles/index.style';
import Layout from '../components/Layout/Layout';

export default function Home() {
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>Edify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.textBox}>
          <Typography variant="h3" component="h1" gutterBottom>
            <b>Nossos livros</b>
          </Typography>

          <CardMedia image="/layout/divider.svg" className={styles.divider} />

          <Typography variant="h5" component="h5" gutterBottom>
            Mauris lacus, tincidunt amet, urna. Eleifend orci pulvinar quisque sit cursus vel amet. Commodo,
            non vitae urna non neque urna eget.
          </Typography>
        </div>

        <CardMedia image="/books/book_01.jpg" className={styles.books} />
      </div>
    </Layout>
  );
}
