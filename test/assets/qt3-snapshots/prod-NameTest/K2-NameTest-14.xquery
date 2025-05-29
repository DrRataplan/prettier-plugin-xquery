declare
  variable $var := <elem>text<a/><!-- a comment --><b/><?target data?><c/><![CDATA[more text]]></elem>;

$var/child::*
