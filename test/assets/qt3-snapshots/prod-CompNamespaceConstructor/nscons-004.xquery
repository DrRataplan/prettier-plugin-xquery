declare variable $s := "saxon";

declare variable $xml := "http://www.w3.org/XML/1998/namespace";

<out> <t:e xmlns:t="http://www.example.com/" xml:space="preserve">{
      namespace xml {
        "http://www.w3.org/XML/1998/namespace"
      }, attribute a {
        23
      }, <f />
    }</t:e> </out>
