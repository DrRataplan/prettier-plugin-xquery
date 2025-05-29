declare function local:doReplace (
  $input as xs:string?,
  $pattern as xs:string,
  $replacement as xs:string
) as xs:string {
  fn:replace($input, $pattern, $replacement)
};

<result> <para>{
    fn:replace("ThiY Ybcd.", "Y", "Q")
  }</para> <para>{
    local:doReplace("ThiY iY a abYY.", "Y", "Q")
  }</para> </result>, fn:replace(
  "ThiY abcdY.",
  "Y",
  "Q"
), local:doReplace("ThiY iY a abYY.", "Y", "Q")
