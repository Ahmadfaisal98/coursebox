export const mockUser = {
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYzMDYyNjc1LCJleHAiOjE2NjU2NTQ2NzV9.6_Su5rXd9o8uMRkHC-gAC0aT0dkSD0KoVj2SfEd7Q4I",
  user: {
    id: 2,
    username: "John Doe",
    email: "john@doe.com",
    provider: "local",
    confirmed: true,
    blocked: false,
    createdAt: "2022-09-12T03:46:44.404Z",
    updatedAt: "2022-09-12T03:46:44.404Z",
    password: "tes123!",
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
