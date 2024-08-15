import { useMemo } from "react";
import { formatDistance } from "date-fns";

export function useFormattedDate(publishedAt: string | undefined) {
  return useMemo(() => {
    if (publishedAt) {
      return formatDistance(new Date(publishedAt), new Date(), {
        addSuffix: true,
        includeSeconds: true,
      });
    }
    return "";
  }, [publishedAt]);
}
