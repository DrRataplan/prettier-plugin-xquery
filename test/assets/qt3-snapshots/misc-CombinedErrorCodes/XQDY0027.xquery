declare construction preserve;
declare copy-namespaces no-preserve ,  inherit;

import schema namespace foo =  "http://www.example.org/2007/schema/XQDY0027";

let $x :=
  validate strict { <foo:element attr="foo:notation">foo:qname</foo:element> }
return <a>{ $x }</a>
