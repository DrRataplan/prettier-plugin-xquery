declare function local:t () {
  text { "" }, text { "[" }, text { "3" }, text { "]" }, text { "" }
};

declare variable $var := (
  text { "" }, text { "[" }, text { "3" }, text { "]" }, text { "" }
);

<out fromFunction="{ local:t() }" fromVariable="{ $var }" />
