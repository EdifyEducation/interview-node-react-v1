import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../common/reducer';
import { listBooks, IBooks, IBooksStateDTO } from '../common/DuckBooks';
import { Button, CardMedia, Typography, TextField } from '@material-ui/core';
import Api from '../common/api';
import { AxiosError } from 'axios';
import { useStyles } from '../styles/store.style';

export default function Home() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state);

  const [name, setName] = useState<string>();

  const sendOrder = () => {
    let data: { [key: string]: any } = {};

    Api.post(`/orders`, data)
      .then((response: IBooksStateDTO) => {
        console.log('SUCESSO:', response);
      })
      .catch((error: AxiosError): void => {
        console.log('ERRO:', error);
      });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    console.log('loadBooks');
  };

  return (
    <Layout>
      <Head>
        <title>Edify - Loja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <CardMedia image="/layout/store_title.png" className={styles.storeTitle} />

        <div className={styles.storeSubtitle}>
          <h3>
            Quando você escolhe o Edify para sua escola, nosso trabalho está apenas começando. Passo a passo,
            veja como estamos presentes em todas as etapas.
          </h3>
        </div>

        <div className={styles.storeContainer}>
          {books.data.map((item: IBooks) => {
            return (
              <div key={item.id} className={styles.bookContainer}>
                <CardMedia image={item.image} className={styles.bookImage} />

                <Typography variant="body1" component="span" gutterBottom className={styles.bookTitle}>
                  {item.title}
                </Typography>

                <Typography variant="body1" component="span" gutterBottom className={styles.bookDescription}>
                  {item.description}
                </Typography>

                <Typography variant="body1" component="span" gutterBottom className={styles.bookValue}>
                  R$ {item.value}
                </Typography>

                <TextField
                  id={item.id.toString()}
                  label="Quantidade"
                  variant="outlined"
                  className={styles.bookQuantity}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.checkoutContainer}>
          <TextField
            id="username"
            label="Digite seu email"
            variant="filled"
            className={styles.checkoutInput}
          />
          <Button variant="contained" onClick={sendOrder} className={styles.button}>
            Fazer o Pedido
          </Button>
        </div>
      </div>
    </Layout>
  );
}
