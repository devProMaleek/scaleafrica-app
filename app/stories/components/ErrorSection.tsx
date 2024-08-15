import React from "react";
import ErrorMessage from "../../components/ErrorMessage";

type Props = {
  error?: Error;
};

export default function ErrorSection({ error }: Props) {
  if (error) {
    return <ErrorMessage message="Error fetching the stories page data" />;
  }
  return null;
}
