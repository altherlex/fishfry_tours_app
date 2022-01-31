/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { screen, fireEvent, act, waitFor } from "@testing-library/react";
import {
  renderWithProviders,
  axiosMock,
  rootInitialState,
} from "utils/testHelpers";
import Auth from "./Auth";
import {
  API_LOGIN,
  API_REGISTER,
  API_GUEST_REGISTER,
  API_AUTH_SETUP,
} from "api";
import authReducer, {
  login,
  register,
  clearErrors,
  logout,
} from "./AuthSlice";
import { User, AuthSetup } from "types";

export const steveAuthUser: User = {
  id: 1,
  username: "steve",
  photo_url: null,
};

const authSetup: AuthSetup = {
  ALLOW_GUEST_ACCESS: false,
};

beforeEach(() => {
  axiosMock.onGet(API_AUTH_SETUP).reply(200, authSetup);
});

it("should have Fishfry Board text", async () => {
  renderWithProviders(<Auth />);
  expect(screen.getByText("Fishfry Board")).toBeVisible();
});

it("should login", async () => {
  const username = "steve15";
  const password = "secretpassword";
  const credentials = { username, password };

  axiosMock.onPost(API_LOGIN).reply(200, credentials);
  const { mockStore } = renderWithProviders(<Auth />);

  await act(async () => {
    // fireEvent.click(screen.getByTestId("open-login-btn"));
    const usernameInput = await screen.findByLabelText("Username");

    fireEvent.change(usernameInput, {
      target: { value: username },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: password },
    });
    fireEvent.click(screen.getByTestId("submit-login-btn"));
  });
  expect(JSON.parse(axiosMock.history.post[0].data)).toEqual(credentials);

  const actions = mockStore.getActions();
  expect(actions[0].type).toEqual(login.pending.type);
  expect(actions[1].type).toEqual(login.fulfilled.type);
  expect(actions[1].payload).toEqual(credentials);
});

it("should not see enter as guest if the feature isn't enabled", async () => {
  axiosMock
    .onGet(API_AUTH_SETUP)
    .reply(200, { ...authSetup, ALLOW_GUEST_ACCESS: false });
  renderWithProviders(<Auth />);
  expect(screen.queryByText(/Enter as a guest/i)).toBeNull();
});

it("should have about popover in footer", () => {
  renderWithProviders(<Auth />);
  fireEvent.click(screen.getByText("About"));
  expect(screen.getByText("open-source")).toBeVisible();
});

describe("AuthSlice", () => {
  const loginErrors = { non_field_errors: ["Invalid credentials."] };
  const registerErrors = { non_field_errors: ["Passwords don't match."] };

  it("should set login loading", () => {
    const initial = rootInitialState.auth;
    const result = {
      ...rootInitialState.auth,
      loginLoading: true,
    };

    expect(authReducer(initial, { type: login.pending.type })).toEqual(result);
  });

  it("should set user on login fulfilled", () => {
    const initial = {
      ...rootInitialState.auth,
      user: null,
      loginLoading: true,
      loginErrors,
    };
    const result = {
      ...rootInitialState.auth,
      user: steveAuthUser,
      loginLoading: false,
      loginErrors: undefined,
    };

    expect(
      authReducer(initial, {
        type: login.fulfilled.type,
        payload: steveAuthUser,
      })
    ).toEqual(result);
  });

  it("should set error on login rejected", () => {
    const initial = {
      ...rootInitialState.auth,
      loginLoading: true,
      loginErrors: undefined,
    };
    const result = {
      ...rootInitialState.auth,
      loginLoading: false,
      loginErrors,
    };

    expect(
      authReducer(initial, {
        type: login.rejected.type,
        payload: loginErrors,
      })
    ).toEqual(result);
  });

  it("should set user to null on fulfilled and rejected logout", () => {
    const initial = {
      ...rootInitialState.auth,
      user: steveAuthUser,
    };
    const result = {
      ...rootInitialState.auth,
      user: null,
    };

    expect(authReducer(initial, { type: logout.fulfilled.type })).toEqual(
      result
    );
    expect(authReducer(initial, { type: logout.rejected.type })).toEqual(
      result
    );
  });

  it("should set user on login fulfilled", () => {
    const initial = {
      ...rootInitialState.auth,
      user: null,
      registerErrors,
    };
    const result = {
      ...rootInitialState.auth,
      user: steveAuthUser,
      registerErrors: undefined,
    };

    expect(
      authReducer(initial, {
        type: register.fulfilled.type,
        payload: steveAuthUser,
      })
    ).toEqual(result);
  });

  it("should set error on register rejected", () => {
    const initial = {
      ...rootInitialState.auth,
      registerErrors: undefined,
    };
    const result = {
      ...rootInitialState.auth,
      registerErrors,
    };

    expect(
      authReducer(initial, {
        type: register.rejected.type,
        payload: registerErrors,
      })
    ).toEqual(result);
  });

});
