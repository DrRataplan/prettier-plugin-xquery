declare construction strip;

let $anElement := element someElement { "some content" }
return fn:not($anElement instance of element(*, xs:untyped))
