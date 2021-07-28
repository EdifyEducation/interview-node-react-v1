import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { useSelector } from 'react-redux';
import api from '../../common/api';
import AddIcon from '@material-ui/icons/Add';

export default function CreateUser() {
  const router = useRouter();
  const { auth } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [createError, setCreateError] = useState({
    name: { error: false, errorMessage: '' },
    email: { error: false, errorMessage: '' },
    password: { error: false, errorMessage: '' },
    confirmation: { error: false, errorMessage: '' }
  });

  const createUser = (event) => {
    event.preventDefault();
    const json = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    };

    if (json.password == event.target.confirmation.value) {
      api.defaults.headers.common['Authorization'] = auth.token;
      api
        .post('/users', json)
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
    } else {
      setCreateError({
        ...createError,
        confirmation: { error: true, errorMessage: 'As senhas devem ser identicas' }
      });
    }
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
      case 'confirmation':
        setCreateError({ ...createError, confirmation: { error: false, errorMessage: '' } });
      case undefined:
        setCreateError({
          name: { error: false, errorMessage: '' },
          email: { error: false, errorMessage: '' },
          password: { error: false, errorMessage: '' },
          confirmation: { error: false, errorMessage: '' }
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
        data-cy="user-create"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleDialog}>
        Cadastrar usuário
      </Button>

      <Dialog open={open} onClose={handleDialog}>
        <DialogTitle id="form-dialog-title">Cadastrar novo usuário</DialogTitle>
        <DialogContent>
          <form onSubmit={createUser}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Nome"
              type="name"
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
              fullWidth
              variant="outlined"
              color="primary"
              error={createError.password.error}
              helperText={createError.password.errorMessage}
              onChange={clearFormError}
            />

            <TextField
              autoFocus
              margin="dense"
              id="confirmation"
              name="confirmation"
              label="Confirme a senha"
              type="password"
              fullWidth
              variant="outlined"
              color="primary"
              error={createError.confirmation.error}
              helperText={createError.confirmation.errorMessage}
              onChange={clearFormError}
            />

            <Button onClick={handleDialog} color="secondary">
              Cancelar
            </Button>
            <Button data-cy="user-create-dialog-confirm" color="primary" type="submit">
              Cadastrar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
