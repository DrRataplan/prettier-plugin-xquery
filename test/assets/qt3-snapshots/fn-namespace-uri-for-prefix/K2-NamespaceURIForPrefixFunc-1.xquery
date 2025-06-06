declare namespace p = "http://www.example.com/B";

namespace-uri-for-prefix(
  "",
  <e xmlns="http://www.example.com/A" xmlns:A="http://www.example.com/C">
    <b xmlns="http://www.example.com/B" xmlns:B="http://www.example.com/C" />
  </e>/p:b
)
