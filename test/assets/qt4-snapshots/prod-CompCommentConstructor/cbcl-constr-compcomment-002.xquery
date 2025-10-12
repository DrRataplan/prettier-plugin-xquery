declare function local:tag ($arg) as element() {
  element {"tag"} { $arg }
};

<element>{ comment { "comment", local:tag("--") } }</element>
