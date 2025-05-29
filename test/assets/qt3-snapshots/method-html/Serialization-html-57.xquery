declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace math = "http://www.w3.org/1998/Math/MathML";

declare option output:method "html";
declare option output:indent "yes";
declare option output:version "5.0";
declare option output:suppress-indentation "math:MROW math:MFENCED";

<html><body><div>
	The Fraction 
	@=<math
        xmlns='http://www.w3.org/1998/Math/MathML' display='inline'
        >
		<mfrac>
			<mrow>
				<mi>a</mi>
				<mo>+</mo>
				<mi>b</mi>
			</mrow>
			<mrow>
				<msup>
					<mfenced
                separators=" "
                >
						<mi>c</mi>
						<mo>+</mo>
						<mi>d</mi>
					</mfenced>
					<mi>3</mi>
				</msup>
			</mrow>
		</mfrac>
	</math>=@
	may be real!</div></body></html>
