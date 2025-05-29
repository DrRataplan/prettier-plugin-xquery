declare default element namespace "http://example.com/0";

declare copy-namespaces preserve ,  no-inherit;

declare namespace a = "http://example.com/1";
declare namespace b = "http://example.com/2";

declare function local:in-scope-namespace-bindings ($arg) {
  for $i in in-scope-prefixes($arg)
  order by $i
  return concat(
      "xmlns",
      if (string-length($i) = 0) then
        ""
      else
        ":",
      $i,
      '="',
      namespace-uri-for-prefix($i, $arg),
      '"'
    )
};

<a:outer b:outer="attr" xmlns:c="http://example.com/3" c:outer="attr">
  <inner a="a:attr" b="b:attr" />
</a:outer>/(
  local:in-scope-namespace-bindings(.),
  "|",
  local:in-scope-namespace-bindings((./*)[1])
)
