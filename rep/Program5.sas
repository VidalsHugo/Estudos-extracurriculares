DATA houseprice;
INFILE '/home/u63599030/houseprice.txt';
INPUT type$ price tax;
ActualAmountTax = ROUND(price * tax);
RUN;