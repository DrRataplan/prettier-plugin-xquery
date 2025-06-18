let $var := document {
  <anElement><anInternalElement>element content</anInternalElement></anElement>
}
return fn:root($var)
