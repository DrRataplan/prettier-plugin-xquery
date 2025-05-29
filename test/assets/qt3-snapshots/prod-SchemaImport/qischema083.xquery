import schema namespace one =  "http://www.w3.org/XQueryTest/q083one" at  "SchemaImport/qischema083-1.xsd";
import schema namespace two =  "http://www.w3.org/XQueryTest/q083two" at  "SchemaImport/qischema083-2.xsd";

validate strict {
  <one:one> 
        		<two:two> 
        			<two:three /> 
        			<two:three /> 
        			<two:three /> 
        		</two:two> 
        	</one:one>
  }
