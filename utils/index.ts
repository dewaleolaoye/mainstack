import { parseISO, format } from "date-fns";

export function formatAmount(amount: number) {
  const formatted = amount % 1 === 0 ? Number(amount.toFixed(2)) : amount;
  return formatted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatDate(date: string) {
  const value = format(parseISO(date), 'MMM dd,yyyy');
  return value;
}