import { Temporal } from 'temporal-polyfill';

const TIMEZONE = 'Europe/Paris';

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: TIMEZONE,
});

const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: TIMEZONE,
});

export function formatEventDate(iso: string): string {
  const instant = Temporal.Instant.from(iso);
  const datePart = dateFormatter.format(instant.epochMilliseconds);
  const timePart = timeFormatter.format(instant.epochMilliseconds);
  return datePart.charAt(0).toUpperCase() + datePart.slice(1) + ' \u00e0 ' + timePart;
}

export function addToDateTime(iso: string, duration: Temporal.DurationLike): string {
  return Temporal.Instant.from(iso).toZonedDateTimeISO(TIMEZONE).add(duration).toInstant().toString();
}

export function subtractFromDateTime(iso: string, duration: Temporal.DurationLike): string {
  return Temporal.Instant.from(iso).toZonedDateTimeISO(TIMEZONE).subtract(duration).toInstant().toString();
}
