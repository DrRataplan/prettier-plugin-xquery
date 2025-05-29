declare construction preserve;

let $anElement := <someElement>some content</someElement>
return fn:not($anElement instance of element(*, xs:anyType))
