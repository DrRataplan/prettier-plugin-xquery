(
  every
    $s in
    tokenize(
      "ក៿,កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវឝឞសហឡអឣឤឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳ឴឵ាិីឹឺុូួើឿៀេែៃោៅំះៈ៉៊់៌៍៎៏័៑្៓។៕៖ៗ៘៙៚៛ៜ៝៞៟០១២៣៤៥៦៧៨៩៪៫៬៭៮៯៰៱៲៳៴៵៶៷៸៹៺៻៼៽៾៿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsKhmer}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsKhmer}+)$"))
  )
