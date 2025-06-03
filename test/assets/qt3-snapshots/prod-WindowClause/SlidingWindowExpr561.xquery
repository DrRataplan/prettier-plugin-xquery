declare variable $input := <Events>
  <EventList>
    <DATA action="leave" datetime="2022-02-04 15:00:00" name="mr john" />
    <DATA action="leave" datetime="2022-02-04 15:00:00" name="jane doe" />
    <DATA action="enter" datetime="2022-02-04 14:00:00" name="jane doe" />
    <DATA action="leave" datetime="2022-02-04 13:30:00" name="jane doe" />
    <DATA action="enter" datetime="2022-02-04 13:00:00" name="mr john" />
    <DATA action="enter" datetime="2022-02-04 12:00:00" name="jane doe" />
    <DATA action="leave" datetime="2022-02-03 15:00:00" name="mr john" />
    <DATA action="leave" datetime="2022-02-03 15:00:00" name="jane doe" />
    <DATA action="enter" datetime="2022-02-03 13:00:00" name="mr john" />
    <DATA action="enter" datetime="2022-02-03 12:00:00" name="jane doe" />
  </EventList>
</Events>;

<Result>
  {
    let $trips :=
      (
        for sliding window $window in reverse($input//DATA)
          start $enter when $enter/@action = "enter"
          end $leave when $leave/@action = "leave" and
            $leave/@name = $enter/@name
        let $entry := xs:dateTime(translate($enter/@datetime, " ", "T"))
        let $departure := xs:dateTime(translate($leave/@datetime, " ", "T"))
        let $duration := $departure - $entry
        return <TRIP date="{
              xs:date($entry)
            }" duration="{
              $duration
            }" enter="{
              $enter/@datetime
            }" leave="{
              $leave/@datetime
            }" name="{
              $enter/@name
            }" />
      )
    return for $trip in $trips
      let $tripDate := $trip/@date, $tripName := $trip/@name

      group by $tripDate, $tripName
      let $totalDuration := sum($trip/@duration/xs:dayTimeDuration(.))
      order by $tripDate descending, $tripName
      return <DATA datetime="{
            $tripDate
          }" name="{
            $tripName
          }" totaltime="{
            $totalDuration div xs:dayTimeDuration("PT1H")
          }" />
  }
</Result>
