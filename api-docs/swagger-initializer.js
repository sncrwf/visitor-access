new SwaggerUI({
  url: "https://sncrwf.github.io/visitor-access/swagger.json", // Replace with your Swagger spec URL
  dom_id: '#swagger-ui',
  deepLinking: true,
  presets: [
    SwaggerUI.presets.apis,
    SwaggerUI.SwaggerUIStandalonePreset
  ],
  requestInterceptor: (req) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com"; // Use a public proxy or your custom proxy
    req.url = `${proxyUrl}/${req.url}`; // Prepend the proxy URL to the request
    return req;
  },
});