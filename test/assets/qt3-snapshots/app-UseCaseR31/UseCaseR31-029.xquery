declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

let $sats := json-doc("http://www.w3.org/qt3/app/UseCaseR31/satellites-json")(
  "satellites"
)
return map {
  "visible": array { map:keys($sats)[$sats(.)("visible")] },
  "invisible": array { map:keys($sats)[not($sats(.)("visible"))] }
}
