import React from 'react';
import { useRouter } from 'next/router';
import { CardMedia, CssBaseline } from '@material-ui/core';
import { useStyles } from './Layout.style';
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  const styles = useStyles();
  const router = useRouter();

  return (
    <div id="app-layout" className={styles.root}>
      <CssBaseline />
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.headerLimits}>
          <CardMedia image="/edify.svg" className={styles.headerLogo} onClick={() => router.push('/')} />

          <div className={styles.headerButtons}>
            <h3>Quem somos</h3>
            <h3>
              Nosso programa
              <IconButton size="small">
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
            </h3>
            <h3>Depoimentos</h3>
            <h3>Blog</h3>
            <h3>Edify Hub</h3>

            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>

          <Button variant="contained" onClick={() => router.push('/store')} className={styles.button}>
            Loja de livros
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <main className={styles.main}>{children}</main>

      {/* FOOTER */}
      <CardMedia image="/layout/Footer.png" className={styles.footer} />
    </div>
  );
}
