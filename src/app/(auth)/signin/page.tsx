'use client'
import * as React from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from "@/store/store";
import { signIn } from "@/store/slices/userSlice";
import { ROUTER } from '@/utils/constant';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


type Props = {};

export default function SignIn(props: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: "admin",
      password: "admin",
      terms: false,
      submit: null,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(255)
        .required("The user name field is required"),
      password: Yup.string()
        .max(255)
        .required("The password field is required"),
      // terms: Yup.boolean().oneOf(
      //   [true],
      //   "You must agree to our terms and conditions"
      // ),
    }),
    onSubmit: async (values): Promise<void> => {
      try {
        console.log(values);
        
        const response = await dispatch(signIn(values));
        console.log("--signin page response--",response);
        
        if (response.meta.requestStatus === "rejected") {
          alert("Login failed");
          // enqueueSnackbar("Login failed", {
          //   variant: "error",
          //   autoHideDuration: 2000,
          //   TransitionComponent: Slide,
          // });
        } else {
          router.push(ROUTER.HOME);
        }
      } catch (err) {
        // enqueueSnackbar(`${err}`, {
        //   variant: "error",
        //   autoHideDuration: 5000,
        //   TransitionComponent: Slide,
        // });
       
        console.log("--alert--",err);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form noValidate onSubmit={formik.handleSubmit} {...props}>
          <TextField
            error={Boolean(formik.touched.username && formik.errors.username)}
            fullWidth
            margin="normal"
            autoFocus
            helperText={formik.touched.username && formik.errors.username}
            label={"User name"}
            name="username"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            margin="normal"
            helperText={formik.touched.password && formik.errors.password}
            label={"Password"}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          <div>
            <div >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.terms}
                    name="terms"
                    color="primary"
                    onChange={formik.handleChange}
                  />
                }
                label={
                  <>
                    <Typography variant="body2">{"Remember password"}</Typography>
                  </>
                }
              />
            </div>
          </div>

          <Button
            sx={{
              mt: 3,
            }}
            color="primary"
            // startIcon={
            //   formik.isSubmitting ? <CircularProgress size="1rem" /> : null
            // }
            disabled={Boolean(!formik.isValid || formik.isSubmitting)}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
          >
            {"Sign in"}
          </Button>
        </form>

      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}