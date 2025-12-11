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


// bchic.js (Temporärer Test-Code)

(function() {
    // --- START: Code zum Testen der Mintlify Events ---

    // 1. Sicherstellen, dass das `bchic` Objekt auf dem window existiert.
    window.bchic = window.bchic || {};

    // 2. Die Event-Funktion definieren, die Mintlify aufrufen wird.
    //    Wir fangen das Event ab und loggen es in die Konsole.
    window.bchic.event = function(eventPayload) {
        console.log('[bchic Test] Mintlify Event empfangen:', eventPayload);
    };

    // --- ENDE: Code zum Testen ---

    // Dein ursprünglicher Code zum Laden des Haupt-Analytics-Skripts
    var script = document.createElement('script');
    script.src = 'https://analytics.bchic.de/script.js';
    script.defer = true;

    // WICHTIG: Füge hier deine tatsächliche Website-ID ein!
    script.setAttribute('data-website-id', 'ee491184-2c23-4d95-85bf-0dd28f37635a');

    document.head.appendChild(script);
})();