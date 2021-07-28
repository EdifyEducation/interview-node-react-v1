import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout/Layout';
import { CardMedia, Typography } from '@material-ui/core';
import { useStyles } from '../styles/success.style';

export default function Home() {
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>Edify - Success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <CardMedia image="/Success_01.png" className={styles.successImage01} />

        <div className={styles.successContainer}>
          <div className={styles.textBox}>
            <Typography variant="h3" component="h3" gutterBottom className={styles.title}>
              <b>Obrigado pelo envio!</b>
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom className={styles.subtitle}>
              Seus dados foram cadastrados com sucesso, em pouco tempo entraremos em contato!
            </Typography>
          </div>
          <CardMedia image="/Success_02.png" className={styles.successImage02} />
        </div>
      </div>
    </Layout>
  );
}
