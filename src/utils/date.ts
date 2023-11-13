import { format } from "date-fns";

export function getCurrentDate() {
    const date = new Date();
    return format(date, 'dd/MM/yyyy')
}