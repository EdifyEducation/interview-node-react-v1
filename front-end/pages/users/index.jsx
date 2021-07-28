import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Pagination } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { listUsers } from '../../common/DuckUsers';
import api from '../../common/api';
import CreateUser from './CreateUser';
import Layout from '../../components/Layout/Layout';
import DataTable from '../../components/DataTable/DataTable';
import styles from '../../styles/usersPage.module.css';

export default function Users() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { auth, users } = useSelector((state) => state);

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = (page) => {
    api.defaults.headers.common['Authorization'] = auth.token;

    let qParam = page != null ? '?page=' + page : '';

    api
      .get(`/users` + qParam)
      .then((response) => {
        dispatch(listUsers(response.data));
      })
      .catch((error) => console.log(error));
  };

  const headers = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'email', label: 'E-mail' }
  ];

  return (
    <Layout>
      <Head>
        <title>Lista de usuários</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Lista de usuários</h1>

      <div className={styles.buttonContainer}>
        <CreateUser />
      </div>

      <DataTable headers={headers} rows={users.data} route="users" />

      <Pagination count={users.total_pages} onChange={(event, page) => loadPage(page)} />
    </Layout>
  );
}
