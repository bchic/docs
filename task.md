# Aufgabe: Dokumentation für das Juni-2026-Release aktualisieren (bchic Analytics Docs, Mintlify)

## Kontext
Dies ist das Mintlify-Doku-Repo von bchic Analytics (cookieless Web-Analytics, DSGVO-nativ). Die Navigation steckt in `docs.json`. Die Doku ist **zweisprachig**: jede Seite existiert unter `de/...` und `en/...`, die Navigation ist pro Sprache gespiegelt. Wir bringen ein großes Release raus und die Doku muss nachgezogen werden.

## WICHTIGE REGELN (gelten für ALLES unten)
1. **Sprache & Stil:** Orientiere dich strikt am Ton, Aufbau und den MDX-Komponenten der **bestehenden Seiten in derselben Gruppe**. Sieh dir vor dem Schreiben jeweils 1–2 Nachbardateien an (z. B. für eine Settings-Seite die bestehenden `de/settings/*`-Seiten) und übernimm deren Struktur, Komponenten (`<Note>`, `<Warning>`, `<Card>`, `<Steps>`, `<Frame>` etc.), Heading-Hierarchie und Tonalität.
2. **Nur Text.** Binde KEINE Inhalts-Screenshots/Bilder ein — die füge ich danach manuell ein. **Ausnahme:** das Titel-/Hero-Bild jeder NEUEN Seite. Dort setzt du einen Platzhalter im selben Format, wie es bestehende Seiten für ihr Titelbild nutzen (schau dir z. B. `de/index` oder `de/plattform/pages/change-impact` an), mit einem klaren Platzhalter-Pfad und einem `{/* TODO: finales Bild einfügen */}`-Kommentar.
3. **Beide Sprachen.** Lege jede neue Seite in `de/` **und** `en/` an (EN inhaltlich übersetzt, im Ton der bestehenden EN-Seiten) und trage sie in **beide** Sprach-Navigationsbäume in `docs.json` ein.
4. **Nichts erfinden.** Nur dokumentieren, was unten beschrieben ist. Wo dir Infos fehlen, setz einen `{/* TODO: ... */}`-Kommentar statt zu raten.
5. **Exakte UI-Labels** verwenden (deutsche Bezeichnungen unten wörtlich übernehmen).

---

## AUFGABE A — Neue Seiten erstellen

### A1) Rollen & Berechtigungen
- **Pfad:** `de/settings/admin/roles-permissions` (+ `en/...`)
- **Inhalt:**
    - Zweck: Berechtigungen pro Rolle im Team verwalten. Zwei Ansichten, oben rechts umschaltbar: **Rollen** (Karten-Übersicht) und **Detailliert** (Berechtigungs-Matrix). Suchfeld „Berechtigung suchen…". Eigene Rollen via **„Neue Rolle erstellen"**. Standard-Rollen lassen sich klonen.
    - **Vier Standard-Rollen:** Kontoinhaber:in (vollständiger Admin-Zugriff), Manager (Team- und Website-Verwaltung), Mitglied (Website-Bearbeitung), Betrachter (nur Leserechte).
    - **Berechtigungs-Kategorien (Detailliert-Ansicht)** mit hierarchischer Vergabe:
      | Kategorie | Anzahl | Kontoinhaber | Manager | Mitglied | Betrachter |
      |---|---|---|---|---|---|
      | Administration | 8 | ✓ | – | – | – |
      | Team-Bearbeitung | 6 | ✓ | ✓ | – | – |
      | Website-Bearbeitung | 8 | ✓ | ✓ | ✓ | – |
      | Website-Anzeige | 25 | ✓ | ✓ | ✓ | ✓ |
    - **Einzel-Berechtigungen je Kategorie:**
        - *Administration:* Team-Einstellungen verwalten, Website-Einstellungen verwalten, Abrechnung verwalten, Nutzung ansehen, Teammitglieder verwalten, Rollen und Berechtigungen verwalten, Navigations-Sidebars verwalten, Google Search Console verwalten.
        - *Team-Bearbeitung:* Teamprofil bearbeiten, Mitglieder einladen, Mitglieder entfernen, Mitgliederrollen bearbeiten, Mitgliederliste ansehen, Mitglieder Details ansehen.
        - *Website-Bearbeitung:* Besucherfilter bearbeiten, Sitemap bearbeiten, URL-Gruppierungsregeln bearbeiten, Datenschutz-Pfad bearbeiten, Funnels bearbeiten, Impact-Berichte bearbeiten, UTM-Berichte bearbeiten, Journeys bearbeiten.
        - *Website-Anzeige (25):* reine Leserechte (z. B. Übersicht ansehen, Besucherfilter ansehen, Dashboard ansehen, …). Die Kategorie als Ganzes beschreiben, **nicht** alle 25 erfinden — nur die genannten Beispiele nennen.
    - **Wichtige Unterscheidung „verwalten" vs. „nutzen":** In der Karten-Ansicht gibt es zusätzlich rollenweise Capability-Toggles: **MCP nutzen**, **Google Search Console nutzen**, **Sidebar anpassen** — diese sind standardmäßig für alle Rollen aktiv. Davon abzugrenzen sind die Admin-Berechtigungen „Google Search Console verwalten" und „Navigations-Sidebars verwalten" (Integration/Defaults konfigurieren = nur Admin). Diese Logik klar erklären: *nutzen/anpassen* = Daten verwenden bzw. eigene Sidebar anpassen (alle Rollen); *verwalten* = Integration einrichten bzw. Rollen-Defaults setzen (Admin).
    - **Cross-Links:** zur MCP-Seite (`mcp-tools`), zur Sidebar-Customizer-Seite und zur GSC-Seite, da diese Berechtigungen genau diese Features steuern.

