declare construction strip;

let $anElement := element someElement {
    "some content"
  }
return ($anElement instance of element(*, xs:untyped)) and fn:true()
