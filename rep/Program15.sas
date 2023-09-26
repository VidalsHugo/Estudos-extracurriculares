data disease;
input diagcode$;
datalines;
001
290
800
;
run;

proc print data=disease;
run;

proc format; 
value $codetwo
'001' = 'Malaria'
'290' = 'Social Anxiety Disorder'
'800' = 'Leg Injury';
run;

proc print data=disease;
format diagcode $codetwo.;
run;

/* Mostrar CODE e FORMATADO: */

data diseasereal;
set disease;
diagdesc=put(diagcode,$codetwo.);
run;

proc print data=diseasereal;
run;
