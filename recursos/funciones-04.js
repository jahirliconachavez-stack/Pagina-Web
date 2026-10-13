// Reutilizar exactamente el acento y el color de títulos de la plantilla.
        (function () {
            var accent = document.querySelector('#historia .text-primary');
            var ink = document.querySelector('#historia .text-gray-dark');
            if (accent) document.documentElement.style.setProperty('--history-accent', getComputedStyle(accent).color);
            if (ink) document.documentElement.style.setProperty('--history-ink', getComputedStyle(ink).color);
        })();