### A2) Sidebar Customizer
- **Pfad:** `de/settings/admin/sidebar-customizer` (+ `en/...`)
- **Inhalt:**
    - Zweck: Standard-Sidebar **pro Rolle** konfigurieren und Anpassungsberechtigungen verwalten.
    - Rollen-Dropdown zur Auswahl der zu konfigurierenden Rolle.
    - Zwei Toggles: **„Sidebar anpassen erlauben"** (Benutzer dieser Rolle dürfen ihre eigene Sidebar-Navigation anpassen) und **„Business-Abo Seiten in der Navigation anzeigen"** (Default für die Rolle, wenn kein eigenes Setting gesetzt ist).
    - **Standard-Sidebar für [Rolle]:** Konfiguration, die für alle Benutzer der Rolle ohne eigene Anpassung gilt.
    - Bedienung: **Gruppe hinzufügen**, ganze Zeile ziehen zum Sortieren/Verschachteln, Doppelklick zum Umbenennen, Papierkorb zum Entfernen, **Zurücksetzen**, **Speichern**. Live-**Vorschau** rechts.
    - Einträge können Untereinträge haben (z. B. Ereignisse → Ausgehende Links, Scroll Tiefe; Nutzerverhalten → Aktivitätsverlauf, Consent Segmentation, Sitemap; UTM → KI Sichtbarkeit, Conversions) und eine hinterlegte Standard-Unterseite (z. B. Ereignisse → Ereignis Übersicht).
    - **Zusammenhang mit Berechtigungen:** „Navigations-Sidebars verwalten" (Admin) erlaubt das Setzen der Rollen-Defaults hier; „Sidebar anpassen" (Capability) erlaubt Endnutzern das Anpassen der eigenen Sidebar. Auf `roles-permissions` verlinken.

