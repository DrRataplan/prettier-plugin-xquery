import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict { <s:cuckoo><s:Z>23</s:Z></s:cuckoo> };

$in//s:Z instance of schema-element(s:Z)
