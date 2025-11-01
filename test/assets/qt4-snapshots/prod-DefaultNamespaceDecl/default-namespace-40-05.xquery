declare default element namespace "http://www.example.com/test";

declare variable $in := <a><b>data</b></a>;

declare variable $out := <e xmlns=""><f>{ string($in//b) }</f></e>;

string($out)
