import { ChangeEvent, createRef, useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './styles';
import AttachmentField from './AttachmentField';
import { IGroup, PatientRegistration } from '~/interfaces';
import masks from '~/utils/masks';

type Props = {
  title: string;
  groups: IGroup[];
};

export default function RegistrationForm({ title, groups }: Props) {
  const classes = useStyles();

  const [renOncImun, setRenOncImun] = useState('0');
  const [comorbidityPatient, setComorbidityPatient] = useState('0');

  const [selectedGroup, setSelectedGroup] = useState('');

  const inputIdDocFrontRef = createRef<HTMLInputElement>();
  const inputIdDocVerseRef = createRef<HTMLInputElement>();
  const inputCpfRef = createRef<HTMLInputElement>();
  const inputAddressProofRef = createRef<HTMLInputElement>();
  const inputMedicalReportRef = createRef<HTMLInputElement>();
  const inputMedicalAuthorizationRef = createRef<HTMLInputElement>();
  const inputPreNatalCardRef = createRef<HTMLInputElement>();
  const inputPuerperalCardRef = createRef<HTMLInputElement>();
  const inputBornAliveDecRef = createRef<HTMLInputElement>();
  const inputWorkContractRef = createRef<HTMLInputElement>();
  const inputAuxDocRef = createRef<HTMLInputElement>();

  const [patient, setPatient] = useState<PatientRegistration>({
    name: '',
    cpf: '',
    susCard: '',
    phone: '',
    street: '',
    number: '',
    complement: '',
    reference: '',
    neighborhood: '',
    renOncImun: false,
  });

  const handleChangePatient = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

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

      <Typography
        component="h4"
        align="center"
        className={classes.formGroupLabel}
      >
        Grupo
      </Typography>
      <Grid container className={classes.formGroup} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <FormControl
            variant="filled"
            fullWidth
            className={clsx([classes.input, classes.p05])}
          >
            <InputLabel>Grupo</InputLabel>
            <Select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value as string)}
            >
              {groups.map((grp) => (
                <MenuItem key={grp.id.toString()} value={grp.id.toString()}>
                  {grp.group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Typography
        component="h4"
        align="center"
        className={clsx([classes.formGroupLabel, classes.m0])}
      >
        Paciente Renal, Oncológico ou Imunossuprimido?
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.mb05}
      >
        <FormControl>
          <RadioGroup
            className={classes.radioButtons}
            value={renOncImun}
            onChange={(e) => setRenOncImun(e.target.value)}
          >
            <FormControlLabel
              value="0"
              label="Não"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="1"
              label="Sim"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Typography
        component="h4"
        align="center"
        className={clsx([classes.formGroupLabel, classes.m0])}
      >
        Paciente com Comorbidades?
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.mb05}
      >
        <FormControl>
          <RadioGroup
            className={classes.radioButtons}
            value={comorbidityPatient}
            onChange={(e) => setComorbidityPatient(e.target.value)}
          >
            <FormControlLabel
              value="0"
              label="Não"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="1"
              label="Sim"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      {comorbidityPatient === '1' && (
        <>
          <Typography
            component="h4"
            align="center"
            className={classes.formGroupLabel}
          >
            Selecione a Comorbidade
          </Typography>
          <Grid container className={classes.formGroup} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <FormControl
                variant="filled"
                fullWidth
                className={clsx([classes.input, classes.p05])}
              >
                <InputLabel>Comorbidade</InputLabel>
                <Select>
                  <MenuItem>Comorbidade 1</MenuItem>
                  <MenuItem>Comorbidade 2</MenuItem>
                  <MenuItem>Comorbidade 3</MenuItem>
                </Select>
                <Typography component="small" className={classes.helperText}>
                  Se sua comorbidade não está na lista, então infelizmente você
                  não está elegível ao cadastro.
                </Typography>
              </FormControl>
            </Grid>
          </Grid>
        </>
      )}

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
            value={patient.name}
            onChange={handleChangePatient}
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
            value={patient.cpf}
            onChange={(e) =>
              setPatient({ ...patient, cpf: masks.cpfMask(e.target.value) })
            }
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
            value={patient.susCard}
            onChange={(e) =>
              setPatient({
                ...patient,
                susCard: masks.susCardMask(e.target.value),
              })
            }
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
            value={patient.phone}
            onChange={(e) =>
              setPatient({ ...patient, phone: masks.phoneMask(e.target.value) })
            }
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

      <Typography
        component="h4"
        align="center"
        className={classes.formGroupLabel}
      >
        Anexos
      </Typography>
      <Grid container spacing={2} className={classes.formGroup}>
        <AttachmentField
          fieldName="Documento de Identidade (Frente)"
          ref={inputIdDocFrontRef}
          refClick={() => inputIdDocFrontRef.current?.click()}
          mandatory
        />

        <AttachmentField
          fieldName="Documento de Identidade (Verso)"
          ref={inputIdDocVerseRef}
          refClick={() => inputIdDocVerseRef.current?.click()}
          mandatory
        />

        <AttachmentField
          fieldName="CPF ou Cartão SUS"
          ref={inputCpfRef}
          refClick={() => inputCpfRef.current?.click()}
          mandatory
        />

        <AttachmentField
          fieldName="Comprovante de Endereço"
          ref={inputAddressProofRef}
          refClick={() => inputAddressProofRef.current?.click()}
          mandatory
        />

        {(comorbidityPatient === '1' ||
          renOncImun === '1' ||
          (groups &&
            /deficientes/i.test(
              groups.find((grp) => grp.id.toString() === selectedGroup)
                ?.group as string
            ))) && (
          <AttachmentField
            fieldName="Laudo Médico Atualizado"
            ref={inputMedicalReportRef}
            refClick={() => inputMedicalReportRef.current?.click()}
            mandatory
          />
        )}

        {groups &&
          /lactante/i.test(
            groups.find((grp) => grp.id.toString() === selectedGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Declaração Médica de Bebê Amamentando"
              ref={inputMedicalReportRef}
              refClick={() => inputMedicalReportRef.current?.click()}
              mandatory
            />
          )}

        {(renOncImun === '1' ||
          (groups &&
            /lactante/i.test(
              groups.find((grp) => grp.id.toString() === selectedGroup)
                ?.group as string
            ))) && (
          <AttachmentField
            fieldName="Autorização Médica"
            ref={inputMedicalAuthorizationRef}
            refClick={() => inputMedicalAuthorizationRef.current?.click()}
            mandatory
          />
        )}

        {groups &&
          /gestante/i.test(
            groups.find((grp) => grp.id.toString() === selectedGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Cartão de Pré Natal"
              ref={inputPreNatalCardRef}
              refClick={() => inputPreNatalCardRef.current?.click()}
              mandatory
            />
          )}

        {groups &&
          groups.find(
            (grp) =>
              grp.id.toString() === selectedGroup &&
              grp.group ===
                'Gestantes e puérperas a partir de 18 anos COM comorbidades'
          ) && (
            <>
              <AttachmentField
                fieldName="Cartão de Puérperas"
                ref={inputPuerperalCardRef}
                refClick={() => inputPuerperalCardRef.current?.click()}
                mandatory
              />

              <AttachmentField
                fieldName="Declaração de Nascido Vivo"
                ref={inputBornAliveDecRef}
                refClick={() => inputBornAliveDecRef.current?.click()}
                mandatory
              />
            </>
          )}

        {groups &&
          /saúde/i.test(
            groups.find((grp) => grp.id.toString() === selectedGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Contracheque OU Declaração de profissional autônomo autenticada em cartório OU Declaração do local de estágio"
              ref={inputWorkContractRef}
              refClick={() => inputWorkContractRef.current?.click()}
              mandatory
            />
          )}

        {groups &&
          /motorista/i.test(
            groups.find((grp) => grp.id.toString() === selectedGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Declaração da Empresa Prestadora dos Serviços"
              ref={inputWorkContractRef}
              refClick={() => inputWorkContractRef.current?.click()}
              mandatory
            />
          )}

        {groups &&
          (/trabalhadores/i.test(
            groups.find((grp) => grp.id.toString() === selectedGroup)
              ?.group as string
          ) ||
            /caminhoneiros/i.test(
              groups.find((grp) => grp.id.toString() === selectedGroup)
                ?.group as string
            ) ||
            /estagiários/i.test(
              groups.find((grp) => grp.id.toString() === selectedGroup)
                ?.group as string
            ) ||
            groups.find(
              (grp) =>
                grp.id.toString() === selectedGroup &&
                grp.group === 'Forças de Segurança e Salvamento'
            )) &&
          !/saúde/i.test(
            groups.find((grp) => grp.id.toString() === selectedGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Contracheque OU Contrato de Trabalho OU Declaração do local de estágio informando atividade exercida"
              ref={inputWorkContractRef}
              refClick={() => inputWorkContractRef.current?.click()}
              mandatory
            />
          )}

        <AttachmentField
          fieldName="Documentação Auxiliar (Certidão de Casamento, Contrato de Aluguel, etc.)"
          ref={inputAuxDocRef}
          refClick={() => inputAuxDocRef.current?.click()}
          mandatory
        />
      </Grid>
    </Box>
  );
}
