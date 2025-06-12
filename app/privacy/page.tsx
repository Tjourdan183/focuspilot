"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  const [language, setLanguage] = useState<"en" | "de">("en");

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground colorVariant="orange" />
      
      <main className="flex flex-col bg-background text-foreground font-sans">
        <section className="max-w-4xl mx-auto py-20 px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">
              {language === "en" ? "Privacy Policy" : "Datenschutzerklärung"}
            </h1>
            <div className="flex gap-2">
              <Button
                variant={language === "en" ? "default" : "outline"}
                onClick={() => setLanguage("en")}
                className="min-w-[100px]"
              >
                English
              </Button>
              <Button
                variant={language === "de" ? "default" : "outline"}
                onClick={() => setLanguage("de")}
                className="min-w-[100px]"
              >
                Deutsch
              </Button>
            </div>
          </div>

          {language === "en" ? (
            <div className="space-y-6 text-muted-foreground">
              <p>
                This Privacy Policy explains how Nexoventis AG ("we", "us", or "our"), located at Blumenrain 45, 2503
                Biel/Bienne, Switzerland, and represented by Thomas Jourdan, processes personal data as the data
                controller when you use the website https://focuspilot.net. For any data protection inquiries, please
                contact us at <a href="mailto:support@focuspilot.net" className="text-primary hover:underline">support@focuspilot.net</a>. 
                Our designated Data Protection Officer is Mr. Samuel Fricker.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Purpose of the Website</h2>
              <p>
                This website is intended to provide information about our product and business and to facilitate
                communication with interested parties and potential investors.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Categories of Personal Data Collected</h2>
              <p>
                We may collect and process the following categories of personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>IP address, device type, browser data, and user behavior (via Google Analytics)</li>
                <li>Technical log files, including access timestamps, HTTP status codes, and accessed URLs</li>
                <li>Cookies used for statistical analysis and to ensure technical functionality</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Purposes of Data Processing</h2>
              <p>
                We process personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To analyze website performance (Art. 31(1)(f) revFADP)</li>
                <li>To communicate with website users (Art. 31(2)(a) revFADP)</li>
                <li>To enhance product visibility</li>
                <li>To maintain investor relations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Legal Basis for Processing</h2>
              <p>
                Data is processed on the basis of our legitimate interests pursuant to Art. 31(1)(f) revFADP, and, where
                applicable, based on your consent in accordance with Art. 31(2)(a) revFADP.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Cookies and Consent</h2>
              <p>
                We only use cookies after obtaining your explicit consent via our cookie banner. You may withdraw or
                modify your consent at any time by adjusting your browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Third-Party Services and International Transfers</h2>
              <p>
                We use Google Analytics. All data is processed exclusively on servers located in Switzerland or the
                European Economic Area (EEA). No personal data is transferred to countries outside of these
                jurisdictions.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Data Retention</h2>
              <p>
                We retain analytics-related personal data for up to 10 years unless you request its earlier deletion.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Your Data Protection Rights</h2>
              <p>You have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To request access to your personal data</li>
                <li>To request correction of inaccurate or incomplete data</li>
                <li>To request deletion of your data</li>
                <li>To object to or restrict the processing of your data</li>
                <li>To lodge a complaint with the competent supervisory authority</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your data, including SSL
                encryption, access restrictions, and secured server infrastructure.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Amendments to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be published on this page.
                Last updated: 12.06.2025.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <address className="not-italic">
                  Nexoventis AG<br />
                  Blumenrain 45<br />
                  2503 Biel/Bienne<br />
                  Email: <a href="mailto:support@focuspilot.net" className="text-primary hover:underline">support@focuspilot.net</a>
                </address>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-muted-foreground">
              <p>
                Diese Datenschutzerklärung informiert Sie darüber, wie die Nexoventis AG ("wir", "uns" oder "unser"),
                Blumenrain 45, 2503 Biel/Bienne, Schweiz, vertreten durch Thomas Jourdan, als Verantwortlicher Ihre
                personenbezogenen Daten auf der Website https://focuspilot.net verarbeitet. Für Datenschutzanfragen
                erreichen Sie uns unter <a href="mailto:support@focuspilot.net" className="text-primary hover:underline">support@focuspilot.net</a>. 
                Unser Datenschutzbeauftragter ist Herr Samuel Fricker.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Zweck der Website</h2>
              <p>
                Die Website dient der Bereitstellung von Informationen über unser Produkt, unserer Tätigkeit sowie der
                Kontaktaufnahme mit Interessenten und Investoren.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Erhobene Datenkategorien</h2>
              <p>
                Wir erheben und verarbeiten folgende Kategorien personenbezogener Daten:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>IP-Adresse, Gerätetyp, Browserinformationen und Nutzungsverhalten (über Google Analytics)</li>
                <li>Technische Logdaten wie Zugriffszeit, HTTP-Statuscode, aufgerufene URL</li>
                <li>Cookies zur statistischen Auswertung und technischen Funktionalität</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Zwecke der Datenverarbeitung</h2>
              <p>
                Ihre Daten werden zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Analyse der Website-Leistung (Art. 31 Abs. 1 lit. f revDSG)</li>
                <li>Kommunikation mit Websitebesuchern (Art. 31 Abs. 2 lit. a revDSG)</li>
                <li>Verbesserung der Sichtbarkeit unseres Produkts</li>
                <li>Investorenkommunikation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
              <p>
                Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses gemäss Art. 31 Abs. 1 lit. f
                revDSG sowie ggf. Ihrer Einwilligung nach Art. 31 Abs. 2 lit. a revDSG.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Cookies und Einwilligung</h2>
              <p>
                Wir verwenden Cookies nur nach Ihrer ausdrücklichen Einwilligung über unser Cookie-Banner. Sie
                können Ihre Einwilligung jederzeit über die Einstellungen Ihres Browsers widerrufen oder anpassen.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Drittanbieter und Datenübermittlung</h2>
              <p>
                Wir verwenden Google Analytics. Die Datenverarbeitung erfolgt ausschliesslich auf Servern in der
                Schweiz oder im EWR. Es findet keine Übermittlung personenbezogener Daten in Drittstaaten statt.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Speicherdauer</h2>
              <p>
                Personenbezogene Analysedaten werden für maximal 10 Jahre gespeichert, sofern keine frühere
                Löschung auf Anfrage erfolgt.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Ihre Rechte</h2>
              <p>Sie haben das Recht:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>auf Auskunft über Ihre gespeicherten Daten</li>
                <li>auf Berichtigung unrichtiger Daten</li>
                <li>auf Löschung Ihrer Daten</li>
                <li>auf Einschränkung oder Widerspruch gegen die Verarbeitung</li>
                <li>eine Beschwerde bei der zuständigen Datenschutzaufsicht einzureichen</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Sicherheit der Daten</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, insbesondere SSL
                Verschlüsselung, Zugriffskontrollen und Server-Absicherung, um Ihre Daten zu schützen.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Diese Erklärung kann von Zeit zu Zeit angepasst werden. Änderungen werden auf dieser Seite
                veröffentlicht. Letzte Aktualisierung: 12.06.2025.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                <address className="not-italic">
                  Nexoventis AG<br />
                  Blumenrain 45<br />
                  2503 Biel/Bienne<br />
                  E-Mail: <a href="mailto:support@focuspilot.net" className="text-primary hover:underline">support@focuspilot.net</a>
                </address>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
} 