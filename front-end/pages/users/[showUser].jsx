import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Card,
  CardContent,
  Typography,
  Divider
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { showUser } from '../../common/DuckUsers';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../common/api';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import EditUser from './EditUser';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/userView.module.css';

// export async function getServerSideProps({ params }) {
//   const id = params.showUser;
//   return { props: { id } };
// }

function User() {
  const [open, setOpen] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { auth, users } = useSelector((state) => state);
  const id = router.query.showUser;

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = () => {
    api.defaults.headers.common['Authorization'] = auth.token;

    api
      .get(`/users/${id}`)
      .then((response) => {
        dispatch(showUser(response.data));
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status == 404) {
          setNotFound(true);
        }
      });
  };

  const deleteUser = () => {
    api.defaults.headers.common['Authorization'] = auth.token;

    api
      .delete(`/users/${id}`)
      .then((response) => {
        router.push('/users');
        handleDialog();
      })
      .catch((error) => console.log(error));
  };

  const handleDialog = () => {
    setOpen(!open);
  };

  if (notFound) {
    return <PageNotFound message={`Usuario "${id}" não foi encontrado ou é inexistente!`} />;
  }

  return (
    <Layout>
      <Head>
        <title>Dados do usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Dados do usuário</h1>

      <div className={styles.buttonContainer}>
        <EditUser />
        <Button
          data-cy="user-delete"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleDialog}>
          Excluir usuário
        </Button>
      </div>

      <div className={styles.form}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Nome
            </Typography>
            <Divider />
            <Typography variant="h6" component="p" data-cy="user-edit-name">
              {users.data.name}
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              E-mail
            </Typography>
            <Divider />
            <Typography variant="h6" component="p" data-cy="user-edit-email">
              {users.data.email}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Dialog data-cy="user-delete-dialog" open={open} onClose={handleDialog}>
        <DialogTitle id="alert-dialog-title">Excluir usuário</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja excluir o usuário "{users.data.name}" do sistema?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog} color="primary">
            Cancelar
          </Button>
          <Button data-cy="user-delete-dialog-confirm" onClick={deleteUser} color="secondary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}

export default User;
