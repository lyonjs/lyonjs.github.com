import { redirect } from 'next/navigation';

export default function Page() {
  redirect(`/evenements-precedents/${new Date().getFullYear()}`);
}
