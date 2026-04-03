'use client';

import { ComponentProps, useState } from 'react';
import { Check } from '../../../modules/icons/Check';
import { Copy } from '../../../modules/icons/Copy';
import { ExternalLink } from '../../../modules/icons/ExternalLink';
import styles from './page.module.css';
import { mailTemplates } from '../../../data/mail-templates';

const TEMPLATES = Object.keys(mailTemplates);

function buildParams(template: string, contactName: string, talkTitle: string): URLSearchParams {
  const params = new URLSearchParams({ template });
  if (contactName) params.set('contactName', contactName);
  if (talkTitle) params.set('talkTitle', talkTitle);
  return params;
}

function toURI(map: Record<string, string>): string {
  return Object.entries(map)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
}

function CopyableZone({ label, value, valueClassName }: { label: string; value: string; valueClassName?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className={styles.previewField}>
      <span className={styles.previewLabel}>{label}</span>
      <div className={styles.previewZone}>
        <pre className={valueClassName}>{value}</pre>
        <button type="button" className={styles.copyButton} onClick={handleCopy} aria-label={`Copier ${label}`}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? ' Copié' : ' Copier'}
        </button>
      </div>
    </div>
  );
}

export default function AdminMail() {
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const [contactName, setContactName] = useState('');
  const [talkTitle, setTalkTitle] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = async () => {
    setPreviewLoading(true);
    const params = buildParams(template, contactName, talkTitle);
    const response = await fetch(`/api/mail?${params}`);
    const data = await response.json();
    if (response.ok) {
      setSubject(data.subject);
      setBody(data.body);
      setShowPreview(true);
    }
    setPreviewLoading(false);
  };

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = async (e) => {
    e.preventDefault();
    setLoading(true);
    const params = buildParams(template, contactName, talkTitle);
    const response = await fetch(`/api/mail?${params}`);
    const data = await response.json();
    if (response.ok) {
      const mailToParams = {
        cc: 'contact@lyonjs.org',
        subject: data.subject,
        body: data.body,
      };
      window.location.href = `mailto:${encodeURIComponent(email)}?${toURI(mailToParams)}`;
    }
    setLoading(false);
  };

  return (
    <main className={styles.container}>
      <h1>Générateur de mail</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="template">Template</label>
          <select id="template" value={template} onChange={(e) => setTemplate(e.target.value)}>
            {TEMPLATES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email du destinataire</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="contactName">Nom du contact (optionnel)</label>
          <input id="contactName" type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} />
        </div>

        <div className={styles.field}>
          <label htmlFor="talkTitle">Titre du talk (optionnel)</label>
          <input id="talkTitle" type="text" value={talkTitle} onChange={(e) => setTalkTitle(e.target.value)} />
        </div>

        <div className={styles.formActions}>
          <button type="button" className={styles.buttonSecondary} onClick={handlePreview} disabled={previewLoading}>
            {previewLoading ? 'Chargement...' : 'Prévisualiser le mail'}
          </button>
          <button type="submit" className={styles.buttonIcon} disabled={loading} aria-label="Ouvrir le mail">
            {loading ? (
              '…'
            ) : (
              <>
                Ouvrir le mail <ExternalLink size={16} />
              </>
            )}
          </button>
        </div>
      </form>

      {showPreview && (
        <section className={styles.previewSection} aria-label="Aperçu du mail">
          <CopyableZone label="Objet" value={subject} valueClassName={styles.previewSubjectText} />
          <CopyableZone label="Contenu" value={body} valueClassName={styles.previewBodyText} />
        </section>
      )}
    </main>
  );
}
