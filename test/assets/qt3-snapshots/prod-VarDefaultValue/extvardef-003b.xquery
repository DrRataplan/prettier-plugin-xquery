declare variable $ext as xs:integer* external := (0, 1, 2);

<a>{ sum($ext) }</a>
