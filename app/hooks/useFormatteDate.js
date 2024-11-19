import { useCallback } from "react";

const useFormattedDate = () => {
  const format = useCallback((isoDate) => {
    if (!isoDate) return "Tarih yok";
    const date = new Date(isoDate);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  return { format };
};

export default useFormattedDate;
