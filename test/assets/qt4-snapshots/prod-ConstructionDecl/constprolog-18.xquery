declare construction strip;

let $var := <anElement>Some content</anElement>
return ($var instance of element(*, xs:untyped)) or fn:false()
