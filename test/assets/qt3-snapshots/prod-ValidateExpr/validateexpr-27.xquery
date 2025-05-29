import schema namespace t =  "http://www.example.com/ns/test";

declare variable $input-context := (/);

let $doc := validate strict { $input-context }
let $anid := id("anid", $doc)
return <results> 
                    <para1 idcount="{
    count(id("anid", $doc))
  }"/> 
                    <para2 idcount="{
    count(id("anid2", $doc))
  }"/> 
                    <para2 idcount="{
    count(id("34", $doc))
  }"/> 
                    <para3 idcount="{
    count(id("anid3", $doc))
  }"/> 
                    <para3 idcount="{
    count(id("anid4 anid5", $doc))
  }"/> 
               </results>
