var Node = function(){

	this.children= [];
	this.last_char=false;
	this.cont=0;	
};

function add_(word, node=this.root){

	char_pos=word.charCodeAt(0) - 'a'.charCodeAt(0);
 
    if(node.last_char==true && word.length>1){
        node.cont++;
    };

	if(word.length==1){

        if(word[0]=="a"){
            node.children[0]=new Array("a", new Node());
            node.last_char=true;
            node.cont++;
			return;
		};

		if(node.children[char_pos]==null){ 

			node.children[char_pos]=new Array(word[0], new Node());
			node.last_char=true;
			node.cont++;
			return;

		}else{

            if(node.children[char_pos][0]==word[0]){
                node.last_char=true;
                node.cont++;
            };            

			return;
		};

	}else{

        if(word[0]=="a"){
            node.children[0]=new Array("a", new Node());
        }else{

            if(node.children[char_pos]==null){        
                node.children[char_pos]=new Array(word[0], new Node());
            };
	    };
	};

	word=word.substring(1);
	
	add_(word, node.children[char_pos][1]);

};

function find_(word, node=this.root){

	//console.log("word: " + word[0]);	

	if(word.length==0 && node.last_char==false) return node.cont;
	
	char_pos=word.charCodeAt(0) - 'a'.charCodeAt(0);

	if(node.children[char_pos]=='undefined' || node.children[char_pos]=='null' || node.children[char_pos]=== undefined || node.children[char_pos]=== null || node.children[char_pos]==='undefined'){
		
		var cont=0;

		return cont;
	}; 

	if(word[0]==node.children[char_pos][0]){

		word=word.substring(1);

		if(node.last_char==true && word.length==0){
      		return node.cont;
		}else{
			return find_(word, node.children[char_pos][1]);
		};
	};
};

main();

function main(){

	do{
		var n=window.prompt("Insert the number of operations to perform"); //casos de prueba
	}while(n>Math.pow(10,5));

	var i=1;
	node = this.root=new Node(); //declarando el nodo raiz

	while(i<=n){

		do{
			var word='';
			word=window.prompt("Insert the operation "+ i + " to perform");
			word=word.toLowerCase();
		    
		    if(word[0]==='a'){
		        var oper=word.substring(0,3);
		        word=word.substring(4);
		    }else{

			    if(word[0]==='f'){
			        var oper=word.substring(0,4);
			        word=word.substring(5);
			 	};
			};

		}while(word.length>21 && (!(oper==='find' || oper==='add')));

		if(oper==='add'){
			add_(word, this.node);			
		}else{

			var cant_pal=find_(word, this.node);
			console.log(cant_pal);
		};

		i++;
	};
};