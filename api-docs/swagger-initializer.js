window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: "https://crossorigin.me/https://sncrwf.github.io/visitor-access/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
};
