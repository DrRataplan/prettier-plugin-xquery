let $sats := json-doc("satellites.json")("satellites")
return map {
    "visible": array{ map:keys($sats)[$sats(.)("visible")] },
    "invisible": array{ map:keys($sats)[not($sats(.)("visible"))] }
  }
