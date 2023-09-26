data bringittogether;
separator='_';
first='	Larry';
last='Larryson	';
/* CATX: concatena duas variaveis utilizando um delimitador/separador entre */
result=catx(separator,first,last);
/* CAT: concatena duas variaveis apenas */
result2=cat(first,last);
/* SCAN: scaneia a variavel e retorna o primeiro ou o segundo nome: '1' ou '2' nesse caso... */
scann=scan(result,1);
drop separator;
run;

proc print data=bringittogether;
run;