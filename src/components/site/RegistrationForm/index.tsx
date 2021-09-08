import { ChangeEvent, createRef, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  CircularProgress,
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

import { IComorbidity, IGroup, PatientRegistration } from '~/interfaces';

import masks from '~/utils/masks';
import catchHandler, { Err } from '~/utils/catchHandler';
import { createPatientReq } from '~/services/api';
import Alert from '~/utils/alert';

type Props = {
  title: string;
  groups: IGroup[];
  comorbidities: IComorbidity[];
  idCategory: string;
};

export default function RegistrationForm({
  title,
  groups,
  comorbidities,
  idCategory,
}: Props) {
  const classes = useStyles();
  const router = useRouter();

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

  const [comorbidityPatient, setComorbidityPatient] = useState('0');

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
    renOncImun: 'false',
    idCategory,
    idGroup: groups[0].id.toString(),
    idComorbidity: comorbidities[0].id.toString(),
  });

  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChangePatient = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setPatient({ ...patient, [e.target.name]: e.target.value });

  const handleSetFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setPatient({ ...patient, [e.target.name]: e.target.files[0] });
  };

  const handleClearFile = (fieldSlug: string) =>
    setPatient({ ...patient, [fieldSlug]: undefined });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const patientParsed = { ...patient };

    if (!patient.susCard) delete patientParsed.susCard;
    if (!patient.complement) delete patientParsed.complement;
    if (comorbidityPatient !== '1') delete patientParsed.idComorbidity;

    try {
      setLoading(true);

      const msg = await createPatientReq(patientParsed, (pg) => {
        setUploadProgress((pg.loaded * 100) / pg.total);
      });

      Alert('success', '', msg);
      router.push('/');
    } catch (err) {
      catchHandler(
        err as Err,
        'Não foi possível realizar o cadastro. Tente novamente ou contate o suporte.'
      );
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <Box component="form" className={classes.root} onSubmit={handleSubmit}>
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
              value={patient.idGroup}
              onChange={(e) =>
                setPatient({ ...patient, idGroup: e.target.value as string })
              }
            >
              {groups.map((grp) => (
                <MenuItem
                  key={grp.id.toString()}
                  value={grp.id.toString()}
                  className={classes.wsUnset}
                >
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
            value={patient.renOncImun}
            onChange={(e) =>
              setPatient({ ...patient, renOncImun: e.target.value })
            }
          >
            <FormControlLabel
              value="false"
              label="Não"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="true"
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
                <Select
                  value={patient.idComorbidity}
                  onChange={(e) =>
                    setPatient({
                      ...patient,
                      idComorbidity: e.target.value as string,
                    })
                  }
                >
                  {comorbidities.map((cmb) => (
                    <MenuItem
                      key={cmb.id.toString()}
                      value={cmb.id.toString()}
                      className={classes.wsUnset}
                    >
                      {cmb.comorbidity}
                    </MenuItem>
                  ))}
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
            value={patient.street}
            onChange={handleChangePatient}
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
            value={patient.number}
            onChange={handleChangePatient}
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
            value={patient.complement}
            onChange={handleChangePatient}
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
            value={patient.reference}
            onChange={handleChangePatient}
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
            value={patient.neighborhood}
            onChange={handleChangePatient}
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
          fieldSlug="idDocFront"
          ref={inputIdDocFrontRef}
          refClick={() => inputIdDocFrontRef.current?.click()}
          setFile={handleSetFile}
          clearFile={handleClearFile}
          field={patient.idDocFront}
          mandatory
        />

        <AttachmentField
          fieldName="Documento de Identidade (Verso)"
          fieldSlug="idDocVerse"
          ref={inputIdDocVerseRef}
          refClick={() => inputIdDocVerseRef.current?.click()}
          setFile={handleSetFile}
          clearFile={handleClearFile}
          field={patient.idDocVerse}
          mandatory
        />

        <AttachmentField
          fieldName="CPF ou Cartão SUS"
          fieldSlug="cpfAttachment"
          ref={inputCpfRef}
          refClick={() => inputCpfRef.current?.click()}
          setFile={handleSetFile}
          clearFile={handleClearFile}
          field={patient.cpfAttachment}
          mandatory
        />

        <AttachmentField
          fieldName="Comprovante de Endereço"
          fieldSlug="addressProof"
          ref={inputAddressProofRef}
          refClick={() => inputAddressProofRef.current?.click()}
          setFile={handleSetFile}
          clearFile={handleClearFile}
          field={patient.addressProof}
          mandatory
        />

        {(comorbidityPatient === '1' ||
          patient.renOncImun === 'true' ||
          (groups &&
            /deficientes/i.test(
              groups.find((grp) => grp.id.toString() === patient.idGroup)
                ?.group as string
            ))) && (
          <AttachmentField
            fieldName="Laudo Médico Atualizado"
            fieldSlug="medicalReport"
            ref={inputMedicalReportRef}
            refClick={() => inputMedicalReportRef.current?.click()}
            setFile={handleSetFile}
            clearFile={handleClearFile}
            field={patient.medicalReport}
            mandatory
          />
        )}

        {groups &&
          /lactante/i.test(
            groups.find((grp) => grp.id.toString() === patient.idGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Declaração Médica de Bebê Amamentando"
              fieldSlug="medicalReport"
              ref={inputMedicalReportRef}
              refClick={() => inputMedicalReportRef.current?.click()}
              setFile={handleSetFile}
              clearFile={handleClearFile}
              field={patient.medicalReport}
              mandatory
            />
          )}

        {(patient.renOncImun === 'true' ||
          (groups &&
            /lactante/i.test(
              groups.find((grp) => grp.id.toString() === patient.idGroup)
                ?.group as string
            ))) && (
          <AttachmentField
            fieldName="Autorização Médica"
            fieldSlug="medicalAuthorization"
            ref={inputMedicalAuthorizationRef}
            refClick={() => inputMedicalAuthorizationRef.current?.click()}
            setFile={handleSetFile}
            clearFile={handleClearFile}
            field={patient.medicalAuthorization}
            mandatory
          />
        )}

        {groups &&
          /gestante/i.test(
            groups.find((grp) => grp.id.toString() === patient.idGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Cartão de Pré Natal"
              fieldSlug="preNatalCard"
              ref={inputPreNatalCardRef}
              refClick={() => inputPreNatalCardRef.current?.click()}
              setFile={handleSetFile}
              clearFile={handleClearFile}
              field={patient.preNatalCard}
              mandatory
            />
          )}

        {groups &&
          groups.find(
            (grp) =>
              grp.id.toString() === patient.idGroup &&
              grp.group ===
                'Gestantes e puérperas a partir de 18 anos COM comorbidades'
          ) && (
            <>
              <AttachmentField
                fieldName="Cartão de Puérperas"
                fieldSlug="puerperalCard"
                ref={inputPuerperalCardRef}
                refClick={() => inputPuerperalCardRef.current?.click()}
                setFile={handleSetFile}
                clearFile={handleClearFile}
                field={patient.puerperalCard}
                mandatory
              />

              <AttachmentField
                fieldName="Declaração de Nascido Vivo"
                fieldSlug="bornAliveDec"
                ref={inputBornAliveDecRef}
                refClick={() => inputBornAliveDecRef.current?.click()}
                setFile={handleSetFile}
                clearFile={handleClearFile}
                field={patient.bornAliveDec}
                mandatory
              />
            </>
          )}

        {groups &&
          /saúde/i.test(
            groups.find((grp) => grp.id.toString() === patient.idGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Contracheque OU Declaração de profissional autônomo autenticada em cartório OU Declaração do local de estágio"
              fieldSlug="workContract"
              ref={inputWorkContractRef}
              refClick={() => inputWorkContractRef.current?.click()}
              setFile={handleSetFile}
              clearFile={handleClearFile}
              field={patient.workContract}
              mandatory
            />
          )}

        {groups &&
          /motorista/i.test(
            groups.find((grp) => grp.id.toString() === patient.idGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Declaração da Empresa Prestadora dos Serviços"
              fieldSlug="workContract"
              ref={inputWorkContractRef}
              refClick={() => inputWorkContractRef.current?.click()}
              setFile={handleSetFile}
              clearFile={handleClearFile}
              field={patient.workContract}
              mandatory
            />
          )}

        {groups &&
          (/trabalhadores/i.test(
            groups.find((grp) => grp.id.toString() === patient.idGroup)
              ?.group as string
          ) ||
            /caminhoneiros/i.test(
              groups.find((grp) => grp.id.toString() === patient.idGroup)
                ?.group as string
            ) ||
            /estagiários/i.test(
              groups.find((grp) => grp.id.toString() === patient.idGroup)
                ?.group as string
            ) ||
            groups.find(
              (grp) =>
                grp.id.toString() === patient.idGroup &&
                grp.group === 'Forças de Segurança e Salvamento'
            )) &&
          !/saúde/i.test(
            groups.find((grp) => grp.id.toString() === patient.idGroup)
              ?.group as string
          ) && (
            <AttachmentField
              fieldName="Contracheque OU Contrato de Trabalho OU Declaração do local de estágio informando atividade exercida"
              fieldSlug="workContract"
              ref={inputWorkContractRef}
              refClick={() => inputWorkContractRef.current?.click()}
              setFile={handleSetFile}
              clearFile={handleClearFile}
              field={patient.workContract}
              mandatory
            />
          )}

        <AttachmentField
          fieldName="Documentação Auxiliar (Certidão de Casamento, Contrato de Aluguel, etc.)"
          fieldSlug="auxDoc"
          ref={inputAuxDocRef}
          refClick={() => inputAuxDocRef.current?.click()}
          setFile={handleSetFile}
          clearFile={handleClearFile}
          field={patient.auxDoc}
        />
      </Grid>

      {loading && (
        <Grid container justifyContent="center">
          <CircularProgress
            variant="determinate"
            value={uploadProgress}
            size={32}
          />
        </Grid>
      )}

      <Grid container justifyContent="center" className={classes.mt1}>
        <Grid item xs={12} sm={9} md={6}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
