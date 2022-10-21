import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Courses } from "@/components/Course";
import { Course as CourseType, Response } from "@/types";

type CoursesResponse = Response<CourseType[]>;

export const getStaticProps: GetStaticProps = async () => {
  const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  const response = await fetch(`${api_url}/courses?populate=*`, {
    method: "GET",
  });

  const { data: courses, meta, error }: CoursesResponse = await response.json();

  const status = error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        courses: [],
        meta: {},
      },
    };
  }

  return {
    props: {
      courses,
      meta,
    },
  };
};

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const Home: NextPage<{
  courses: CourseType[];
}> = ({ courses }) => (
  <>
    <Head>
      <title>CoursesBox</title>
      <meta name="description" content="IT courses for everyone" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Courses courses={courses} strapi_url={String(strapi_url)} />
  </>
);

export default Home;
