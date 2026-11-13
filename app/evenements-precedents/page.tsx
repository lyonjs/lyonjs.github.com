import { redirect } from 'next/navigation';

// Re-evaluated hourly so the redirect follows the current year after New Year.
export const revalidate = 3600;

export default function Page() {
  redirect(`/evenements-precedents/${new Date().getFullYear()}`);
}
