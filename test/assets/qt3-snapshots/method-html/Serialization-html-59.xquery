declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "html";
declare option output:indent "yes";
declare option output:version "5";

<html><head /><body><p><?pi data?></p></body></html>
