/*
(function() {
    // Create a new script element
    var script = document.createElement('script');

    // Set the source and defer attributes
    script.src = 'https://analytics.bchic.de/script.js';
    script.defer = true;

    // Set your custom data-website-id attribute
    script.setAttribute('data-website-id', 'ee491184-2c23-4d95-85bf-0dd28f37635a');

    // Append the script to the head of the document to start loading it
    document.head.appendChild(script);
})();*/


// bchic.js (Kugelsichere Test-Version mit Event-Queue)

(function() {
    // --- START: Robuster Code zum Abfangen der Events ---

    // 1. Erstelle eine Platzhalter-Funktion und eine Event-Warteschlange.
    // Dies stellt sicher, dass window.bchic.event von Anfang an existiert.
    window.bchic = window.bchic || function() {
        (window.bchic.q = window.bchic.q || []).push(arguments);
    };

    // 2. Wir weisen die "event" Methode direkt zu, um sie abzufangen.
    window.bchic.event = function(eventPayload) {
        console.log('[bchic Test] Mintlify Event empfangen:', eventPayload);
    };

    // --- ENDE: Robuster Code ---

    // Dein ursprünglicher Code zum Laden des Haupt-Analytics-Skripts
    var script = document.createElement('script');
    script.src = 'https://analytics.bchic.de/script.js';
    script.defer = true;

    // WICHTIG: Füge hier deine tatsächliche Website-ID ein!
    script.setAttribute('data-website-id', 'ee491184-2c23-4d95-85bf-0dd28f37635a');

    document.head.appendChild(script);
})();