### A3) Google Search Console Integration
- **Pfad:** `de/settings/google-search-console` (+ `en/...`) — in die Gruppe **„Einstellungen & Konfiguration"** (keine neue Untergruppe anlegen).
- **Verfügbarkeit:** In der App unter **Einstellungen → Integrationen**. **Ab Growth-Plan.** Das prominent kennzeichnen (so wie bestehende Seiten Plan-Gating darstellen — vorher prüfen, ob es dafür ein etabliertes Muster/Komponente gibt, z. B. `<Note>` oder ein Plan-Badge).
- **Inhalt:**
    - Einrichtung: Verbindung des Google-Kontos per OAuth unter Einstellungen → Integrationen. Daten werden serverseitig (ClickHouse) gespeichert.
    - Was die Integration liefert: ein GSC-Dashboard mit vier Kernmetriken — **Klicks insgesamt, Impressionen insgesamt, durchschnittliche CTR, durchschnittliche Position** — als umschaltbare Zeitreihe mit Vorperioden-Vergleich, filterbar (z. B. Referrer enthält „google").
    - Außerdem erscheinen GSC-Daten als **„Google"-Tab** im Quellen-Widget (neben Quellen, Channels, UTM Kampagnen, Ausgehende Links).
    - **Berechtigungen:** Nutzung über die Capability „Google Search Console nutzen" (alle Rollen standardmäßig); Einrichten/Verwalten über die Admin-Berechtigung „Google Search Console verwalten". Auf `roles-permissions` verlinken.
    - **MCP:** GSC-Daten sind auch über den MCP-Server abrufbar (siehe `mcp-tools`).

---

## AUFGABE B — Bestehende Seiten aktualisieren
Nur gezielt ergänzen, bestehenden Stil beibehalten. Jeweils DE **und** EN.

1. **`plattform/pages/change-impact`** — Impact misst jetzt zusätzlich die Wirkung pro Marker auf **Core Web Vitals** (z. B. LCP) und auf die **Google-Search-Performance** (Klicks, Impressionen, CTR, Position). Außerdem: Impact-Wirkungsdaten sind über **MCP** abrufbar.
2. **`plattform/pages/user-journey`** — Die Pfad-/Journey-Analyse zeigt jetzt **Events visuell direkt im Pfad** (z. B. ausgehende Link-Klicks): *wo* in der Journey ein Event ausgelöst wird und *wie häufig*. Klick auf einen Schritt öffnet die Ereignis-Details mit Ziel-URLs und Häufigkeit. (Die Journey-Funktion selbst ist nicht neu — neu ist die Event-Visualisierung. Falls „gespeicherte Journeys" noch nicht dokumentiert ist, kurz ergänzen.)
3. **`plattform/ai/mcp-tools`** — Neue MCP-Fähigkeiten: Abruf von **Impact-Daten** und **Google-Search-Console-Daten** über MCP. Hinweis, dass der MCP-Zugriff pro Rolle über „MCP nutzen" gesteuert wird (Link auf `roles-permissions`).
4. **Filter-Seiten** (`filter/aufbau-der-leiste`, `filter/filter-erstellen-und-speichern`) — neuer **globaler Pfad-Filter** (wirkt report-übergreifend), neue **„Alle"-Textsuche** über alle Felder und neuer **REGEX-Operator** auf Filtern.
5. **`plattform/pages/dashboard`** — Länder-Widget mit **Karten-Ansicht** und expandierbarer Vollbild-Ansicht (Liste + Karte); Browser/OS-Aufschlüsselung mit **Versions-Drilldown** („Neu"-Badge für neue Versionen); Quellen-Widget mit **„Google"-Tab** (GSC).

---

## AUFGABE C — Veraltetes aufspüren
Geh **alle** DE- und EN-Doku-Seiten durch und prüfe auf veralteten Inhalt im Licht des Releases:
- Feature-Aufzählungen/„Was du siehst"-Listen, die jetzt unvollständig sind.
- Beschreibungen von Filtern, Rollen, MCP-Tools, Impact, Dashboard-Widgets, die nicht mehr stimmen.
- Plan-/Berechtigungs-Aussagen, die der neuen Rollen-Logik widersprechen.
- Terminologie-Drift (uneinheitliche Feature-Namen).
  Inhaltliche Korrekturen direkt vornehmen; alles Unklare als `{/* TODO: ... */}` markieren statt raten. Am Ende eine **Liste aller geänderten Dateien + Kurzbegründung** ausgeben.

---

## AUFGABE D — Navigation in `docs.json`
Neue „Team & Berechtigungen"-Untergruppe in die bestehende „Admin Settings"-Gruppe einfügen (zwischen „Abrechnung & Konto" und „Compliance & Governance"), und die GSC-Seite in „Einstellungen & Konfiguration" ergänzen. Für **de**:
```json
{
  "group": "Einstellungen & Konfiguration",
  "pages": [
    "de/settings/account-settings",
    "de/settings/organisation-settings",
    "de/settings/website-creation",
    "de/settings/google-search-console"
  ]
},
{
  "group": "Admin Settings",
  "anchor": "Dokumentation",
  "pages": [
    { "group": "Abrechnung & Konto", "pages": ["de/settings/admin/pricing","de/settings/admin/subscription","de/settings/admin/invoices"] },
    { "group": "Team & Berechtigungen", "pages": ["de/settings/admin/roles-permissions","de/settings/admin/sidebar-customizer"] },
    { "group": "Compliance & Governance", "pages": ["de/compliance/usage","de/compliance/links"] }
  ]
}
```
Analog für **en** (`en/settings/google-search-console`, Gruppe „Team & Permissions", `en/settings/admin/roles-permissions`, `en/settings/admin/sidebar-customizer`).
**Flag (nicht ändern, nur melden):** Im EN-Block steht bei „Admin Settings" `"anchor": "Dokumentation"` (deutsches Wort in der EN-Nav) — vermutlich ein Bug; bitte am Ende melden, aber nicht eigenmächtig umbauen.

---

## Liefergegenstand
- 3 neue Seiten × 2 Sprachen (mit Titelbild-Platzhalter).
- Aktualisierte bestehende Seiten (B) in beiden Sprachen.
- `docs.json` aktualisiert (beide Sprachen).
- Abschluss-Report: geänderte/angelegte Dateien, offene `TODO`s, gemeldete Flags.