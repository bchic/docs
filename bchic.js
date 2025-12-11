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


// bchic.js (Finaler Test-Code für localhost und Deployment)

console.log("✅ bchic.js wurde geladen und wird jetzt ausgeführt!");

(function() {
    // Robuster Code zum Abfangen der Events
    window.bchic = window.bchic || function() {
        (window.bchic.q = window.bchic.q || []).push(arguments);
    };

    window.bchic.event = function(eventPayload) {
        console.log('[bchic Test] Mintlify Event empfangen:', eventPayload);
    };

    // Dein ursprünglicher Code zum Laden des Haupt-Analytics-Skripts
    var script = document.createElement('script');
    script.src = 'https://analytics.bchic.de/script.js';
    script.defer = true;

    script.setAttribute('data-website-id', 'ee491184-2c23-4d95-85bf-0dd28f37635a');

    document.head.appendChild(script);
})();