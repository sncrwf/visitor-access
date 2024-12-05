window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: "../swagger.json", // Path to your Swagger spec
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

    // Add a requestInterceptor to include custom headers
    requestInterceptor: (request) => {
      // Add custom CORS headers
      request.headers['Access-Control-Allow-Origin'] = '*';
      request.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
      request.headers['Access-Control-Allow-Headers'] = 'Content-Type';
      return request;
    }
  });
};
