DATA sales;
INPUT Name$ Sales_1-Sales_4;
total=Sales_1+Sales_2+Sales_3+Sales_4;
CARDS;
Greg 10 2 40 0
Jhon 15 5 10 100
Lisa 50 10 15 50
Mark 20 0 5 20
;

/* Tipo 1 */
proc sql;
select total from sales
where total > 50;

/* Tipo 2 */
proc print data=sales(where=(total>50));

/* Tipo 3 */
proc print data=sales;
where total>50;
run;