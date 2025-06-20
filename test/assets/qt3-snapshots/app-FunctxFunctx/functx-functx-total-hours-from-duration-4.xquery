declare namespace functx = "http://www.example.com/";

(:~
 : The total number of hours in a dayTimeDuration : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_total-hours-from-duration.html : @param $duration the duration
 :)
declare function functx:total-hours-from-duration (
  $duration as xs:dayTimeDuration?
) as xs:decimal? {
  $duration div xs:dayTimeDuration("PT1H")
};

(functx:total-hours-from-duration(xs:dayTimeDuration("P1D")))
