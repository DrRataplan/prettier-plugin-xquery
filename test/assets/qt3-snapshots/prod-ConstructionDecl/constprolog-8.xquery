declare construction strip;

let $anElement := <someElement>some content</someElement>
return fn:not($anElement instance of element(*, xs:untyped))
