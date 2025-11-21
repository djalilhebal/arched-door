(function loadUmami() {
  const script = document.createElement('script');
  script.src = 'https://cloud.umami.is/script.js';
  script.defer = true;
  script.dataset.websiteId = '044fcbc1-be44-47b0-9874-13c0350dda39';
  // We set domains so it won't run during local dev.
  script.dataset.domains = 'arched-door.netlify.app';

  document.head.appendChild(script);
})();
