declare construction preserve;

let $anElement := element someElement {
    "some content"
  }
return ($anElement instance of element(*, xs:anyType)) or fn:false()
