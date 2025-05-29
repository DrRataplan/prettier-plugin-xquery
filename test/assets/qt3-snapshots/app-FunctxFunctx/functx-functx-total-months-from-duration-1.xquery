declare namespace functx = "http://www.example.com/";

(:~ : The total number of months in a yearMonthDuration : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_total-months-from-duration.html : @param $duration the duration :)
declare function functx:total-months-from-duration (
  $duration as xs:yearMonthDuration?
) as xs:decimal? {
  $duration div xs:yearMonthDuration("P1M")
};

(functx:total-months-from-duration(xs:yearMonthDuration("P18M")))
