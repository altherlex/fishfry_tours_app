import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, DialogContent, Grow } from "@material-ui/core";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./AuthSlice";
import { RootState } from "store";
import { Alert } from "@material-ui/lab";

const FormActions = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

interface FormData {
  username: string;
  password: string;
}

const LoginDialog = () => {
  const dispatch = useDispatch();
  const apiErrors = useSelector((state: RootState) => state.auth.loginErrors);
  const loading = useSelector((state: RootState) => state.auth.loginLoading);
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ username, password }) => {
    dispatch(login({ username, password }));
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <DialogContent>
          {apiErrors?.non_field_errors && (
            <Grow in timeout={100}>
              <Alert
                severity="error"
                css={css`
                  margin-bottom: 0.75rem;
                `}
              >
                {apiErrors.non_field_errors?.map((errorMsg) => (
                  <div key={errorMsg}>{errorMsg}</div>
                ))}
              </Alert>
            </Grow>
          )}
          <TextField
            autoFocus
            name="username"
            margin="dense"
            value="admin"
            id="username"
            label="Username"
            variant="outlined"
            inputRef={register({ required: "This field is required" })}
            helperText={errors.username?.message}
            error={Boolean(errors.username)}
            fullWidth
          />
          <TextField
            name="password"
            margin="dense"
            value="admin"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            inputRef={register({ required: "This field is required" })}
            helperText={errors.password?.message}
            error={Boolean(errors.password)}
            fullWidth
          />
          <FormActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              data-testid="submit-login-btn"
            >
              Login
            </Button>
          </FormActions>
        </DialogContent>
      </form>
    </>
  );
};

export default LoginDialog;
