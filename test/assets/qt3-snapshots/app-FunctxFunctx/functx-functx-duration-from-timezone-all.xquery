declare namespace functx = "http://www.example.com/";

(:~
 : Converts a timezone like "-05:00" or "Z" into xs:dayTimeDuration : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_duration-from-timezone.html : @param $timezone the time zone, in (+|-)HH:MM format
 :)
declare function functx:duration-from-timezone (
  $timezone as xs:string
) as xs:dayTimeDuration {
  xs:dayTimeDuration(
    if (not(matches($timezone, "Z|[\+\-]\d{2}:\d{2}"))) then
      error(xs:QName("functx:Invalid_Timezone_Value"))
    else if ($timezone = "Z") then
      "PT0S"
    else
      replace($timezone, "\+?(\d{2}):\d{2}", "PT$1H")
  )
};

(
  functx:duration-from-timezone("Z"),
  functx:duration-from-timezone("-05:00"),
  functx:duration-from-timezone("+09:00")
)
