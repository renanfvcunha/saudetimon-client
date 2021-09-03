import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

type Props = {
  title: string;
};

export default function RegistrationForm({ title }: Props) {
  const classes = useStyles();

  return (
    <Box component="form" className={classes.root}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        className={classes.title}
      >
        {title}
      </Typography>
      <Grid container className={classes.formGroup} justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <FormControl variant="filled" fullWidth className={classes.input}>
            <InputLabel>Grupo</InputLabel>
            <Select>
              <MenuItem>Grupo 1</MenuItem>
              <MenuItem>Grupo 2</MenuItem>
              <MenuItem>Grupo 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Typography
        component="h4"
        align="center"
        className={classes.formGroupLabel}
      >
        Grupo
      </Typography>

      <Typography
        component="h4"
        align="center"
        className={classes.formGroupLabel}
      >
        Dados Gerais
      </Typography>
      <Grid container spacing={2} className={classes.formGroup}>
        <Grid item xs={12} sm={6} md={12}>
          <TextField
            variant="filled"
            color="primary"
            name="name"
            label="Nome Completo"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant="filled"
            color="primary"
            name="cpf"
            label="CPF"
            fullWidth
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant="filled"
            color="primary"
            name="susCard"
            label="Cartão SUS"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            variant="filled"
            color="primary"
            name="phone"
            label="Telefone para Contato"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
      </Grid>

      <Typography
        component="h4"
        align="center"
        className={classes.formGroupLabel}
      >
        Endereço
      </Typography>
      <Grid container spacing={2} className={classes.formGroup}>
        <Grid item xs={12} sm={12} md={9}>
          <TextField
            variant="filled"
            color="primary"
            name="street"
            label="Rua"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            variant="filled"
            color="primary"
            name="number"
            label="Número"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
        <Grid item xs={12} sm={8} md={3}>
          <TextField
            variant="filled"
            color="primary"
            name="complement"
            label="Complemento"
            fullWidth
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            variant="filled"
            color="primary"
            name="reference"
            label="Referência"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <TextField
            variant="filled"
            color="primary"
            name="neighborhood"
            label="Bairro"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
}
