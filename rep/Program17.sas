data compressed;
input phonen$ 1-15;
/* remove espacos em branco, hifen e parentesis */
phonen = compress(phonen,' -()');
datalines;
(314)456-4768
(314) 453-56 78
;
run;

proc print data=compressed;
run;