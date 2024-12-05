window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  window.ui = SwaggerUIBundle({
    url: "../swagger.json", // Path to your Swagger JSON file
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",

    // Add a requestInterceptor to set the Origin header
    requestInterceptor: (request) => {
      request.headers.Origin = "https://quentincloudsnow.github.io"; // Replace with your origin URL
      return request;
    }
  });

  //</editor-fold>
};
