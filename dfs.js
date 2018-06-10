main();

function main(){
    var i=window.prompt("i: ");
    var j=window.prompt("j: ");

    var matrix = [];

    for(var k=0; k<i; k++){

        var line = "";
        line=window.prompt("cadena: ");
        line=line.split('');
        matrix.push(line);
    };

    console.log(matrix);

    main2(matrix, i, j);
};

function main2(matrix, i , j){

    var contador=0;
    var maxi=0;

    var A=[-1,0,1,1,-1,-1,0,1];
    var B=[0,1,-1,0,1,-1,-1,1];


    function dfs(matrix, x, y, contador,i,j){

        for(var z=0; z<A.length; z++){

            if(x+A[z] < 0 || x+A[z] >= i || y+B[z] < 0 || y+B[z] >= j){ continue;};

            if (matrix[x+A[z]][y+B[z]]=="1"){

                matrix[x+A[z]][y+B[z]]="x";

                contador++;

                //console.log(matrix);

                contador = dfs(matrix, x+A[z], y+B[z], contador,i,j);
            };	
        };

        return contador;
    };

    for(var x=0; x<i; x++){

        for(var y=0; y<j; y++){

            if (matrix[x][y]=="1"){

                matrix[x][y]="x";

                //console.log(matrix);

                contador++;		

                cont=dfs(matrix, x, y, contador,i,j);

                contador=0;

                if (cont>maxi){
                    maxi=cont;
                };
            };
        };
    };

    console.log(maxi);
};