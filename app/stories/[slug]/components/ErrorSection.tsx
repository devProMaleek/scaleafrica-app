import React from "react";
import ErrorMessage from "@/app/components/ErrorMessage";

type Props = {
  error?: Error;
};

export default function ErrorSection({ error }: Props) {
  if (error) {
    return <ErrorMessage message="Error fetching the story's data" />;
  }
  return null;
}
