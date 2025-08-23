// This is the entire content of bchic.js

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
})();