declare namespace functx = "http://www.example.com/";

(:~
 : The total number of years in a yearMonthDuration : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_total-years-from-duration.html : @param $duration the duration
 :)
declare function functx:total-years-from-duration (
  $duration as xs:yearMonthDuration?
) as xs:decimal? {
  $duration div xs:yearMonthDuration("P1Y")
};

(functx:total-years-from-duration(xs:yearMonthDuration("P1Y")))
