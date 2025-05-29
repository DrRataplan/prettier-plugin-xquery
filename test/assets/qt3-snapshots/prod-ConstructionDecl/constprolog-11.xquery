declare construction preserve;

let $anElement := element someElement {
    "some content"
  }
return fn:not($anElement instance of element(*, xs:anyType))
