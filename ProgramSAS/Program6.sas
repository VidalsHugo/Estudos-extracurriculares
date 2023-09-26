DATA sales;
INPUT Name$ Sales_1-Sales_4;
Total = Sales_1+Sales_2+Sales_3+Sales_4;
CARDS;
Greg 10 2 40 0
Jhon 15 5 10 100
Lisa 50 10 15 50
Mark 20 0 5 20
;
RUN;