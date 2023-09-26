DATA dates;
INPUT name$ bday date11.;
CARDS;
Hugo 8 Oct 2000
Igor 8 Oct 2000
Max 21 Mar 2001
;
RUN;
PROC PRINT DATA=dates;
FORMAT bday date9.;
RUN;