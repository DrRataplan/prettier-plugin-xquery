escape-html-uri(
  "javascript:if (navigator.browserLanguage == 'fr') window.open('http://www.example.com/~bébé');"
) eq
  "javascript:if (navigator.browserLanguage == 'fr') window.open('http://www.example.com/~b%C3%A9b%C3%A9');"
