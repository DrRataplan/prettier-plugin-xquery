declare construction preserve;

let $anElement := <someElement>content</someElement>
return ($anElement instance of element(*, xs:anyType)) and fn:true()
