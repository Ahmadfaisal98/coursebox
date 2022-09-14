export const mockUser = {
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYzMDgxNzk4LCJleHAiOjE2NjU2NzM3OTh9.MqaTY9NtQmFiU0pxs2oI4yMVGY5nSACr0SVVZurcZz",
  user: {
    id: 3,
    username: "John Doe 2",
    email: "john2@doe.com",
    provider: "local",
    confirmed: true,
    blocked: false,
    createdAt: "2022-09-13T15:09:58.723Z",
    updatedAt: "2022-09-13T15:09:58.723Z",
    password: "tes123456!",
  },
};

export const ValidationError = {
  error: {
    status: 400,
    name: "ValidationError",
    message: "Invalid identifier or password",
    details: {},
  },
};

export const RegistrationError = {
  error: {
    status: 400,
    name: "ApplicationError",
    message: "An error occurred during account creation",
    details: {},
  },
};
