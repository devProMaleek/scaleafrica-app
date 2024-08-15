import React from "react";
import ErrorMessage from "./ErrorMessage";

type Props = {
  error?: Error;
};

export default function ErrorSection({ error }: Props) {
  if (error) {
    return <ErrorMessage message="Error fetching the homepage data" />;
  }
  return null;
}
