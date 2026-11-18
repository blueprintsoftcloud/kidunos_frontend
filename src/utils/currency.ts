export type StoreCurrency = "AED";

export const getStoreCurrency = (_currency?: string | null): StoreCurrency => "AED";

export const formatCurrency = (
  amount: number,
  currency?: string | null,
): string => {
  const code = getStoreCurrency(currency);
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: code,
  }).format(amount);
};
