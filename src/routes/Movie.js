import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

const Movie = () => {
  const params = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: params.id,
    },
  });
  console.log(data, loading);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <div>{data.movie.title}</div>;
};

export default Movie;
