import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { RootState, AppDispatch } from "@/store";
import {
  selectUser,
  registration,
  RegistrationData,
} from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Input, ConditionalFeedback } from "@/components/Input";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

const validationSchema = yup.object().shape({
  password: yup.string().required("Required field!").min(8, "Min length 8!"),
  username: yup.string().required("Required field!").min(6, "Min length 6!"),
  email: yup.string().email("Invalid email!").required("Required field!"),
});

const Registration: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: yupResolver(validationSchema),
  });
  const router = useRouter();

  const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  if (Boolean(jwt) && !error) {
    router.push("/user");
  }

  const onSubmit = (data: RegistrationData) => {
    dispatch(registration(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredTile header="Create an account">
        <h3>
          <ConditionalFeedback>{error?.message}</ConditionalFeedback>
        </h3>
        <StyledInput
          {...register("username")}
          label="username"
          placeholder="username"
          feedback={
            <ConditionalFeedback>
              {errors.username?.message}
            </ConditionalFeedback>
          }
        />
        <StyledInput
          label="email"
          feedback={
            <ConditionalFeedback>{errors.email?.message}</ConditionalFeedback>
          }
          placeholder="email"
          type="email"
          {...register("email")}
        />
        <StyledInput
          label="password"
          type="password"
          placeholder="password"
          {...register("password")}
          feedback={
            <ConditionalFeedback>
              {errors.password?.message}
            </ConditionalFeedback>
          }
        />
        <Button type="submit">Sign Up</Button>
        <h3>
          <Link href="/login" passHref>
            <StyledLink underline>Login</StyledLink>
          </Link>
        </h3>
      </CenteredTile>
    </form>
  );
};

export default Registration;
