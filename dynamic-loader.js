const customElementSources = [
    'https://kaitos-scroll-to-top.vercel.app/custom-element.mjs',
];

for (const customElementSource of customElementSources) {
    const script = document.createElement('script');
    script.src = customElementSource;
    script.type = 'module';
    document.head.appendChild(script);
}