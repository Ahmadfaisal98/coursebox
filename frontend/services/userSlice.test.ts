import { storeCreator as globalStoreCreator } from "@/store";

import { mockUser, ValidationError } from "@/mocks/user";

import { reducer, initialState, login, logout } from "./userSlice";

const rootReducer = {
  user: reducer,
};

const storeCreator = () => globalStoreCreator(rootReducer);

const updatedState = {
  jwt: mockUser.jwt,
  username: mockUser.user.username,
  email: mockUser.user.email,
};

const loginData = {
  identifier: mockUser.user.email,
  password: mockUser.user.password,
};

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

  describe("Logout flow", () => {
    beforeEach(() => {
      localStorage.clear();
    });
    it("logout action", async () => {
      // Login
      const store = storeCreator();
      await store.dispatch(login(loginData));
      const stateAfterLogin = store.getState();
      expect(stateAfterLogin).toEqual({
        user: {
          ...updatedState,
          requestState: "fulfilled",
        },
      });

      // Check that the data is stored in localStorage
      expect(localStorage.getItem("jwt")).toBe(mockUser.jwt);
      expect(localStorage.getItem("username")).toBe(mockUser.user.username);
      expect(localStorage.getItem("email")).toBe(mockUser.user.email);

      // Logout
      await store.dispatch(logout());

      const stateAfterLogout = store.getState();
      expect(stateAfterLogout).toEqual({
        user: {
          ...initialState,
        },
      });
      // Check that the data is removed from localStorage
      expect(localStorage.getItem("jwt")).toBe(null);
      expect(localStorage.getItem("username")).toBe(null);
      expect(localStorage.getItem("email")).toBe(null);
    });
  });
});
