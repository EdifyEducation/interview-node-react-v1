import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CreateIcon from '@material-ui/icons/Create';
import api from '../../common/api';

export default function EditUser() {
  const router = useRouter();
  const id = router.query.showUser;
  const { auth, users } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [createError, setCreateError] = useState({
    name: { error: false, errorMessage: '' },
    email: { error: false, errorMessage: '' },
    password: { error: false, errorMessage: '' }
  });

  const editUser = (event) => {
    event.preventDefault();
    const json = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    };

    api.defaults.headers.common['Authorization'] = auth.token;
    api
      .put(`/users/${id}`, json)
      .then((response) => {
        router.reload();
      })
      .catch((error) => {
        const statusCode = error.response?.data?.code;

        switch (statusCode) {
          case 'LOGIN_NAME_BLANK':
            setCreateError({
              ...createError,
              name: { error: true, errorMessage: 'Favor inserir o nome do usuário' }
            });
            break;
          case 'LOGIN_EMAIL_BLANK':
            setCreateError({
              ...createError,
              email: { error: true, errorMessage: 'Favor inserir o email do usuário' }
            });
            break;
          case 'LOGIN_PASS_BLANK':
            setCreateError({
              ...createError,
              password: { error: true, errorMessage: 'Favor inserir a senha do usuário' }
            });
            break;
          case 'USER_ALREADY_EXISTS':
            setCreateError({
              ...createError,
              email: { error: true, errorMessage: 'Email já cadastrado no sistema' }
            });
            break;
          default:
            break;
        }
      });
  };

  const clearFormError = (event) => {
    const targetId = event?.target?.id;

    switch (targetId) {
      case 'name':
        setCreateError({ ...createError, name: { error: false, errorMessage: '' } });
      case 'email':
        setCreateError({ ...createError, email: { error: false, errorMessage: '' } });
      case 'password':
        setCreateError({ ...createError, password: { error: false, errorMessage: '' } });
      case undefined:
        setCreateError({
          name: { error: false, errorMessage: '' },
          email: { error: false, errorMessage: '' },
          password: { error: false, errorMessage: '' }
        });
    }
  };

  const handleDialog = () => {
    setOpen(!open);
    clearFormError();
  };

  return (
    <div>
      <Button
        data-cy="user-edit"
        variant="contained"
        color="primary"
        startIcon={<CreateIcon />}
        onClick={handleDialog}>
        Editar Dados
      </Button>

      <Dialog open={open} onClose={handleDialog}>
        <DialogTitle id="form-dialog-title">Editar dados do usuário</DialogTitle>
        <DialogContent>
          <form onSubmit={editUser}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Nome"
              type="name"
              defaultValue={users.data.name}
              fullWidth
              variant="outlined"
              color="primary"
              error={createError.name.error}
              helperText={createError.name.errorMessage}
              onChange={clearFormError}
            />

            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="E-mail"
              type="email"
              defaultValue={users.data.email}
              fullWidth
              variant="outlined"
              color="primary"
              error={createError.email.error}
              helperText={createError.email.errorMessage}
              onChange={clearFormError}
            />

            <TextField
              autoFocus
              margin="dense"
              id="password"
              name="password"
              label="Senha"
              type="password"
              defaultValue={users.data.password}
              fullWidth
              variant="outlined"
              color="primary"
              error={createError.password.error}
              helperText={createError.password.errorMessage}
              onChange={clearFormError}
            />

            <Button onClick={handleDialog} color="secondary">
              Cancelar
            </Button>
            <Button data-cy="user-edit-dialog-confirm" color="primary" type="submit">
              Alterar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
