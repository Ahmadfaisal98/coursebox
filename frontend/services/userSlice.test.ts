import { storeCreator } from "@/store";

import { mockUser, ValidationError } from "@/mocks/user";

import { reducer, actions, initialState, login } from "./userSlice";

const updatedState = {
  jwt: mockUser.jwt,
  username: mockUser.user.username,
  email: mockUser.user.email,
};

const loginData = {
  identifier: mockUser.user.email,
  password: mockUser.user.password,
};

const requestId = "someId";

describe("User slice check", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("Login async flow", () => {
    it("success login flow", async () => {
      const store = storeCreator();
      const stateBeforeLogin = store.getState();
      expect(stateBeforeLogin).toEqual({
        user: {
          ...initialState,
        },
      });
      await store.dispatch(login(loginData));
      const stateAfterLogin = store.getState();
      expect(stateAfterLogin).toEqual({
        user: {
          ...updatedState,
          requestState: "fulfilled",
        },
      });
    });

    it("login flow with saved jwt", async () => {
      // Set the jwt in localStorage
      localStorage.setItem("jwt", mockUser.jwt);

      const store = storeCreator();
      // In this case the jwt is already saved in localStorage
      await store.dispatch(login({}));
      const state = store.getState();

      expect(state).toEqual({
        user: {
          ...updatedState,
          requestState: "fulfilled",
        },
      });
    });

    it("fail login flow", async () => {
      const store = storeCreator();
      await store.dispatch(login({ ...loginData, password: "wrongpass" }));
      const state = store.getState();

      expect(state).toEqual({
        user: {
          ...initialState,
          requestState: "rejected",
          ...ValidationError,
        },
      });
    });
  });
});
