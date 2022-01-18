	//apaga a text area
	document.getElementById("textarea").value="";
	resolution = "";
	//variáveis cubo
	//CORES
	var YELLOW=1;
	var WHITE=2;
	var ORANGE=3;
	var RED=4;
	var BLUE=5;
	var GREEN=6;

	//CRUZ STATUS
	var POINT = 101;
	var LINE = 102;
	var ELE = 103;
	var THREE = 104;
	var COMPLETE = 105;
	var TWO = 106;

	//MATRIZES-FACES
	var matrizYellow = [ [], [], [] ];
	var matrizWhite = [ [], [], [] ];
	var matrizOrange = [ [], [], [] ];
	var matrizRed = [ [], [], [] ];
	var matrizBlue = [ [], [], [] ];
	var matrizGreen = [ [], [], [] ];

	matrizYellow[0][0] = YELLOW;
    matrizYellow[0][1] = YELLOW;
    matrizYellow[0][2] = YELLOW;
    matrizYellow[1][0] = YELLOW;
    matrizYellow[1][1] = YELLOW;
    matrizYellow[1][2] = YELLOW;
    matrizYellow[2][0] = YELLOW;
    matrizYellow[2][1] = YELLOW;
    matrizYellow[2][2] = YELLOW;

    matrizWhite[0][0] = WHITE;
    matrizWhite[0][1] = WHITE;
    matrizWhite[0][2] = WHITE;
    matrizWhite[1][0] = WHITE;
    matrizWhite[1][1] = WHITE;
    matrizWhite[1][2] = WHITE;
    matrizWhite[2][0] = WHITE;
    matrizWhite[2][1] = WHITE;
    matrizWhite[2][2] = WHITE;

    matrizOrange[0][0] = ORANGE;
    matrizOrange[0][1] = ORANGE;
    matrizOrange[0][2] = ORANGE;
    matrizOrange[1][0] = ORANGE;
    matrizOrange[1][1] = ORANGE;
    matrizOrange[1][2] = ORANGE;
    matrizOrange[2][0] = ORANGE;
    matrizOrange[2][1] = ORANGE;
    matrizOrange[2][2] = ORANGE;

    matrizRed[0][0] = RED;
    matrizRed[0][1] = RED;
    matrizRed[0][2] = RED;
    matrizRed[1][0] = RED;
    matrizRed[1][1] = RED;
    matrizRed[1][2] = RED;
    matrizRed[2][0] = RED;
    matrizRed[2][1] = RED;
    matrizRed[2][2] = RED;

    matrizBlue[0][0] = BLUE;
    matrizBlue[0][1] = BLUE;
    matrizBlue[0][2] = BLUE;
    matrizBlue[1][0] = BLUE;
    matrizBlue[1][1] = BLUE;
    matrizBlue[1][2] = BLUE;
    matrizBlue[2][0] = BLUE;
    matrizBlue[2][1] = BLUE;
    matrizBlue[2][2] = BLUE;

    matrizGreen[0][0] = GREEN;
    matrizGreen[0][1] = GREEN;
    matrizGreen[0][2] = GREEN;
    matrizGreen[1][0] = GREEN;
    matrizGreen[1][1] = GREEN;
    matrizGreen[1][2] = GREEN;
    matrizGreen[2][0] = GREEN;
    matrizGreen[2][1] = GREEN;
    matrizGreen[2][2] = GREEN;

	//POSIÇÃO DO CANTO PROCURADO
	var position = 0;
	//COR DO CANTO PROCURADO QUE ESTÁ NOS LADOS AMARELO OU BRANCO
	var colorUP = 0;
	//POSIÇÕES DO MEIO PROCURADO
	var pos1 = 0;
	var pos2 = 0;
	//POSIÇÕES PLL
	var pos_Y_B_R;
	var pos_Y_B_O;
	var pos_Y_G_R;
	var pos_Y_G_O;
	var pos_Y_R;
	var pos_Y_O;
	var pos_Y_G;
	var pos_Y_B;
	//SITUACÕES PLL
	var Y_B_R = "";
	var Y_B_O = "";
	var Y_G_R = "";
	var Y_G_O = "";
	var Y_R = "";
	var Y_O = "";
	var Y_G = "";
	var Y_B = "";
	
	//SEQUÊNCIA DE MOVIMENTOS
	var resolution = "";

	//SUPERFÍCIES
	var UP = YELLOW;
	var DOWN = WHITE;
	var FRONT = ORANGE;
	var BACK = RED;
	var RIGHT = BLUE;
	var LEFT = GREEN;

	//variáveis site
	var cor="GRAY";

	var qntWHITE=9;
	var qntYELLOW=9;
	var qntRED=9;
	var qntORANGE=9;
	var qntBLUE=9;
	var qntGREEN=9;

	//Funções para montar o cubo
	function setFace(color1, color2){
		switch (color1){
			case YELLOW:
				switch (color2){
					case BLUE:
						UP = YELLOW;
						DOWN = WHITE;
						FRONT = BLUE;
						BACK = GREEN;
						RIGHT = RED;
						LEFT = ORANGE;
					break;
					case GREEN:
						UP = YELLOW;
						DOWN = WHITE;
						BACK = BLUE;
						FRONT = GREEN;
						LEFT = RED;
						RIGHT = ORANGE;
					break;
					case RED:
						UP = YELLOW;
						DOWN = WHITE;
						BACK = ORANGE;
						FRONT = RED;
						LEFT = BLUE;
						RIGHT = GREEN;
					break;
					case ORANGE:
						UP = YELLOW;
						DOWN = WHITE;
						FRONT = ORANGE;
						BACK = RED;
						RIGHT = BLUE;
						LEFT = GREEN;
					break;
				}
			break;
			case WHITE:
				switch (color2){
					case GREEN:
						UP = WHITE;
						DOWN = YELLOW;
						FRONT = GREEN;
						BACK = BLUE;
						RIGHT = RED;
						LEFT = ORANGE;
					break;
					case BLUE:
						UP = WHITE;
						DOWN = YELLOW;
						FRONT = BLUE;
						BACK = GREEN;
						RIGHT = ORANGE;
						LEFT = RED;
					break;
					case ORANGE:
						UP = WHITE;
						DOWN = YELLOW;
						BACK = RED;
						FRONT = ORANGE;
						LEFT = BLUE;
						RIGHT = GREEN;
					break;
					case RED:
						UP = WHITE;
						DOWN = YELLOW;
						FRONT = RED;
						BACK = ORANGE;
						RIGHT = BLUE;
						LEFT = GREEN;
					break;
				}
			break;
			case BLUE:
				switch (color2){
					case YELLOW:
						BACK = WHITE;
						FRONT = YELLOW;
						DOWN = GREEN;
						UP = BLUE;
						LEFT = RED;
						RIGHT = ORANGE;
					break;
					case WHITE:
						FRONT = WHITE;
						BACK = YELLOW;
						DOWN = GREEN;
						UP = BLUE;
						RIGHT = RED;
						LEFT = ORANGE;
					break;
					case ORANGE:
						RIGHT = WHITE;
						LEFT = YELLOW;
						DOWN = GREEN;
						UP = BLUE;
						BACK = RED;
						FRONT = ORANGE;
					break;
					case RED:
						LEFT = WHITE;
						RIGHT = YELLOW;
						DOWN = GREEN;
						UP = BLUE;
						FRONT = RED;
						BACK = ORANGE;
					break;
				}
			break;
			case GREEN:
				switch (color2){
					case YELLOW:
						BACK = WHITE;
						FRONT = YELLOW;
						UP = GREEN;
						DOWN = BLUE;
						RIGHT = RED;
						LEFT = ORANGE;
					break;
					case WHITE:
						FRONT = WHITE;
						BACK = YELLOW;
						UP = GREEN;
						DOWN = BLUE;
						LEFT = RED;
						RIGHT = ORANGE;
					break;
					case ORANGE:
						LEFT = WHITE;
						RIGHT = YELLOW;
						UP = GREEN;
						DOWN = BLUE;
						BACK = RED;
						FRONT = ORANGE;
					break;
					case RED:
						RIGHT = WHITE;
						LEFT = YELLOW;
						UP = GREEN;
						DOWN = BLUE;
						FRONT = RED;
						BACK = ORANGE;
					break;
				}
			break;
			case RED:
				switch (color2){
					case YELLOW:
						BACK = WHITE;
						FRONT = YELLOW;
						LEFT = GREEN;
						RIGHT = BLUE;
						UP = RED;
						DOWN = ORANGE;
					break;
					case WHITE:
						FRONT = WHITE;
						BACK = YELLOW;
						RIGHT = GREEN;
						LEFT = BLUE;
						UP = RED;
						DOWN = ORANGE;
					break;
					case GREEN:
						LEFT = WHITE;
						RIGHT = YELLOW;
						FRONT = GREEN;
						BACK = BLUE;
						UP = RED;
						DOWN = ORANGE;
					break;
					case BLUE:
						RIGHT = WHITE;
						LEFT = YELLOW;
						BACK = GREEN;
						FRONT = BLUE;
						UP = RED;
						DOWN = ORANGE;
					break;
				}
			break;
			case ORANGE:
				switch (color2){
					case YELLOW:
						BACK = WHITE;
						FRONT = YELLOW;
						RIGHT = GREEN;
						LEFT = BLUE;
						DOWN = RED;
						UP = ORANGE;
					break;
					case WHITE:
						FRONT = WHITE;
						BACK = YELLOW;
						LEFT = GREEN;
						RIGHT = BLUE;
						DOWN = RED;
						UP = ORANGE;
					break;
					case GREEN:
						RIGHT = WHITE;
						LEFT = YELLOW;
						FRONT = GREEN;
						BACK = BLUE;
						DOWN = RED;
						UP = ORANGE;
					break;
					case BLUE:
						LEFT = WHITE;
						RIGHT = YELLOW;
						BACK = GREEN;
						FRONT = BLUE;
						DOWN = RED;
						UP = ORANGE;
					break;
				}
			break;
		}
	}

	function turnAround(color, clockwise){
		var matrizAux = [ [], [], [] ];
		switch(color){
		case YELLOW:
			matrizAux[0][0] = matrizYellow[0][0];
			matrizAux[0][1] = matrizYellow[0][1];
			matrizAux[0][2] = matrizYellow[0][2];
			matrizAux[1][0] = matrizYellow[1][0];
			matrizAux[1][1] = matrizYellow[1][1];
			matrizAux[1][2] = matrizYellow[1][2];
			matrizAux[2][0] = matrizYellow[2][0];
			matrizAux[2][1] = matrizYellow[2][1];
			matrizAux[2][2] = matrizYellow[2][2];
			
			if(clockwise){
				matrizYellow[0][0] = matrizAux[2][0];
				matrizYellow[0][1] = matrizAux[1][0];
				matrizYellow[0][2] = matrizAux[0][0];
				matrizYellow[1][0] = matrizAux[2][1];
				matrizYellow[1][2] = matrizAux[0][1];
				matrizYellow[2][0] = matrizAux[2][2];
				matrizYellow[2][1] = matrizAux[1][2];
				matrizYellow[2][2] = matrizAux[0][2];
			}
			else {
				matrizYellow[0][0] = matrizAux[0][2];
				matrizYellow[0][1] = matrizAux[1][2];
				matrizYellow[0][2] = matrizAux[2][2];
				matrizYellow[1][0] = matrizAux[0][1];
				matrizYellow[1][2] = matrizAux[2][1];
				matrizYellow[2][0] = matrizAux[0][0];
				matrizYellow[2][1] = matrizAux[1][0];
				matrizYellow[2][2] = matrizAux[2][0];
			}
		break;
		case WHITE:
			matrizAux[0][0] = matrizWhite[0][0];
			matrizAux[0][1] = matrizWhite[0][1];
			matrizAux[0][2] = matrizWhite[0][2];
			matrizAux[1][0] = matrizWhite[1][0];
			matrizAux[1][1] = matrizWhite[1][1];
			matrizAux[1][2] = matrizWhite[1][2];
			matrizAux[2][0] = matrizWhite[2][0];
			matrizAux[2][1] = matrizWhite[2][1];
			matrizAux[2][2] = matrizWhite[2][2];
			
			if(clockwise){
				matrizWhite[0][0] = matrizAux[2][0];
				matrizWhite[0][1] = matrizAux[1][0];
				matrizWhite[0][2] = matrizAux[0][0];
				matrizWhite[1][0] = matrizAux[2][1];
				matrizWhite[1][2] = matrizAux[0][1];
				matrizWhite[2][0] = matrizAux[2][2];
				matrizWhite[2][1] = matrizAux[1][2];
				matrizWhite[2][2] = matrizAux[0][2];
			}
			else {
				matrizWhite[0][0] = matrizAux[0][2];
				matrizWhite[0][1] = matrizAux[1][2];
				matrizWhite[0][2] = matrizAux[2][2];
				matrizWhite[1][0] = matrizAux[0][1];
				matrizWhite[1][2] = matrizAux[2][1];
				matrizWhite[2][0] = matrizAux[0][0];
				matrizWhite[2][1] = matrizAux[1][0];
				matrizWhite[2][2] = matrizAux[2][0];
			}
		break;
		case BLUE:
			matrizAux[0][0] = matrizBlue[0][0];
			matrizAux[0][1] = matrizBlue[0][1];
			matrizAux[0][2] = matrizBlue[0][2];
			matrizAux[1][0] = matrizBlue[1][0];
			matrizAux[1][1] = matrizBlue[1][1];
			matrizAux[1][2] = matrizBlue[1][2];
			matrizAux[2][0] = matrizBlue[2][0];
			matrizAux[2][1] = matrizBlue[2][1];
			matrizAux[2][2] = matrizBlue[2][2];
			
			if(clockwise){
				matrizBlue[0][0] = matrizAux[2][0];
				matrizBlue[0][1] = matrizAux[1][0];
				matrizBlue[0][2] = matrizAux[0][0];
				matrizBlue[1][0] = matrizAux[2][1];
				matrizBlue[1][2] = matrizAux[0][1];
				matrizBlue[2][0] = matrizAux[2][2];
				matrizBlue[2][1] = matrizAux[1][2];
				matrizBlue[2][2] = matrizAux[0][2];
			}
			else {
				matrizBlue[0][0] = matrizAux[0][2];
				matrizBlue[0][1] = matrizAux[1][2];
				matrizBlue[0][2] = matrizAux[2][2];
				matrizBlue[1][0] = matrizAux[0][1];
				matrizBlue[1][2] = matrizAux[2][1];
				matrizBlue[2][0] = matrizAux[0][0];
				matrizBlue[2][1] = matrizAux[1][0];
				matrizBlue[2][2] = matrizAux[2][0];
			}
		break;
		case GREEN:
			matrizAux[0][0] = matrizGreen[0][0];
			matrizAux[0][1] = matrizGreen[0][1];
			matrizAux[0][2] = matrizGreen[0][2];
			matrizAux[1][0] = matrizGreen[1][0];
			matrizAux[1][1] = matrizGreen[1][1];
			matrizAux[1][2] = matrizGreen[1][2];
			matrizAux[2][0] = matrizGreen[2][0];
			matrizAux[2][1] = matrizGreen[2][1];
			matrizAux[2][2] = matrizGreen[2][2];
			
			if(clockwise){
				matrizGreen[0][0] = matrizAux[2][0];
				matrizGreen[0][1] = matrizAux[1][0];
				matrizGreen[0][2] = matrizAux[0][0];
				matrizGreen[1][0] = matrizAux[2][1];
				matrizGreen[1][2] = matrizAux[0][1];
				matrizGreen[2][0] = matrizAux[2][2];
				matrizGreen[2][1] = matrizAux[1][2];
				matrizGreen[2][2] = matrizAux[0][2];
			}
			else {
				matrizGreen[0][0] = matrizAux[0][2];
				matrizGreen[0][1] = matrizAux[1][2];
				matrizGreen[0][2] = matrizAux[2][2];
				matrizGreen[1][0] = matrizAux[0][1];
				matrizGreen[1][2] = matrizAux[2][1];
				matrizGreen[2][0] = matrizAux[0][0];
				matrizGreen[2][1] = matrizAux[1][0];
				matrizGreen[2][2] = matrizAux[2][0];
			}
		break;
		case RED:
			matrizAux[0][0] = matrizRed[0][0];
			matrizAux[0][1] = matrizRed[0][1];
			matrizAux[0][2] = matrizRed[0][2];
			matrizAux[1][0] = matrizRed[1][0];
			matrizAux[1][1] = matrizRed[1][1];
			matrizAux[1][2] = matrizRed[1][2];
			matrizAux[2][0] = matrizRed[2][0];
			matrizAux[2][1] = matrizRed[2][1];
			matrizAux[2][2] = matrizRed[2][2];
			
			if(clockwise){
				matrizRed[0][0] = matrizAux[2][0];
				matrizRed[0][1] = matrizAux[1][0];
				matrizRed[0][2] = matrizAux[0][0];
				matrizRed[1][0] = matrizAux[2][1];
				matrizRed[1][2] = matrizAux[0][1];
				matrizRed[2][0] = matrizAux[2][2];
				matrizRed[2][1] = matrizAux[1][2];
				matrizRed[2][2] = matrizAux[0][2];
			}
			else {
				matrizRed[0][0] = matrizAux[0][2];
				matrizRed[0][1] = matrizAux[1][2];
				matrizRed[0][2] = matrizAux[2][2];
				matrizRed[1][0] = matrizAux[0][1];
				matrizRed[1][2] = matrizAux[2][1];
				matrizRed[2][0] = matrizAux[0][0];
				matrizRed[2][1] = matrizAux[1][0];
				matrizRed[2][2] = matrizAux[2][0];
			}
		break;
		case ORANGE:
			matrizAux[0][0] = matrizOrange[0][0];
			matrizAux[0][1] = matrizOrange[0][1];
			matrizAux[0][2] = matrizOrange[0][2];
			matrizAux[1][0] = matrizOrange[1][0];
			matrizAux[1][1] = matrizOrange[1][1];
			matrizAux[1][2] = matrizOrange[1][2];
			matrizAux[2][0] = matrizOrange[2][0];
			matrizAux[2][1] = matrizOrange[2][1];
			matrizAux[2][2] = matrizOrange[2][2];
			
			if(clockwise){
				matrizOrange[0][0] = matrizAux[2][0];
				matrizOrange[0][1] = matrizAux[1][0];
				matrizOrange[0][2] = matrizAux[0][0];
				matrizOrange[1][0] = matrizAux[2][1];
				matrizOrange[1][2] = matrizAux[0][1];
				matrizOrange[2][0] = matrizAux[2][2];
				matrizOrange[2][1] = matrizAux[1][2];
				matrizOrange[2][2] = matrizAux[0][2];
			}
			else {
				matrizOrange[0][0] = matrizAux[0][2];
				matrizOrange[0][1] = matrizAux[1][2];
				matrizOrange[0][2] = matrizAux[2][2];
				matrizOrange[1][0] = matrizAux[0][1];
				matrizOrange[1][2] = matrizAux[2][1];
				matrizOrange[2][0] = matrizAux[0][0];
				matrizOrange[2][1] = matrizAux[1][0];
				matrizOrange[2][2] = matrizAux[2][0];
			}
		break;
		}
	}

	function turnFace(color, clockwise){
	    var matrizAux = [ [], [], [] ];
	  
	    switch (color){
	        case YELLOW:
	            if(clockwise){
	                matrizAux[0][0] = matrizRed[0][0];
	                matrizAux[0][1] = matrizRed[0][1];
	                matrizAux[0][2] = matrizRed[0][2];
	                matrizRed[0][0] = matrizGreen[0][0];
	                matrizRed[0][1] = matrizGreen[0][1];
	                matrizRed[0][2] = matrizGreen[0][2];
	                matrizGreen[0][0] = matrizOrange[0][0];
	                matrizGreen[0][1] = matrizOrange[0][1];
	                matrizGreen[0][2] = matrizOrange[0][2];
	                matrizOrange[0][0] = matrizBlue[0][0];
	                matrizOrange[0][1] = matrizBlue[0][1];
	                matrizOrange[0][2] = matrizBlue[0][2];
	                matrizBlue[0][0] = matrizAux[0][0];
	                matrizBlue[0][1] = matrizAux[0][1];
	                matrizBlue[0][2] = matrizAux[0][2];
	                
					resolution += "Y;";
	            }
	            else { //anti-horário
	                matrizAux[0][0] = matrizRed[0][0];
	                matrizAux[0][1] = matrizRed[0][1];
	                matrizAux[0][2] = matrizRed[0][2];
	                matrizRed[0][0] = matrizBlue[0][0];
	                matrizRed[0][1] = matrizBlue[0][1];
	                matrizRed[0][2] = matrizBlue[0][2];
	                matrizBlue[0][0] = matrizOrange[0][0];
	                matrizBlue[0][1] = matrizOrange[0][1];
	                matrizBlue[0][2] = matrizOrange[0][2];
	                matrizOrange[0][0] = matrizGreen[0][0];
	                matrizOrange[0][1] = matrizGreen[0][1];
	                matrizOrange[0][2] = matrizGreen[0][2];
	                matrizGreen[0][0] = matrizAux[0][0];
	                matrizGreen[0][1] = matrizAux[0][1];
	                matrizGreen[0][2] = matrizAux[0][2];
					
					resolution += "Yl;";
	            }
	            turnAround(YELLOW,clockwise);
	        break;
	        case BLUE:
	            if(clockwise){
	                matrizAux[0][0] = matrizRed[0][0];
	                matrizAux[1][0] = matrizRed[1][0];
	                matrizAux[2][0] = matrizRed[2][0];
	                matrizRed[0][0] = matrizYellow[0][0];
	                matrizRed[1][0] = matrizYellow[1][0];
	                matrizRed[2][0] = matrizYellow[2][0];
	                matrizYellow[0][0] = matrizOrange[2][2];
	                matrizYellow[1][0] = matrizOrange[1][2];
	                matrizYellow[2][0] = matrizOrange[0][2];
	                matrizOrange[2][2] = matrizWhite[0][0];
	                matrizOrange[1][2] = matrizWhite[1][0];
	                matrizOrange[0][2] = matrizWhite[2][0];
	                matrizWhite[0][0] = matrizAux[0][0];
	                matrizWhite[1][0] = matrizAux[1][0];
	                matrizWhite[2][0] = matrizAux[2][0];
					
					resolution += "B;";
	            }
	            else{ //anti-horário
	                matrizAux[0][0] = matrizRed[0][0];
	                matrizAux[1][0] = matrizRed[1][0];
	                matrizAux[2][0] = matrizRed[2][0];
	                matrizRed[0][0] = matrizWhite[0][0];
	                matrizRed[1][0] = matrizWhite[1][0];
	                matrizRed[2][0] = matrizWhite[2][0];
	                matrizWhite[0][0] = matrizOrange[2][2];
	                matrizWhite[1][0] = matrizOrange[1][2];
	                matrizWhite[2][0] = matrizOrange[0][2];
	                matrizOrange[2][2] = matrizYellow[0][0];
	                matrizOrange[1][2] = matrizYellow[1][0];
	                matrizOrange[0][2] = matrizYellow[2][0];
	                matrizYellow[0][0] = matrizAux[0][0];
	                matrizYellow[1][0] = matrizAux[1][0];
	                matrizYellow[2][0] = matrizAux[2][0];
					
					resolution += "Bl;";
	            }
	            turnAround(BLUE,clockwise);
	        break;
	        case GREEN:
	            if(clockwise){
	                matrizAux[0][2] = matrizRed[0][2];
	                matrizAux[1][2] = matrizRed[1][2];
	                matrizAux[2][2] = matrizRed[2][2];
	                matrizRed[0][2] = matrizWhite[0][2];
	                matrizRed[1][2] = matrizWhite[1][2];
	                matrizRed[2][2] = matrizWhite[2][2];
	                matrizWhite[0][2] = matrizOrange[2][0];
	                matrizWhite[1][2] = matrizOrange[1][0];
	                matrizWhite[2][2] = matrizOrange[0][0];
	                matrizOrange[2][0] = matrizYellow[0][2];
	                matrizOrange[1][0] = matrizYellow[1][2];
	                matrizOrange[0][0] = matrizYellow[2][2];
	                matrizYellow[0][2] = matrizAux[0][2];
	                matrizYellow[1][2] = matrizAux[1][2];
	                matrizYellow[2][2] = matrizAux[2][2];
					
					resolution += "G;";
	            }
	            else{ //anti-horário
	                matrizAux[0][2] = matrizRed[0][2];
	                matrizAux[1][2] = matrizRed[1][2];
	                matrizAux[2][2] = matrizRed[2][2];
	                matrizRed[0][2] = matrizYellow[0][2];
	                matrizRed[1][2] = matrizYellow[1][2];
	                matrizRed[2][2] = matrizYellow[2][2];
	                matrizYellow[0][2] = matrizOrange[2][0];
	                matrizYellow[1][2] = matrizOrange[1][0];
	                matrizYellow[2][2] = matrizOrange[0][0];
	                matrizOrange[2][0] = matrizWhite[0][2];
	                matrizOrange[1][0] = matrizWhite[1][2];
	                matrizOrange[0][0] = matrizWhite[2][2];
	                matrizWhite[0][2] = matrizAux[0][2];
	                matrizWhite[1][2] = matrizAux[1][2];
	                matrizWhite[2][2] = matrizAux[2][2];
					
					resolution += "Gl;";
	            }
	            turnAround(GREEN,clockwise);
	        break;
	        case WHITE:
	            if(clockwise){
	                matrizAux[2][0] = matrizRed[2][0];
	                matrizAux[2][1] = matrizRed[2][1];
	                matrizAux[2][2] = matrizRed[2][2];
	                matrizRed[2][0] = matrizBlue[2][0];
	                matrizRed[2][1] = matrizBlue[2][1];
	                matrizRed[2][2] = matrizBlue[2][2];
	                matrizBlue[2][0] = matrizOrange[2][0];
	                matrizBlue[2][1] = matrizOrange[2][1];
	                matrizBlue[2][2] = matrizOrange[2][2];
	                matrizOrange[2][0] = matrizGreen[2][0];
	                matrizOrange[2][1] = matrizGreen[2][1];
	                matrizOrange[2][2] = matrizGreen[2][2];
	                matrizGreen[2][0] = matrizAux[2][0];
	                matrizGreen[2][1] = matrizAux[2][1];
	                matrizGreen[2][2] = matrizAux[2][2];
					
					resolution += "W;";
	            }
	            else{ //anti-horário
	                matrizAux[2][0] = matrizRed[2][0];
	                matrizAux[2][1] = matrizRed[2][1];
	                matrizAux[2][2] = matrizRed[2][2];
	                matrizRed[2][0] = matrizGreen[2][0];
	                matrizRed[2][1] = matrizGreen[2][1];
	                matrizRed[2][2] = matrizGreen[2][2];
	                matrizGreen[2][0] = matrizOrange[2][0];
	                matrizGreen[2][1] = matrizOrange[2][1];
	                matrizGreen[2][2] = matrizOrange[2][2];
	                matrizOrange[2][0] = matrizBlue[2][0];
	                matrizOrange[2][1] = matrizBlue[2][1];
	                matrizOrange[2][2] = matrizBlue[2][2];
	                matrizBlue[2][0] = matrizAux[2][0];
	                matrizBlue[2][1] = matrizAux[2][1];
	                matrizBlue[2][2] = matrizAux[2][2];
					
					resolution += "Wl;";
	            }
	            turnAround(WHITE,clockwise);
	        break;
	        case RED:
	            if(clockwise){
	                matrizAux[0][2] = matrizBlue[0][2];
	                matrizAux[1][2] = matrizBlue[1][2];
	                matrizAux[2][2] = matrizBlue[2][2];
	                matrizBlue[0][2] = matrizWhite[0][0];
	                matrizBlue[1][2] = matrizWhite[0][1];
	                matrizBlue[2][2] = matrizWhite[0][2];
	                matrizWhite[0][0] = matrizGreen[2][0];
	                matrizWhite[0][1] = matrizGreen[1][0];
	                matrizWhite[0][2] = matrizGreen[0][0];
	                matrizGreen[2][0] = matrizYellow[2][2];
	                matrizGreen[1][0] = matrizYellow[2][1];
	                matrizGreen[0][0] = matrizYellow[2][0];
	                matrizYellow[2][2] = matrizAux[0][2];
	                matrizYellow[2][1] = matrizAux[1][2];
	                matrizYellow[2][0] = matrizAux[2][2];
					
					resolution += "R;";
	            }
	            else{ //anti-horário
	                matrizAux[0][2] = matrizBlue[0][2];
	                matrizAux[1][2] = matrizBlue[1][2];
	                matrizAux[2][2] = matrizBlue[2][2];
	                matrizBlue[0][2] = matrizYellow[2][2];
	                matrizBlue[1][2] = matrizYellow[2][1];
	                matrizBlue[2][2] = matrizYellow[2][0];
	                matrizYellow[2][2] = matrizGreen[2][0];
	                matrizYellow[2][1] = matrizGreen[1][0];
	                matrizYellow[2][0] = matrizGreen[0][0];
	                matrizGreen[2][0] = matrizWhite[0][0];
	                matrizGreen[1][0] = matrizWhite[0][1];
	                matrizGreen[0][0] = matrizWhite[0][2];
	                matrizWhite[0][0] = matrizAux[0][2];
	                matrizWhite[0][1] = matrizAux[1][2];
	                matrizWhite[0][2] = matrizAux[2][2];
					
					resolution += "Rl;";
	            }
	            turnAround(RED,clockwise);
	        break;
	        case ORANGE:
	            if(clockwise){
	                matrizAux[0][0] = matrizBlue[0][0];
	                matrizAux[1][0] = matrizBlue[1][0];
	                matrizAux[2][0] = matrizBlue[2][0];
	                matrizBlue[0][0] = matrizYellow[0][2];
	                matrizBlue[1][0] = matrizYellow[0][1];
	                matrizBlue[2][0] = matrizYellow[0][0];
	                matrizYellow[0][2] = matrizGreen[2][2];
	                matrizYellow[0][1] = matrizGreen[1][2];
	                matrizYellow[0][0] = matrizGreen[0][2];
	                matrizGreen[2][2] = matrizWhite[2][0];
	                matrizGreen[1][2] = matrizWhite[2][1];
	                matrizGreen[0][2] = matrizWhite[2][2];
	                matrizWhite[2][0] = matrizAux[0][0];
	                matrizWhite[2][1] = matrizAux[1][0];
	                matrizWhite[2][2] = matrizAux[2][0];
					
	                resolution += "O;";
	            }
	            else{ //anti-horário
	                matrizAux[0][0] = matrizBlue[0][0];
	                matrizAux[1][0] = matrizBlue[1][0];
	                matrizAux[2][0] = matrizBlue[2][0];
	                matrizBlue[0][0] = matrizWhite[2][0];
	                matrizBlue[1][0] = matrizWhite[2][1];
	                matrizBlue[2][0] = matrizWhite[2][2];
	                matrizWhite[2][0] = matrizGreen[2][2];
	                matrizWhite[2][1] = matrizGreen[1][2];
	                matrizWhite[2][2] = matrizGreen[0][2];
	                matrizGreen[2][2] = matrizYellow[0][2];
	                matrizGreen[1][2] = matrizYellow[0][1];
	                matrizGreen[0][2] = matrizYellow[0][0];
	                matrizYellow[0][2] = matrizAux[0][0];
	                matrizYellow[0][1] = matrizAux[1][0];
	                matrizYellow[0][0] = matrizAux[2][0];
					
					resolution += "Ol;";
	            }
	            turnAround(ORANGE,clockwise);
	        break; 
	    }
	}

	function makeWhiteCruz(){
	    var W_R = "";
		var W_O = "";
		var W_G = "";
		var W_B = "";
		
		if((matrizWhite[0][1] == WHITE) && (matrizRed[2][1] == RED)){
			W_R = "OK";
		}

		if((matrizWhite[1][0] == WHITE) && (matrizBlue[2][1] == BLUE)){
			W_B = "OK";
		}

		if((matrizWhite[2][1] == WHITE) && (matrizOrange[2][1] == ORANGE)){
			W_O = "OK";
		}

		if((matrizWhite[1][2] == WHITE) && (matrizGreen[2][1] == GREEN)){
			W_G = "OK";
		}

		if((W_B == "OK") && (W_O == "OK") && (W_G == "OK") && (W_R == "OK")){
			return;
		}
		
		
		while((W_B != "OK") || (W_O != "OK") || (W_G != "OK") || (W_R != "OK")) {
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizWhite[0][1] == WHITE){
					if(matrizRed[2][1] == GREEN){
						turnFace(RED,true);
						turnFace(WHITE,false);
						turnFace(RED,false);
						turnFace(WHITE,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[2][1] == BLUE){
							turnFace(RED,true);
							turnFace(WHITE,true);
							turnFace(RED,false);
							turnFace(WHITE,false);
							W_B = "OK";
						}
						else{
							if(matrizRed[2][1] == ORANGE){
								turnFace(RED,true);
								turnFace(WHITE,true); 
								turnFace(WHITE,true);
								turnFace(RED,false);
								turnFace(WHITE,true); 
								turnFace(WHITE,true);
								W_O = "OK";
							}
							else{
								W_R = "OK";
							}
						}
					}
				}
			}
			else{
				if(matrizWhite[0][1] == WHITE){
					if(matrizRed[2][1] == GREEN){
						turnFace(WHITE,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[2][1] == BLUE){
							turnFace(WHITE,false);
							W_B = "OK";
						}
						else{
							if(matrizRed[2][1] == ORANGE){
								turnFace(WHITE,true); 
								turnFace(WHITE,true);
								W_O = "OK";
							}
							else{
								W_R = "OK";
							}
						}
					}
				}
			}
				
				
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizWhite[1][2] == WHITE){
					if(matrizGreen[2][1] == RED){
						turnFace(GREEN,true);
						turnFace(WHITE,true);
						turnFace(GREEN,false);
						turnFace(WHITE,false);
						W_R = "OK";
					}
					else{
						if(matrizGreen[2][1] == ORANGE){
							turnFace(GREEN,true);
							turnFace(WHITE,false);
							turnFace(GREEN,false);
							turnFace(WHITE,true);
							W_O = "OK";
						}
						else{
							if(matrizGreen[2][1] == BLUE){
								turnFace(GREEN,true);
								turnFace(WHITE,true);
								turnFace(WHITE,true);
								turnFace(GREEN,false);
								turnFace(WHITE,true);
								turnFace(WHITE,true);
								W_B = "OK";
							}
							else{
								W_G = "OK";
							}
						}
					}
				}
			}
			else{
				if(matrizWhite[1][2] == WHITE){
					if(matrizGreen[2][1] == RED){
						turnFace(WHITE,false);
						W_R = "OK";
					}
					else{
						if(matrizGreen[2][1] == BLUE){
							turnFace(WHITE,true); 
							turnFace(WHITE,true);
							W_B = "OK";
						}
						else{
							if(matrizGreen[2][1] == ORANGE){
								turnFace(WHITE,true);
								W_O = "OK";
							}
							else{
								W_G = "OK";
							}
						}
					}
				}
			}
	
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizWhite[2][1] == WHITE){
					if(matrizOrange[2][1] == RED){
						turnFace(ORANGE,true);
						turnFace(WHITE,true);
						turnFace(WHITE,true);
						turnFace(ORANGE,false);
						turnFace(WHITE,true);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizOrange[2][1] == GREEN){
							turnFace(ORANGE,true);
							turnFace(WHITE,true);
							turnFace(ORANGE,false);
							turnFace(WHITE,false);
							W_G = "OK";
						}
						else{
							if(matrizOrange[2][1] == BLUE){
								turnFace(ORANGE,true);
								turnFace(WHITE,false);
								turnFace(ORANGE,false);
								turnFace(WHITE,true);
								W_B = "OK";
							}
							else{
								W_O = "OK";
							}
						}
					}
				}
			}
			else{
				if(matrizWhite[2][1] == WHITE){
					if(matrizOrange[2][1] == RED){
						turnFace(WHITE,true); 
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizOrange[2][1] == BLUE){
							turnFace(WHITE,true); 
							W_B = "OK";
						}
						else{
							if(matrizOrange[2][1] == GREEN){
								turnFace(WHITE,false);
								W_G = "OK";
							}
							else{
								W_O = "OK";
							}
						}
					}
				}
			}
				
				
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizWhite[1][0] == WHITE){
					if(matrizBlue[2][1] == RED){
						turnFace(BLUE,true);
						turnFace(WHITE,false);
						turnFace(BLUE,false);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizBlue[2][1] == GREEN){
							turnFace(BLUE,true);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							turnFace(BLUE,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_G = "OK";
						}
						else{
							if(matrizBlue[2][1] == ORANGE){
								turnFace(BLUE,true);
								turnFace(WHITE,true);
								turnFace(BLUE,false);
								turnFace(WHITE,false);
								W_O = "OK";
							}
							else{
								W_B = "OK";
							}
						}
					}
				}
			}
			else{
				if(matrizWhite[1][0] == WHITE){
					if(matrizBlue[2][1] == RED){
						turnFace(WHITE,true); 
						W_R = "OK";
					}
					else{
						if(matrizBlue[2][1] == ORANGE){
							turnFace(WHITE,false); 
							W_O = "OK";
						}
						else{
							if(matrizBlue[2][1] == GREEN){
								turnFace(WHITE,true);
								turnFace(WHITE,true);
								W_G = "OK";
							}
							else{
								W_B = "OK";
							}
						}
					}
				}
			}
				
				
			if((W_B == "OK") && (W_O == "OK") && (W_G == "OK") && (W_R == "OK")){
				return;
			}
	
			
			if(matrizYellow[0][1] == WHITE){
				if(matrizOrange[0][1] == RED){
					turnFace(YELLOW,true);
					turnFace(YELLOW,true);
					turnFace(RED,true);
					turnFace(RED,true);
					W_R = "OK";
				}
				else{
					if(matrizOrange[0][1] == GREEN){
						turnFace(YELLOW,true);
						turnFace(GREEN,true);
						turnFace(GREEN,true);
						W_G = "OK";
					}
					else{
						if(matrizOrange[0][1] == ORANGE){
							turnFace(ORANGE,true);
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizOrange[0][1] == BLUE){
								turnFace(YELLOW,false);
								turnFace(BLUE,true);
								turnFace(BLUE,true);
								W_B = "OK";
							}
							
						}
					}
				}
			}
	
			
			if(matrizYellow[1][0] == WHITE){
				if(matrizBlue[0][1] == RED){
					turnFace(YELLOW,false);
					turnFace(RED,true);
					turnFace(RED,true);
					W_R = "OK";
				}
				else{
					if(matrizBlue[0][1] == GREEN){
						turnFace(YELLOW,true);
						turnFace(YELLOW,true);
						turnFace(GREEN,true);
						turnFace(GREEN,true);
						W_G = "OK";
					}
					else{
						if(matrizBlue[0][1] == ORANGE){
							turnFace(YELLOW,true);
							turnFace(ORANGE,true);
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizBlue[0][1] == BLUE){
								turnFace(BLUE,true);
								turnFace(BLUE,true);
								W_B = "OK";
							}
						}
					}
				}
			}
	
			
			if(matrizYellow[1][2] == WHITE){
				if(matrizGreen[0][1] == RED){
					turnFace(YELLOW,true);
					turnFace(RED,true);
					turnFace(RED,true);
					W_R = "OK";
				}
				else{
					if(matrizGreen[0][1] == GREEN){
						turnFace(GREEN,true);
						turnFace(GREEN,true);
						W_G = "OK";
					}
					else{
						if(matrizGreen[0][1] == ORANGE){
							turnFace(YELLOW,false);
							turnFace(ORANGE,true);
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizGreen[0][1] == BLUE){
								turnFace(YELLOW,true);
								turnFace(YELLOW,true);
								turnFace(BLUE,true);
								turnFace(BLUE,true);
								W_B = "OK";
							}
						}
					}
				}
			}
	
	
			if(matrizYellow[2][1] == WHITE){
				if(matrizRed[0][1] == RED){
					turnFace(RED,true);
					turnFace(RED,true);
					W_R = "OK";
				}
				else{
					if(matrizRed[0][1] == GREEN){
						turnFace(YELLOW,false);
						turnFace(GREEN,true);
						turnFace(GREEN,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[0][1] == ORANGE){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							turnFace(ORANGE,true);
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizRed[0][1] == BLUE){
								turnFace(YELLOW,true);
								turnFace(BLUE,true);
								turnFace(BLUE,true);
								W_B = "OK";
							}
						}
					}
				}
			}
	
			
			if((W_B == "OK") && (W_O == "OK") && (W_G == "OK") && (W_R == "OK")){
				return;
			}
	
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizOrange[0][1] == WHITE){
					if(matrizYellow[0][1] == RED){
						turnFace(ORANGE,true);
						turnFace(WHITE,false);
						turnFace(BLUE,false);
						turnFace(WHITE,true);
						turnFace(ORANGE,false);
						W_R = "OK";
					}
					else{
						if(matrizYellow[0][1] == GREEN){
							turnFace(ORANGE,false);
							turnFace(GREEN,true);
							turnFace(ORANGE,true);
							W_G = "OK";
						}
						else{
							if(matrizYellow[0][1] == ORANGE){
								turnFace(ORANGE,true);
								turnFace(ORANGE,true);
								W_O = "OK";
							}
							else{
								if(matrizYellow[0][1] == BLUE){
									turnFace(ORANGE,true);
									turnFace(BLUE,false);
									turnFace(ORANGE,false);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizOrange[0][1] == WHITE){
					if(matrizYellow[2][1] == RED){
						turnFace(ORANGE,true);
						turnFace(BLUE,false);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizYellow[0][1] == ORANGE){
							turnFace(ORANGE,false);
							turnFace(GREEN,true);
							turnFace(WHITE,true); 
							W_O = "OK";
						}
						else{
							if(matrizYellow[0][1] == GREEN){
								turnFace(ORANGE,false);
								turnFace(GREEN,true);
								W_G = "OK";
							}
							else{
								if(matrizYellow[0][1] == BLUE){
									turnFace(ORANGE,true);
									turnFace(BLUE,false); 
									W_B = "OK";
								}
							}
						}
					}
				}
			}
				
				
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizOrange[1][0] == WHITE){
					if(matrizGreen[1][2] == RED){
						turnFace(WHITE,true);
						turnFace(GREEN,true);
						turnFace(WHITE,false);
						W_R = "OK";
					}
					else{
						if(matrizGreen[1][2] == GREEN){
							turnFace(GREEN,true);
							W_G = "OK";
						}
						else{
							if(matrizGreen[1][2] == ORANGE){
								turnFace(WHITE,false);
								turnFace(GREEN,true);
								turnFace(WHITE,true);
								W_O = "OK";
							}
							else{
								if(matrizGreen[1][2] == BLUE){
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									turnFace(GREEN,true);
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizOrange[1][0] == WHITE){
					if(matrizGreen[1][2] == RED){
						turnFace(GREEN,true);
						turnFace(WHITE,false);
						W_R = "OK";
					}
					else{
						if(matrizGreen[1][2] == ORANGE){
							turnFace(GREEN,true);
							turnFace(WHITE,true); 
							W_O = "OK";
						}
						else{
							if(matrizGreen[1][2] == GREEN){
								turnFace(GREEN,true);
								W_G = "OK";
							}
							else{
								if(matrizGreen[1][2] == BLUE){
									turnFace(GREEN,true);
									turnFace(WHITE,true); 
									turnFace(WHITE,true); 
									W_B = "OK";
								}
							}
						}
					}
				}
			}
				
	
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizOrange[1][2] == WHITE){
					if(matrizBlue[1][0] == RED){
						turnFace(WHITE,false);
						turnFace(BLUE,false);
						turnFace(WHITE,true);
						W_R = "OK";
					}
						else{
						if(matrizBlue[1][0] == GREEN){
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							turnFace(BLUE,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_G = "OK";
						}
						else{
							if(matrizBlue[1][0] == ORANGE){
								turnFace(WHITE,true);
								turnFace(BLUE,false);
								turnFace(WHITE,false);
								W_O = "OK";
							}
							else{
								if(matrizBlue[1][0] == BLUE){
									turnFace(BLUE,false);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizOrange[1][2] == WHITE){
					if(matrizBlue[1][0] == RED){
						turnFace(BLUE,false);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizBlue[1][0] == ORANGE){
							turnFace(BLUE,false);
							turnFace(WHITE,false); 
							W_O = "OK";
						}
						else{
							if(matrizBlue[1][0] == GREEN){
								turnFace(BLUE,false);
								turnFace(WHITE,true); 
								turnFace(WHITE,true); 
								W_G = "OK";
							}
							else{
								if(matrizBlue[1][0] == BLUE){
									turnFace(BLUE,false);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
	
	
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizOrange[2][1] == WHITE){
					if(matrizWhite[2][1] == RED){
						turnFace(ORANGE,true);
						turnFace(WHITE,true);
						turnFace(GREEN,true);
						turnFace(WHITE,false);
						W_R = "OK";
					}
					else{
						if(matrizWhite[2][1] == GREEN){
							turnFace(ORANGE,true);
							turnFace(GREEN,true);
							W_G = "OK";
						}
						else{
							if(matrizWhite[2][1] == ORANGE){
								turnFace(ORANGE,true);
								turnFace(WHITE,false);
								turnFace(GREEN,true);
								turnFace(WHITE,true);
								W_O = "OK";
							}
							else{
								if(matrizWhite[2][1] == BLUE){
									turnFace(ORANGE,false);
									turnFace(BLUE,false);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizOrange[2][1] == WHITE){
					if(matrizWhite[2][1] == RED){
						turnFace(ORANGE,true);
						turnFace(GREEN,true);
						turnFace(WHITE,false);
						W_R = "OK";
					}
					else{
						if(matrizWhite[2][1] == ORANGE){
							turnFace(ORANGE,true);
							turnFace(GREEN,true);
							turnFace(WHITE,true);
							W_O = "OK";
						}
						else{
							if(matrizWhite[2][1] == GREEN){
								turnFace(ORANGE,true);
								turnFace(GREEN,true);
								W_G = "OK";
							}
							else{
								if(matrizWhite[2][1] == BLUE){
									turnFace(ORANGE,false);
									turnFace(BLUE,false);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
				
	
			if((W_B == "OK") && (W_O == "OK") && (W_G == "OK") && (W_R == "OK")){
				return;
			}
	
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizRed[0][1] == WHITE){
					if(matrizYellow[2][1] == RED){
						turnFace(RED,false);
						turnFace(WHITE,false);
						turnFace(BLUE,true);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizYellow[2][1] == GREEN){
							turnFace(RED,true);
							turnFace(GREEN,false);
							turnFace(RED,false);
							W_G = "OK";
						}
						else{
							if(matrizYellow[2][1] == ORANGE){
								turnFace(RED,true);
								turnFace(WHITE,false);
								turnFace(GREEN,false);
								turnFace(WHITE,true);
								turnFace(RED,false);
								W_O = "OK";
							}
							else{
								if(matrizYellow[2][1] == BLUE){
									turnFace(RED,false);
									turnFace(BLUE,true);
									turnFace(RED,true);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizRed[0][1] == WHITE){
					if(matrizYellow[2][1] == RED){
						turnFace(RED,false);
						turnFace(BLUE,true);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizYellow[2][1] == GREEN){
							turnFace(RED,true);
							turnFace(GREEN,false);
							W_G = "OK";
						}
						else{
							if(matrizYellow[2][1] == ORANGE){
								turnFace(RED,true);
								turnFace(GREEN,false);
								turnFace(WHITE,true);
								W_O = "OK";
							}
							else{
								if(matrizYellow[2][1] == BLUE){
									turnFace(RED,false);
									turnFace(BLUE,true);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizRed[1][0] == WHITE){
					if(matrizBlue[1][2] == RED){
						turnFace(WHITE,false);
						turnFace(BLUE,true);
						turnFace(WHITE,true);
						W_R = "OK";
					}
					else{
						if(matrizBlue[1][2] == BLUE){
							turnFace(BLUE,true);
							W_B = "OK";
						}
						else{
							if(matrizBlue[1][2] == ORANGE){
								turnFace(WHITE,true);
								turnFace(BLUE,true);
								turnFace(WHITE,false);
								W_O = "OK";
							}
							else{
								if(matrizBlue[1][2] == GREEN){
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									turnFace(BLUE,true);
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizRed[1][0] == WHITE){
					if(matrizBlue[1][2] == ORANGE){
						turnFace(BLUE,true);
						turnFace(WHITE,false);
						W_O = "OK";
					}
					else{
						if(matrizBlue[1][2] == RED){
							turnFace(BLUE,true);
							turnFace(WHITE,true); 
							W_R = "OK";
						}
						else{
							if(matrizBlue[1][2] == BLUE){
								turnFace(BLUE,true);
								W_B = "OK";
							}
							else{
								if(matrizBlue[1][2] == GREEN){
									turnFace(BLUE,true);
									turnFace(WHITE,true); 
									turnFace(WHITE,true); 
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizRed[1][2] == WHITE){
					if(matrizGreen[1][0] == ORANGE){
						turnFace(WHITE,false);
						turnFace(GREEN,false);
						turnFace(WHITE,true);
						W_O = "OK";
					}
						else{
						if(matrizGreen[1][0] == BLUE){
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							turnFace(GREEN,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_B = "OK";
						}
						else{
							if(matrizGreen[1][0] == RED){
								turnFace(WHITE,true);
								turnFace(GREEN,false);
								turnFace(WHITE,false);
								W_R = "OK";
							}
							else{
								if(matrizGreen[1][0] == GREEN){
									turnFace(GREEN,false);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizRed[1][2] == WHITE){
					if(matrizGreen[1][0] == ORANGE){
						turnFace(GREEN,false);
						turnFace(WHITE,true);
						W_O = "OK";
					}
					else{
						if(matrizGreen[1][0] == RED){
							turnFace(GREEN,false);
							turnFace(WHITE,false); 
							W_R = "OK";
						}
						else{
							if(matrizGreen[1][0] == BLUE){
								turnFace(GREEN,false);
								turnFace(WHITE,true); 
								turnFace(WHITE,true); 
								W_B = "OK";
							}
							else{
								if(matrizGreen[1][0] == GREEN){
									turnFace(GREEN,false);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizRed[2][1] == WHITE){
					if(matrizWhite[0][1] == ORANGE){
						turnFace(RED,true);
						turnFace(WHITE,true);
						turnFace(BLUE,true);
						turnFace(WHITE,false);
						W_O = "OK";
					}
					else{
						if(matrizWhite[0][1] == BLUE){
							turnFace(RED,true);
							turnFace(BLUE,true);
							W_B = "OK";
						}
						else{
							if(matrizWhite[0][1] == RED){
								turnFace(RED,true);
								turnFace(WHITE,false);
								turnFace(BLUE,true);
								turnFace(WHITE,true);
								W_R = "OK";
							}
							else{
								if(matrizWhite[0][1] == GREEN){
									turnFace(RED,false);
									turnFace(GREEN,false);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizRed[2][1] == WHITE){
					if(matrizWhite[0][1] == ORANGE){
						turnFace(RED,true);
						turnFace(BLUE,true);
						turnFace(WHITE,false);
						W_O = "OK";
					}
					else{
						if(matrizWhite[0][1] == RED){
							turnFace(RED,true);
							turnFace(BLUE,true);
							turnFace(WHITE,true);
							W_R = "OK";
						}
						else{
							if(matrizWhite[0][1] == BLUE){
								turnFace(RED,true);
								turnFace(BLUE,true);
								W_B = "OK";
							}
							else{
								if(matrizWhite[0][1] == GREEN){
									turnFace(RED,false);
									turnFace(GREEN,false);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") && (W_O == "OK") && (W_G == "OK") && (W_R == "OK")){
				return;
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizBlue[0][1] == WHITE){
					if(matrizYellow[1][0] == ORANGE){
						turnFace(BLUE,false);
						turnFace(ORANGE,true);
						turnFace(BLUE,true);
						W_O = "OK";
					}
					else{
						if(matrizYellow[1][0] == BLUE){
							turnFace(BLUE,true);
							turnFace(WHITE,true);
							turnFace(RED,false);
							turnFace(WHITE,false);
							W_B = "OK";
						}
						else{
							if(matrizYellow[1][0] == RED){
								turnFace(BLUE,true);
								turnFace(RED,false);
								turnFace(BLUE,false);
								W_R = "OK";
							}
							else{
								if(matrizYellow[1][0] == GREEN){
									turnFace(BLUE,false);
									turnFace(WHITE,true);
									turnFace(ORANGE,true);
									turnFace(WHITE,false);
									turnFace(BLUE,true);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizBlue[0][1] == WHITE){
					if(matrizYellow[1][0] == ORANGE){
						turnFace(BLUE,false);
						turnFace(ORANGE,true);
						W_O = "OK";
					}
					else{
						if(matrizYellow[1][0] == BLUE){
							turnFace(BLUE,false);
							turnFace(ORANGE,true);
							turnFace(WHITE,true);
							W_B = "OK";
						}
						else{
							if(matrizYellow[1][0] == RED){
								turnFace(BLUE,true);
								turnFace(RED,false);
								W_R = "OK";
							}
							else{
								if(matrizYellow[1][0] == GREEN){
									turnFace(BLUE,true);
									turnFace(RED,false);
									turnFace(WHITE,true);
									W_G = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizBlue[1][0] == WHITE){
					if(matrizOrange[1][2] == BLUE){
						turnFace(WHITE,false);
						turnFace(ORANGE,true);
						turnFace(WHITE,true);
						W_B = "OK";
					}
					else{
						if(matrizOrange[1][2] == ORANGE){
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizOrange[1][2] == GREEN){
								turnFace(WHITE,true);
								turnFace(ORANGE,true);
								turnFace(WHITE,false);
								W_G = "OK";
							}
							else{
								if(matrizOrange[1][2] == RED){
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									turnFace(ORANGE,true);
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									W_R = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizBlue[1][0] == WHITE){
					if(matrizOrange[1][2] == BLUE){
						turnFace(ORANGE,true);
						turnFace(WHITE,true);
						W_B = "OK";
					}
					else{
						if(matrizOrange[1][2] == ORANGE){
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizOrange[1][2] == GREEN){
								turnFace(ORANGE,true);
								turnFace(WHITE,false);
								W_G = "OK";
							}
							else{
								if(matrizOrange[1][2] == RED){
									turnFace(ORANGE,true);
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									W_R = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizBlue[1][2] == WHITE){
					if(matrizRed[1][0] == GREEN){
						turnFace(WHITE,false);
						turnFace(RED,false);
						turnFace(WHITE,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[1][0] == ORANGE){
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							turnFace(RED,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_O = "OK";
						}
						else{
							if(matrizRed[1][0] == BLUE){
								turnFace(WHITE,true);
								turnFace(RED,false);
								turnFace(WHITE,false);
								W_B = "OK";
							}
							else{
								if(matrizRed[1][0] == RED){
									turnFace(RED,false);
									W_R = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizBlue[1][2] == WHITE){
					if(matrizRed[1][0] == GREEN){
						turnFace(RED,false);
						turnFace(WHITE,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[1][0] == ORANGE){
							turnFace(RED,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_O = "OK";
						}
						else{
							if(matrizRed[1][0] == BLUE){
								turnFace(RED,false);
								turnFace(WHITE,false);
								W_B = "OK";
							}
							else{
								if(matrizRed[1][0] == RED){
									turnFace(RED,false);
									W_R = "OK";
								}
							}
						}
					}
				}
			}
				
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizBlue[2][1] == WHITE){
					if(matrizWhite[1][0] == GREEN){
						turnFace(BLUE,true);
						turnFace(WHITE,true);
						turnFace(ORANGE,true);
						turnFace(WHITE,false);
						W_G = "OK";
					}
					else{
						if(matrizWhite[1][0] == ORANGE){
							turnFace(BLUE,true);
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizWhite[1][0] == BLUE){
								turnFace(BLUE,true);
								turnFace(WHITE,false);
								turnFace(ORANGE,true);
								turnFace(WHITE,true);
								W_B = "OK";
							}
							else{
								if(matrizWhite[1][0] == RED){
									turnFace(BLUE,false);
									turnFace(RED,false);
									W_R = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizBlue[2][1] == WHITE){
					if(matrizWhite[1][0] == GREEN){
						turnFace(BLUE,true);
						turnFace(ORANGE,true);
						turnFace(WHITE,false);
						W_G = "OK";
					}
					else{
						if(matrizWhite[1][0] == ORANGE){
							turnFace(BLUE,true);
							turnFace(ORANGE,true);
							W_O = "OK";
						}
						else{
							if(matrizWhite[1][0] == BLUE){
								turnFace(BLUE,true);
								turnFace(ORANGE,true);
								turnFace(WHITE,true);
								W_B = "OK";
							}
							else{
								if(matrizWhite[1][0] == RED){
									turnFace(BLUE,false);
									turnFace(RED,false);
									W_R = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") && (W_O == "OK") && (W_G == "OK") && (W_R == "OK")){
				return;
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizGreen[0][1] == WHITE){
					if(matrizYellow[1][2] == RED){
						turnFace(GREEN,false);
						turnFace(RED,true);
						turnFace(GREEN,true);
						W_R = "OK";
					}
					else{
						if(matrizYellow[1][2] == GREEN){
							turnFace(GREEN,true);
							turnFace(WHITE,true);
							turnFace(ORANGE,false);
							turnFace(WHITE,false);
							W_G = "OK";
						}
						else{
							if(matrizYellow[1][2] == ORANGE){
								turnFace(GREEN,true);
								turnFace(ORANGE,false);
								turnFace(GREEN,false);
								W_O = "OK";
							}
							else{
								if(matrizYellow[1][2] == BLUE){
									turnFace(GREEN,false);
									turnFace(WHITE,true);
									turnFace(RED,true);
									turnFace(WHITE,false);
									turnFace(GREEN,true);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizGreen[0][1] == WHITE){
					if(matrizYellow[1][2] == RED){
						turnFace(GREEN,false);
						turnFace(RED,true);
						W_R = "OK";
					}
					else{
						if(matrizYellow[1][2] == GREEN){
							turnFace(GREEN,true);
							turnFace(ORANGE,false);
							turnFace(WHITE,false);
							W_G = "OK";
						}
						else{
							if(matrizYellow[1][2] == ORANGE){
								turnFace(GREEN,true);
								turnFace(ORANGE,false);
								W_O = "OK";
							}
							else{
								if(matrizYellow[1][2] == BLUE){
									turnFace(GREEN,true);
									turnFace(ORANGE,false);
									turnFace(WHITE,true);
									W_B = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizGreen[1][0] == WHITE){
					if(matrizRed[1][2] == GREEN){
						turnFace(WHITE,false);
						turnFace(RED,true);
						turnFace(WHITE,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[1][2] == RED){
							turnFace(RED,true);
							
							W_R = "OK";
						}
						else{
							if(matrizRed[1][2] == BLUE){
								turnFace(WHITE,true);
								turnFace(RED,true);
								turnFace(WHITE,false);
								W_B = "OK";
							}
							else{
								if(matrizRed[1][2] == ORANGE){
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									turnFace(RED,true);
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									W_O = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizGreen[1][0] == WHITE){
					if(matrizRed[1][2] == GREEN){
						turnFace(RED,true);
						turnFace(WHITE,true);
						W_G = "OK";
					}
					else{
						if(matrizRed[1][2] == RED){
							turnFace(RED,true);
							W_R = "OK";
						}
						else{
							if(matrizRed[1][2] == BLUE){
								turnFace(RED,true);
								turnFace(WHITE,false);
								W_B = "OK";
							}
							else{
								if(matrizRed[1][2] == ORANGE){
									turnFace(RED,true);
									turnFace(WHITE,true);
									turnFace(WHITE,true);
									W_O = "OK";
								}
							}
						}
					}
				}
			}
			
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizGreen[1][2] == WHITE){
					if(matrizOrange[1][0] == BLUE){
						turnFace(WHITE,false);
						turnFace(ORANGE,false);
						turnFace(WHITE,true);
						W_B = "OK";
					}
					else{
						if(matrizOrange[1][0] == RED){
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							turnFace(ORANGE,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_R = "OK";
						}
						else{
							if(matrizOrange[1][0] == GREEN){
								turnFace(WHITE,true);
								turnFace(ORANGE,false);
								turnFace(WHITE,false);
								W_G = "OK";
							}
							else{
								if(matrizOrange[1][0] == ORANGE){
									turnFace(ORANGE,false);
									W_O = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizGreen[1][2] == WHITE){
					if(matrizOrange[1][0] == BLUE){
						turnFace(ORANGE,false);
						turnFace(WHITE,true);
						W_B = "OK";
					}
					else{
						if(matrizOrange[1][0] == RED){
							turnFace(ORANGE,false);
							turnFace(WHITE,true);
							turnFace(WHITE,true);
							W_R = "OK";
						}
						else{
							if(matrizOrange[1][0] == GREEN){
								turnFace(ORANGE,false);
								turnFace(WHITE,false);
								W_G = "OK";
							}
							else{
								if(matrizOrange[1][0] == ORANGE){
									turnFace(ORANGE,false);
									W_O = "OK";
								}
							}
						}
					}
				}
			}
				
			
			if((W_B == "OK") || (W_O == "OK") || (W_G == "OK") || (W_R == "OK")){
				if(matrizGreen[2][1] == WHITE){
					if(matrizWhite[1][2] == BLUE){
						turnFace(GREEN,true);
						turnFace(WHITE,true);
						turnFace(RED,true);
						turnFace(WHITE,false);
						W_B = "OK";
					}
					else{
						if(matrizWhite[1][2] == RED){
							turnFace(GREEN,true);
							turnFace(RED,true);
							W_R = "OK";
						}
						else{
							if(matrizWhite[1][2] == GREEN){
								turnFace(GREEN,true);
								turnFace(WHITE,false);
								turnFace(RED,true);
								turnFace(WHITE,true);
								W_G = "OK";
							}
							else{
								if(matrizWhite[1][2] == ORANGE){
									turnFace(GREEN,false);
									turnFace(ORANGE,false);
									W_O = "OK";
								}
							}
						}
					}
				}
			}
			else{
				if(matrizGreen[2][1] == WHITE){
					if(matrizWhite[1][2] == BLUE){
						turnFace(GREEN,true);
						turnFace(RED,true);
						turnFace(WHITE,false);
						W_B = "OK";
					}
					else{
						if(matrizWhite[1][2] == RED){
							turnFace(GREEN,true);
							turnFace(RED,true);
							W_R = "OK";
						}
						else{
							if(matrizWhite[1][2] == GREEN){
								turnFace(GREEN,true);
								turnFace(RED,true);
								turnFace(WHITE,true);
								W_G = "OK";
							}
							else{
								if(matrizWhite[1][2] == ORANGE){
									turnFace(GREEN,false);
									turnFace(ORANGE,false);
									W_O = "OK";
								}
							}
						}
					}
				}
			}
		}
	}

	function findCorner(color1a, color2a, color3a) {
		var color1 = 0;
		var color2 = 0;
		var color3 = 0;
		
		if((color1a == WHITE) || (color1a == YELLOW)) {
			color1 = color1a;
		}
		else {
			if((color1a == BLUE) || (color1a == GREEN)) {
				color2 = color1a;
			}	
			else {
				if((color1a == RED) || (color1a == ORANGE)) {
					color3 = color1a;
				}
			}
		}
		
		if((color2a == WHITE) || (color2a == YELLOW)) {
			color1 = color2a;
		}
		else {
			if((color2a == BLUE) || (color2a == GREEN)) {
				color2 = color2a;
			}	
			else {
				if((color2a == RED) || (color2a == ORANGE)) {
					color3 = color2a;
				}
			}
		}
		
		if((color3a == WHITE) || (color3a == YELLOW)) {
			color1 = color3a;
		}
		else {
			if((color3a == BLUE) || (color3a == GREEN)) {
				color2 = color3a;
			}	
			else {
				if((color3a == RED) || (color3a == ORANGE)) {
					color3 = color3a;
				}
			}
		}
		
		switch(color1) {
		case YELLOW:
			switch(color2) {
			case BLUE:
				switch(color3) {
				case ORANGE:
					//YELLOW
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = YELLOW;
						return;
					}
					//ORANGE
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = ORANGE;
						return;
					}
					//BLUE
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = BLUE;
						return;
					}
				break;
				case RED:
					//YELLOW
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = YELLOW;
						return;
					}
					//RED
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = RED;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = RED;
						return;
					}
					//BLUE
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = BLUE;
						return;
					}
				break;
				}
			break;
			case GREEN:
				switch(color3) {
				case ORANGE:
					//YELLOW
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = YELLOW;
						return;
					}
					//ORANGE
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = ORANGE;
						return;
					}
					//GREEN
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = GREEN;
						return;
					}
				break;
				case RED:
					//YELLOW
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = YELLOW;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = YELLOW;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = YELLOW;
						return;
					}
					//RED
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = RED;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = RED;
						return;
					}
					//GREEN
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = GREEN;
						return;
					}
				break;
				}
			break;
			}
		break;
		case WHITE:
			switch(color2) {
			case BLUE:
				switch(color3) {
				case ORANGE:
					//WHITE
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = WHITE;
						return;
					}
					//ORANGE
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = ORANGE;
						return;
					}
					//BLUE
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = BLUE;
						return;
					}
				break;
				case RED:
					//WHITE
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = WHITE;
						return;
					}
					//RED
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = RED;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = RED;
						return;
					}
					//BLUE
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = BLUE;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = BLUE;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = BLUE;
						return;
					}
				break;
				}
			break;
			case GREEN:
				switch(color3) {
				case ORANGE:
					//WHITE
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = WHITE;
						return;
					}
					//ORANGE
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = ORANGE;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = ORANGE;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = ORANGE;
						return;
					}
					//GREEN
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = GREEN;
						return;
					}
				break;
				case RED:
					//WHITE
					if(matrizYellow[0][0] == color1 && matrizBlue[0][0] == color3 && matrizOrange[0][2] == color2) {
						position = 11;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[0][2] == color1 && matrizOrange[0][0] == color3 && matrizGreen[0][2] == color2) {
						position = 22;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][0] == color1 && matrizRed[0][0] == color3 && matrizBlue[0][2] == color2) {
						position = 33;
						colorUP = WHITE;
						return;
					}
					if(matrizYellow[2][2] == color1 && matrizGreen[0][0] == color3 && matrizRed[0][2] == color2) {
						position = 44;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][0] == color1 && matrizBlue[2][2] == color3 && matrizRed[2][0] == color2) {
						position = 55;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[0][2] == color1 && matrizRed[2][2] == color3 && matrizGreen[2][0] == color2) {
						position = 66;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][0] == color1 && matrizOrange[2][2] == color3 && matrizBlue[2][0] == color2) {
						position = 77;
						colorUP = WHITE;
						return;
					}
					if(matrizWhite[2][2] == color1 && matrizGreen[2][2] == color3 && matrizOrange[2][0] == color2) {
						position = 88;
						colorUP = WHITE;
						return;
					}
					//RED
					if(matrizYellow[0][0] == color3 && matrizBlue[0][0] == color2 && matrizOrange[0][2] == color1) {
						position = 11;
						colorUP = RED;
						return;
					}
					if(matrizYellow[0][2] == color3 && matrizOrange[0][0] == color2 && matrizGreen[0][2] == color1) {
						position = 22;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][0] == color3 && matrizRed[0][0] == color2 && matrizBlue[0][2] == color1) {
						position = 33;
						colorUP = RED;
						return;
					}
					if(matrizYellow[2][2] == color3 && matrizGreen[0][0] == color2 && matrizRed[0][2] == color1) {
						position = 44;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][0] == color3 && matrizBlue[2][2] == color2 && matrizRed[2][0] == color1) {
						position = 55;
						colorUP = RED;
						return;
					}
					if(matrizWhite[0][2] == color3 && matrizRed[2][2] == color2 && matrizGreen[2][0] == color1) {
						position = 66;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][0] == color3 && matrizOrange[2][2] == color2 && matrizBlue[2][0] == color1) {
						position = 77;
						colorUP = RED;
						return;
					}
					if(matrizWhite[2][2] == color3 && matrizGreen[2][2] == color2 && matrizOrange[2][0] == color1) {
						position = 88;
						colorUP = RED;
						return;
					}
					//GREEN
					if(matrizYellow[0][0] == color2 && matrizBlue[0][0] == color1 && matrizOrange[0][2] == color3) {
						position = 11;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[0][2] == color2 && matrizOrange[0][0] == color1 && matrizGreen[0][2] == color3) {
						position = 22;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][0] == color2 && matrizRed[0][0] == color1 && matrizBlue[0][2] == color3) {
						position = 33;
						colorUP = GREEN;
						return;
					}
					if(matrizYellow[2][2] == color2 && matrizGreen[0][0] == color1 && matrizRed[0][2] == color3) {
						position = 44;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][0] == color2 && matrizBlue[2][2] == color1 && matrizRed[2][0] == color3) {
						position = 55;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[0][2] == color2 && matrizRed[2][2] == color1 && matrizGreen[2][0] == color3) {
						position = 66;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][0] == color2 && matrizOrange[2][2] == color1 && matrizBlue[2][0] == color3) {
						position = 77;
						colorUP = GREEN;
						return;
					}
					if(matrizWhite[2][2] == color2 && matrizGreen[2][2] == color1 && matrizOrange[2][0] == color3) {
						position = 88;
						colorUP = GREEN;
						return;
					}
				break;
				}
			break;
			}
		break;
		}
	}

	function U_B_R(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(BACK,false);
			turnFace(DOWN,false);
			turnFace(BACK,true);
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		case "RIGHT":
			turnFace(RIGHT,true);
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
			turnFace(RIGHT,true);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
		break;
		case "FRONT":
			turnFace(BACK,false);
			turnFace(DOWN,false);
			turnFace(BACK,true);
			turnFace(RIGHT,false);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
		break;
		}
	}
	
	function U_B_L(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(LEFT,false);
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			turnFace(LEFT,true);
			turnFace(RIGHT,true);
		break;
		case "RIGHT":
			turnFace(BACK,true);
			turnFace(DOWN,true);
			turnFace(BACK,false);
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
		break;
		case "FRONT":
			turnFace(LEFT,false);
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
			turnFace(LEFT,true);
		break;
		}
	}
	
	function U_F_L(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(LEFT,true);
			turnFace(DOWN,true);
			turnFace(LEFT,false);
			turnFace(RIGHT,false);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
		break;
		case "RIGHT":
			turnFace(LEFT,true);
			turnFace(DOWN,true);
			turnFace(LEFT,false);
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		case "FRONT":
			turnFace(LEFT,true);
			turnFace(DOWN,false);
			turnFace(LEFT,false);
			turnFace(DOWN,true);
			turnFace(RIGHT,false);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
		break;
		}
	}
	
	function U_F_R(colorUP) {
		switch(colorUP){
		case "RIGHT":
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		case "FRONT":
			turnFace(FRONT,true);
			turnFace(DOWN,false);
			turnFace(FRONT,false);
			turnFace(RIGHT,false);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
		break;
		}
	}
	
	function D_F_R(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		case "FRONT":
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		case "RIGHT":
			turnFace(RIGHT,false);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
		break;
		}
	}
	
	function D_F_L(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(DOWN,true);
			D_F_R("UP");
		break;
		case "RIGHT":
			turnFace(DOWN,true);
			turnFace(RIGHT,false);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
		break;
		case "FRONT":
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
		break;
		}
	}
	
	function D_B_R(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(DOWN,false);
			D_F_R("UP");
		break;
		case "RIGHT":
			turnFace(FRONT,true);
			turnFace(DOWN,false);
			turnFace(FRONT,false);
		break;
		case "FRONT":
			turnFace(DOWN,false);
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		}
	}
	
	function D_B_L(colorUP) {
		switch(colorUP){
		case "UP":
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			D_F_R("UP");
		break;
		case "RIGHT":
			turnFace(FRONT,true);
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			turnFace(FRONT,false);
		break;
		case "FRONT":
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
		break;
		}
	}

	function completeWhite() {
		var W_G_O = "";
		var W_G_R = "";
		var W_B_O = "";
		var W_B_R = "";
		
		if((matrizWhite[2][2] == WHITE) && (matrizGreen[2][2] == GREEN) && (matrizOrange[2][0] == ORANGE)){
			W_G_O = "OK";
		}

		if((matrizWhite[0][2] == WHITE) && (matrizGreen[2][0] == GREEN) && (matrizRed[2][2] == RED)){
			W_G_R = "OK";
		}

		if((matrizWhite[2][0] == WHITE) && (matrizBlue[2][0] == BLUE) && (matrizOrange[2][2] == ORANGE)){
			W_B_O = "OK";
		}

		if((matrizWhite[0][0] == WHITE) && (matrizBlue[2][2] == BLUE) && (matrizRed[2][0] == RED)){
			W_B_R = "OK";
		}

		if((W_G_O == "OK") && (W_G_R == "OK") && (W_B_O == "OK") && (W_B_R == "OK")){
			return;
		}
		while((W_G_O != "OK") || (W_G_R != "OK") || (W_B_O != "OK") || (W_B_R != "OK")) {
			//WHITE;BLUE;RED
			findCorner(WHITE, BLUE, RED);
			setFace(WHITE, RED);
			if(position == 11){
				if(colorUP == UP){
					D_B_R("UP");
					W_B_R = "OK";
				}
				else{
					if(colorUP == RIGHT){
						D_B_R("RIGHT");
						W_B_R = "OK";
					}
					else{
						if(colorUP == FRONT){
							D_B_R("FRONT");
							W_B_R = "OK";
						}
					}
				}
			}
			else{
				if(position == 22){
					if(colorUP == UP){
						D_B_L("UP");
						W_B_R = "OK";
					}
					else{
						if(colorUP == RIGHT){
							D_B_L("RIGHT");
							W_B_R = "OK";
						}
						else{
							if(colorUP == FRONT){
								D_B_L("FRONT");
								W_B_R = "OK";
							}
						}
					}
				}
				else{
					if(position == 33){
						if(colorUP == UP){
							D_F_R("UP");
							W_B_R = "OK";
						}
						else{
							if(colorUP == RIGHT){
								D_F_R("RIGHT");
								W_B_R = "OK";
							}
							else{
								if(colorUP == FRONT){
									D_F_R("FRONT");
									W_B_R = "OK";
								}
							}
						}
					}
					else{
						if(position == 44){
							if(colorUP == UP){
								D_F_L("UP");
								W_B_R = "OK";
							}
							else{
								if(colorUP == RIGHT){
									D_F_L("RIGHT");
									W_B_R = "OK";
								}
								else{
									if(colorUP == FRONT){
										D_F_L("FRONT");
										W_B_R = "OK";
									}
								}
							}
						}
						else{
							if(position == 55){
								if(colorUP == UP){
									W_B_R = "OK";
								}
								else{
									if(colorUP == RIGHT){
										U_F_R("RIGHT");
										W_B_R = "OK";
									}
									else{
										if(colorUP == FRONT){
											U_F_R("FRONT");
											W_B_R = "OK";
										}
									}
								}
							}
							else{
								if(position == 66){
									if(colorUP == UP){
										U_F_L("UP");
										W_B_R = "OK";
									}
									else{
										if(colorUP == RIGHT){
											U_F_L("RIGHT");
											W_B_R = "OK";
										}
										else{
											if(colorUP == FRONT){
												U_F_L("FRONT");
												W_B_R = "OK";
											}
										}
									}
								}
								else{
									if(position == 77){
										if(colorUP == UP){
											U_B_R("UP");
											W_B_R = "OK";
										}
										else{
											if(colorUP == RIGHT){
												U_B_R("RIGHT");
												W_B_R = "OK";
											}
											else{
												if(colorUP == FRONT){
													U_B_R("FRONT");
													W_B_R = "OK";
												}
											}
										}
									}
									else{
										if(position == 88){
											if(colorUP == UP){
												U_B_L("UP");
												W_B_R = "OK";
											}
											else{
												if(colorUP == RIGHT){
													U_B_L("RIGHT");
													W_B_R = "OK";
												}
												else{
													if(colorUP == FRONT){
														U_B_L("FRONT");
														W_B_R = "OK";
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			
			//WHITE;GREEN;RED
			findCorner(WHITE, GREEN, RED);
			setFace(WHITE, GREEN);
			if(position == 33){
				if(colorUP == UP){
					D_B_R("UP");
					W_G_R = "OK";
				}
				else{
					if(colorUP == RIGHT){
						D_B_R("RIGHT");
						W_G_R = "OK";
					}
					else{
						if(colorUP == FRONT){
							D_B_R("FRONT");
							W_G_R = "OK";
						}
					}
				}
			}
			else{
				if(position == 11){
					if(colorUP == UP){
						D_B_L("UP");
						W_G_R = "OK";
					}
					else{
						if(colorUP == RIGHT){
							D_B_L("RIGHT");
							W_G_R = "OK";
						}
						else{
							if(colorUP == FRONT){
								D_B_L("FRONT");
								W_G_R = "OK";
							}
						}
					}
				}
				else{
					if(position == 44){
						if(colorUP == UP){
							D_F_R("UP");
							W_G_R = "OK";
						}
						else{
							if(colorUP == RIGHT){
								D_F_R("RIGHT");
								W_G_R = "OK";
							}
							else{
								if(colorUP == FRONT){
									D_F_R("FRONT");
									W_G_R = "OK";
								}
							}
						}
					}
					else{
						if(position == 22){
							if(colorUP == UP){
								D_F_L("UP");
								W_G_R = "OK";
							}
							else{
								if(colorUP == RIGHT){
									D_F_L("RIGHT");
									W_G_R = "OK";
								}
								else{
									if(colorUP == FRONT){
										D_F_L("FRONT");
										W_G_R = "OK";
									}
								}
							}
						}
						else{
							if(position == 66){
								if(colorUP == UP){
									W_G_R = "OK";
								}
								else{
									if(colorUP == RIGHT){
										U_F_R("RIGHT");
										W_G_R = "OK";
									}
									else{
										if(colorUP == FRONT){
											U_F_R("FRONT");
											W_G_R = "OK";
										}
									}
								}
							}
							else{
								if(position == 88){
									if(colorUP == UP){
										U_F_L("UP");
										W_G_R = "OK";
									}
									else{
										if(colorUP == RIGHT){
											U_F_L("RIGHT");
											W_G_R = "OK";
										}
										else{
											if(colorUP == FRONT){
												U_F_L("FRONT");
												W_G_R = "OK";
											}
										}
									}
								}
								else{
									if(position == 55){
										if(colorUP == UP){
											U_B_R("UP");
											W_G_R = "OK";
										}
										else{
											if(colorUP == RIGHT){
												U_B_R("RIGHT");
												W_G_R = "OK";
											}
											else{
												if(colorUP == FRONT){
													U_B_R("FRONT");
													W_G_R = "OK";
												}
											}
										}
									}
									else{
										if(position == 77){
											if(colorUP == UP){
												U_B_L("UP");
												W_G_R = "OK";
											}
											else{
												if(colorUP == RIGHT){
													U_B_L("RIGHT");
													W_G_R = "OK";
												}
												else{
													if(colorUP == FRONT){
														U_B_L("FRONT");
														W_G_R = "OK";
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			//WHITE;BLUE;ORANGE
			findCorner(WHITE, BLUE, ORANGE);
			setFace(WHITE, BLUE);
			if(position == 22){
				if(colorUP == UP){
					D_B_R("UP");
					W_B_O = "OK";
				}
				else{
					if(colorUP == RIGHT){
						D_B_R("RIGHT");
						W_B_O = "OK";
					}
					else{
						if(colorUP == FRONT){
							D_B_R("FRONT");
							W_B_O = "OK";
						}
					}
				}
			}
			else{
				if(position == 44){
					if(colorUP == UP){
						D_B_L("UP");
						W_B_O = "OK";
					}
					else{
						if(colorUP == RIGHT){
							D_B_L("RIGHT");
							W_B_O = "OK";
						}
						else{
							if(colorUP == FRONT){
								D_B_L("FRONT");
								W_B_O = "OK";
							}
						}
					}
				}
				else{
					if(position == 11){
						if(colorUP == UP){
							D_F_R("UP");
							W_B_O = "OK";
						}
						else{
							if(colorUP == RIGHT){
								D_F_R("RIGHT");
								W_B_O = "OK";
							}
							else{
								if(colorUP == FRONT){
									D_F_R("FRONT");
									W_B_O = "OK";
								}
							}
						}
					}
					else{
						if(position == 33){
							if(colorUP == UP){
								D_F_L("UP");
								W_B_O = "OK";
							}
							else{
								if(colorUP == RIGHT){
									D_F_L("RIGHT");
									W_B_O = "OK";
								}
								else{
									if(colorUP == FRONT){
										D_F_L("FRONT");
										W_B_O = "OK";
									}
								}
							}
						}
						else{
							if(position == 77){
								if(colorUP == UP){
									W_B_O = "OK";
								}
								else{
									if(colorUP == RIGHT){
										U_F_R("RIGHT");
										W_B_O = "OK";
									}
									else{
										if(colorUP == FRONT){
											U_F_R("FRONT");
											W_B_O = "OK";
										}
									}
								}
							}
							else{
								if(position == 55){
									if(colorUP == UP){
										U_F_L("UP");
										W_B_O = "OK";
									}
									else{
										if(colorUP == RIGHT){
											U_F_L("RIGHT");
											W_B_O = "OK";
										}
										else{
											if(colorUP == FRONT){
												U_F_L("FRONT");
												W_B_O = "OK";
											}
										}
									}
								}
								else{
									if(position == 88){
										if(colorUP == UP){
											U_B_R("UP");
											W_B_O = "OK";
										}
										else{
											if(colorUP == RIGHT){
												U_B_R("RIGHT");
												W_B_O = "OK";
											}
											else{
												if(colorUP == FRONT){
													U_B_R("FRONT");
													W_B_O = "OK";
												}
											}
										}
									}
									else{
										if(position == 66){
											if(colorUP == UP){
												U_B_L("UP");
												W_B_O = "OK";
											}
											else{
												if(colorUP == RIGHT){
													U_B_L("RIGHT");
													W_B_O = "OK";
												}
												else{
													if(colorUP == FRONT){
														U_B_L("FRONT");
														W_B_O = "OK";
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			
			//WHITE;GREEN;ORANGE
			findCorner(WHITE, GREEN, ORANGE);
			setFace(WHITE, ORANGE);
			if(position == 44){
				if(colorUP == UP){
					D_B_R("UP");
					W_G_O = "OK";
				}
				else{
					if(colorUP == RIGHT){
						D_B_R("RIGHT");
						W_G_O = "OK";
					}
					else{
						if(colorUP == FRONT){
							D_B_R("FRONT");
							W_G_O = "OK";
						}
					}
				}
			}
			else{
				if(position == 33){
					if(colorUP == UP){
						D_B_L("UP");
						W_G_O = "OK";
					}
					else{
						if(colorUP == RIGHT){
							D_B_L("RIGHT");
							W_G_O = "OK";
						}
						else{
							if(colorUP == FRONT){
								D_B_L("FRONT");
								W_G_O = "OK";
							}
						}
					}
				}
				else{
					if(position == 22){
						if(colorUP == UP){
							D_F_R("UP");
							W_G_O = "OK";
						}
						else{
							if(colorUP == RIGHT){
								D_F_R("RIGHT");
								W_G_O = "OK";
							}
							else{
								if(colorUP == FRONT){
									D_F_R("FRONT");
									W_G_O = "OK";
								}
							}
						}
					}
					else{
						if(position == 11){
							if(colorUP == UP){
								D_F_L("UP");
								W_G_O = "OK";
							}
							else{
								if(colorUP == RIGHT){
									D_F_L("RIGHT");
									W_G_O = "OK";
								}
								else{
									if(colorUP == FRONT){
										D_F_L("FRONT");
										W_G_O = "OK";
									}
								}
							}
						}
						else{
							if(position == 88){
								if(colorUP == UP){
									W_G_O = "OK";
								}
								else{
									if(colorUP == RIGHT){
										U_F_R("RIGHT");
										W_G_O = "OK";
									}
									else{
										if(colorUP == FRONT){
											U_F_R("FRONT");
											W_G_O = "OK";
										}
									}
								}
							}
							else{
								if(position == 77){
									if(colorUP == UP){
										U_F_L("UP");
										W_G_O = "OK";
									}
									else{
										if(colorUP == RIGHT){
											U_F_L("RIGHT");
											W_G_O = "OK";
										}
										else{
											if(colorUP == FRONT){
												U_F_L("FRONT");
												W_G_O = "OK";
											}
										}
									}
								}
								else{
									if(position == 66){
										if(colorUP == UP){
											U_B_R("UP");
											W_G_O = "OK";
										}
										else{
											if(colorUP == RIGHT){
												U_B_R("RIGHT");
												W_G_O = "OK";
											}
											else{
												if(colorUP == FRONT){
													U_B_R("FRONT");
													W_G_O = "OK";
												}
											}
										}
									}
									else{
										if(position == 55){
											if(colorUP == UP){
												U_B_L("UP");
												W_G_O = "OK";
											}
											else{
												if(colorUP == RIGHT){
													U_B_L("RIGHT");
													W_G_O = "OK";
												}
												else{
													if(colorUP == FRONT){
														U_B_L("FRONT");
														W_G_O = "OK";
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	function invertSecondRowPiece(){
		turnFace(RIGHT,true);
		turnFace(UP,false);
		turnFace(RIGHT,false);
		turnFace(UP,true);
		turnFace(FRONT,false);
		turnFace(UP,true);
		turnFace(UP,true);
		turnFace(FRONT,true);
		turnFace(UP,true);
		turnFace(UP,true);
		turnFace(FRONT,false);
		turnFace(UP,true);
		turnFace(FRONT,true);
	}

	function completeSecondRowPiece(side){
		if(side == true){
			turnFace(UP,true);
			turnFace(RIGHT,true);
			turnFace(UP,false);
			turnFace(RIGHT,false);
			turnFace(UP,false);
			turnFace(FRONT,false);
			turnFace(UP,true);
			turnFace(FRONT,true);
		}
		else{
			turnFace(UP,false);
			turnFace(LEFT,false);
			turnFace(UP,true);
			turnFace(LEFT,true);
			turnFace(UP,true);
			turnFace(FRONT,true);
			turnFace(UP,false);
			turnFace(FRONT,false);
		}
	}

	function completeSecondRow(){
		var B_R = "";
		var R_G = "";
		var G_O = "";
		var O_B = "";
		
		if(matrizBlue[1][2] == BLUE && matrizRed[1][0] == RED){
			B_R = "OK";
		}
		if(matrizRed[1][2] == RED && matrizGreen[1][0] == GREEN){
			R_G = "OK";
		}
		if(matrizGreen[1][2] == GREEN && matrizOrange[1][0] == ORANGE){
			G_O = "OK";
		}
		if(matrizOrange[1][2] == ORANGE && matrizBlue[1][0] == BLUE){
			O_B = "OK";
		}

		if(B_R == "OK" && R_G == "OK" && G_O == "OK" && O_B == "OK"){
			return;
		}

		//(matrizOrange[1][0] != ORANGE) || (matrizGreen[1][2] != GREEN) || (matrizGreen[1][0] != GREEN) || (matrizRed[1][2] != RED) || (matrizRed[1][0] != RED) || (matrizBlue[1][2] != BLUE) || (matrizBlue[1][0] != BLUE) || (matrizOrange[1][2] != ORANGE)
		
		while((B_R != "OK") || (R_G != "OK") || (G_O != "OK") || (O_B != "OK")){
			while(((matrizYellow[0][1] != YELLOW) && (matrizOrange[0][1] != YELLOW)) || ((matrizYellow[2][1] != YELLOW) && (matrizRed[0][1] != YELLOW)) || ((matrizYellow[1][0] != YELLOW) && (matrizBlue[0][1] != YELLOW)) || ((matrizYellow[1][2] != YELLOW) && (matrizGreen[0][1] != YELLOW))){
				if(matrizYellow[0][1] == RED){
					if(matrizOrange[0][1] == BLUE){
						turnFace(YELLOW,false);
						setFace(YELLOW,BLUE);
						completeSecondRowPiece(true);
						B_R = "OK";
					}
					else{
						if(matrizOrange[0][1] == GREEN){
							turnFace(YELLOW,true);
							setFace(YELLOW,GREEN);
							completeSecondRowPiece(false);
							R_G = "OK";
						}
					}
				}
				if(matrizYellow[0][1] == ORANGE){
					if(matrizOrange[0][1] == BLUE){
						turnFace(YELLOW,false);
						setFace(YELLOW,BLUE);
						completeSecondRowPiece(false);
						O_B = "OK";
					}
					else{
						if(matrizOrange[0][1] == GREEN){
							turnFace(YELLOW,true);
							setFace(YELLOW,GREEN);
							completeSecondRowPiece(true);
							G_O = "OK";
						}
					}
				}
				if(matrizYellow[0][1] == BLUE){
					if(matrizOrange[0][1] == ORANGE){
						setFace(YELLOW,ORANGE);
						completeSecondRowPiece(true);
						O_B = "OK";
					}
					else{
						if(matrizOrange[0][1] == RED){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,RED);
							completeSecondRowPiece(false);
							B_R = "OK";
						}
					}
				}
				if(matrizYellow[0][1] == GREEN){
					if(matrizOrange[0][1] == ORANGE){
						setFace(YELLOW,ORANGE);
						completeSecondRowPiece(false);
						G_O = "OK";
					}
					else{
						if(matrizOrange[0][1] == RED){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,RED);
							completeSecondRowPiece(true);
							R_G = "OK";
						}
					}
				}

				if(B_R == "OK" && R_G == "OK" && G_O == "OK" && O_B == "OK"){
					return;
				}

				if(matrizYellow[2][1] == RED){
					if(matrizRed[0][1] == BLUE){
						turnFace(YELLOW,true);
						setFace(YELLOW,BLUE);
						completeSecondRowPiece(true);
						B_R = "OK";
					}
					else{
						if(matrizRed[0][1] == GREEN){
							turnFace(YELLOW,false);
							setFace(YELLOW,GREEN);
							completeSecondRowPiece(false);
							R_G = "OK";
						}
					}
				}
				if(matrizYellow[2][1] == ORANGE){
					if(matrizRed[0][1] == BLUE){
						turnFace(YELLOW,true);
						setFace(YELLOW,BLUE);
						completeSecondRowPiece(false);
						O_B = "OK";
					}
					else{
						if(matrizRed[0][1] == GREEN){
							turnFace(YELLOW,false);
							setFace(YELLOW,GREEN);
							completeSecondRowPiece(true);
							G_O = "OK";
						}
					}
				}
				if(matrizYellow[2][1] == BLUE){
					if(matrizRed[0][1] == RED){
						setFace(YELLOW,RED);
						completeSecondRowPiece(false);
						B_R = "OK";
					}
					else{
						if(matrizRed[0][1] == ORANGE){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,ORANGE);
							completeSecondRowPiece(true);
							O_B = "OK";
						}
					}
				}
				if(matrizYellow[2][1] == GREEN){
					if(matrizRed[0][1] == RED){
						setFace(YELLOW,RED);
						completeSecondRowPiece(true);
						R_G = "OK";
					}
					else{
						if(matrizRed[0][1] == ORANGE){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,ORANGE);
							completeSecondRowPiece(false);
							G_O = "OK";
						}
					}
				}

				if(B_R == "OK" && R_G == "OK" && G_O == "OK" && O_B == "OK"){
					return;
				}

				if(matrizYellow[1][2] == BLUE){
					if(matrizGreen[0][1] == RED){
						turnFace(YELLOW,true);
						setFace(YELLOW,RED);
						completeSecondRowPiece(false);
						B_R = "OK";
					}
					else{
						if(matrizGreen[0][1] == ORANGE){
							turnFace(YELLOW,false);
							setFace(YELLOW,ORANGE);
							completeSecondRowPiece(true);
							O_B = "OK";
						}
					}
				}
				if(matrizYellow[1][2] == GREEN){
					if(matrizGreen[0][1] == RED){
						turnFace(YELLOW,true);
						setFace(YELLOW,RED);
						completeSecondRowPiece(true);
						R_G = "OK";
					}
					else{
						if(matrizGreen[0][1] == ORANGE){
							turnFace(YELLOW,false);
							setFace(YELLOW,ORANGE);
							completeSecondRowPiece(false);
							G_O = "OK";
						}
					}
				}
				if(matrizYellow[1][2] == RED){
					if(matrizGreen[0][1] == GREEN){
						setFace(YELLOW,GREEN);
						completeSecondRowPiece(false);
						R_G = "OK";
					}
					else{
						if(matrizGreen[0][1] == BLUE){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,BLUE);
							completeSecondRowPiece(true);
							B_R = "OK";
						}
					}
				}
				if(matrizYellow[1][2] == ORANGE){
					if(matrizGreen[0][1] == GREEN){
						setFace(YELLOW,GREEN);
						completeSecondRowPiece(true);
						G_O = "OK";
					}
					else{
						if(matrizGreen[0][1] == BLUE){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,BLUE);
							completeSecondRowPiece(false);
							O_B = "OK";
						}
					}
				}

				if(B_R == "OK" && R_G == "OK" && G_O == "OK" && O_B == "OK"){
					return;
				}

				if(matrizYellow[1][0] == BLUE){
					if(matrizBlue[0][1] == ORANGE){
						turnFace(YELLOW,true);
						setFace(YELLOW,ORANGE);
						completeSecondRowPiece(true);
						O_B = "OK";
					}
					else{
						if(matrizBlue[0][1] == RED){
							turnFace(YELLOW,false);
							setFace(YELLOW,RED);
							completeSecondRowPiece(false);
							B_R = "OK";
						}
					}
				}
				if(matrizYellow[1][0] == GREEN){
					if(matrizBlue[0][1] == ORANGE){
						turnFace(YELLOW,true);
						setFace(YELLOW,ORANGE);
						completeSecondRowPiece(false);
						G_O = "OK";
					}
					else{
						if(matrizBlue[0][1] == RED){
							turnFace(YELLOW,false);
							setFace(YELLOW,RED);
							completeSecondRowPiece(true);
							R_G = "OK";
						}
					}
				}
				if(matrizYellow[1][0] == RED){
					if(matrizBlue[0][1] == BLUE){
						setFace(YELLOW,BLUE);
						completeSecondRowPiece(true);
						B_R = "OK";
					}
					else{
						if(matrizBlue[0][1] == GREEN){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,GREEN);
							completeSecondRowPiece(false);
							R_G = "OK";
						}
					}
				}
				if(matrizYellow[1][0] == ORANGE){
					if(matrizBlue[0][1] == BLUE){
						setFace(YELLOW,BLUE);
						completeSecondRowPiece(false);
						O_B = "OK";
					}
					else{
						if(matrizBlue[0][1] == GREEN){
							turnFace(YELLOW,true);
							turnFace(YELLOW,true);
							setFace(YELLOW,GREEN);
							completeSecondRowPiece(true);
							G_O = "OK";
						}
					}
				}

				if(B_R == "OK" && R_G == "OK" && G_O == "OK" && O_B == "OK"){
					return;
				}
			}
			
			if((matrizBlue[1][0] == ORANGE) && (matrizOrange[1][2] == BLUE)){
				setFace(YELLOW,ORANGE);
				invertSecondRowPiece();
				O_B = "OK";
			}
			else{
				if(((matrizBlue[1][0] != BLUE) || (matrizOrange[1][2] != ORANGE))){
					setFace(YELLOW,ORANGE);
					completeSecondRowPiece(true);
				}
			}
			
			if((matrizRed[1][0] == BLUE) && (matrizBlue[1][2] == RED)){
				setFace(YELLOW,BLUE);
				invertSecondRowPiece();
				B_R = "OK";
			}
			else{
				if(((matrizRed[1][0] != RED) || (matrizBlue[1][2] != BLUE))){
					setFace(YELLOW,BLUE);
					completeSecondRowPiece(true);
				}
			}
			
			if((matrizGreen[1][0] == RED) && (matrizRed[1][2] == GREEN)){
				setFace(YELLOW,RED);
				invertSecondRowPiece();
				R_G = "OK";
			}
			else{
				if(((matrizGreen[1][0] != GREEN) || (matrizRed[1][2] != RED))){
					setFace(YELLOW,RED);
					completeSecondRowPiece(true);
				}
			}
			
			if((matrizOrange[1][0] == GREEN) && (matrizGreen[1][2] == ORANGE)){
				setFace(YELLOW,GREEN);
				invertSecondRowPiece();
				G_O = "OK";
			}
			else{
				if(((matrizOrange[1][0] != ORANGE) || (matrizGreen[1][2] != GREEN))){
					setFace(YELLOW,GREEN);
					completeSecondRowPiece(true);
				}
			}
			
			if(B_R == "OK" && R_G == "OK" && G_O == "OK" && O_B == "OK"){
				return;
			}
		}
	}

	function formulaYellowCruz(){
		
		turnFace(FRONT,true);
		turnFace(RIGHT,true);
		turnFace(UP,true);
		turnFace(RIGHT,false);
		turnFace(UP,false);
		turnFace(FRONT,false);
		
	}
	
	function makeYellowCruz(){
		
		var Y_1 = "";
		var Y_2 = "";
		var Y_3 = "";
		var Y_4 = "";
		
		if(matrizYellow[0][1] == YELLOW){
			Y_1 = "OK";
		}
		else{
			Y_1 = "";
		}
		if(matrizYellow[1][2] == YELLOW){
			Y_2 = "OK";
		}
		else{
			Y_2 = "";
		}
		if(matrizYellow[2][1] == YELLOW){
			Y_3 = "OK";
		}
		else{
			Y_3 = "";
		}
		if(matrizYellow[1][0] == YELLOW){
			Y_4 = "OK";
		}
		else{
			Y_4 = "";
		}
		
		if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
			return;
		}
		
		while((Y_1 != "OK") || (Y_2 != "OK") || (Y_3 != "OK") || (Y_4 != "OK")){
			//ELE
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 != "OK") && (Y_4 != "OK")){
				setFace(YELLOW, BLUE);
				formulaYellowCruz();
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
			
			if((Y_3 == "OK") && (Y_2 == "OK") && (Y_1 != "OK") && (Y_4 != "OK")){
				setFace(YELLOW, ORANGE);
				formulaYellowCruz();
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
			
			if((Y_3 == "OK") && (Y_4 == "OK") && (Y_1 != "OK") && (Y_2 != "OK")){
				setFace(YELLOW, GREEN);
				formulaYellowCruz();
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
			
			if((Y_1 == "OK") && (Y_4 == "OK") && (Y_3 != "OK") && (Y_2 != "OK")){
				setFace(YELLOW, RED);
				formulaYellowCruz();
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
			
			//LINE
			
			if((Y_1 == "OK") && (Y_3 == "OK") && (Y_2 != "OK") && (Y_4 != "OK")){
				setFace(YELLOW, BLUE);
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
			
			if((Y_4 == "OK") && (Y_2 == "OK") && (Y_1 != "OK") && (Y_3 != "OK")){
				setFace(YELLOW, ORANGE);
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
		
			//POINT
			
			if((Y_1 != "OK") && (Y_2 != "OK") && (Y_3 != "OK") && (Y_4 != "OK")){
				setFace(YELLOW, RED);
				formulaYellowCruz();
				setFace(YELLOW, ORANGE);
				formulaYellowCruz();
				formulaYellowCruz();
			}
			
			if(matrizYellow[0][1] == YELLOW){
				Y_1 = "OK";
			}
			else{
				Y_1 = "";
			}
			if(matrizYellow[1][2] == YELLOW){
				Y_2 = "OK";
			}
			else{
				Y_2 = "";
			}
			if(matrizYellow[2][1] == YELLOW){
				Y_3 = "OK";
			}
			else{
				Y_3 = "";
			}
			if(matrizYellow[1][0] == YELLOW){
				Y_4 = "OK";
			}
			else{
				Y_4 = "";
			}
			
			if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
				return;
			}
		}
	}

	var OLL = function(){
		var Y_1 = "";
		var Y_2 = "";
		var Y_3 = "";
		var Y_4 = "";
		
		var caso = "";
		
		if(matrizYellow[0][0] == YELLOW){
			Y_1 = "OK";
		}
		if(matrizYellow[0][2] == YELLOW){
			Y_2 = "OK";
		}
		if(matrizYellow[2][0] == YELLOW){
			Y_3 = "OK";
		}
		if(matrizYellow[2][2] == YELLOW){
			Y_4 = "OK";
		}
		
		//COMPLETE - CASO 00
		if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
			caso = "COMPLETE";
		}
		
		//CRUZ - CASO 03 - CASO 04
		if((Y_1 != "OK") && (Y_2 != "OK") && (Y_3 != "OK") && (Y_4 != "OK")){
			caso = "CRUZ";
		}
		
		//PEIXE - CASO 01 - CASO 02
		if((Y_1 == "OK") && (Y_2 != "OK") && (Y_3 != "OK") && (Y_4 != "OK")){
			caso = "PEIXE - 1";
		}
		else{
			if((Y_1 != "OK") && (Y_2 == "OK") && (Y_3 != "OK") && (Y_4 != "OK")){
				caso = "PEIXE - 2";
			}
			else{
				if((Y_1 != "OK") && (Y_2 != "OK") && (Y_3 == "OK") && (Y_4 != "OK")){
					caso = "PEIXE - 3";
				}
				else{
					if((Y_1 != "OK") && (Y_2 != "OK") && (Y_3 != "OK") && (Y_4 == "OK")){
						caso = "PEIXE - 4";
					}
				}
			}
		}
		
		//PEIXE DUPLO - CASO 06
		if((Y_1 == "OK") && (Y_2 != "OK") && (Y_3 != "OK") && (Y_4 == "OK")){
			caso = "PEIXE DUPLO - 1.4";
		}
		else{
			if((Y_1 != "OK") && (Y_2 == "OK") && (Y_3 == "OK") && (Y_4 != "OK")){
				caso = "PEIXE DUPLO - 2.3";
			}
		}
		
		//CANHÃO - CASO 05 - CASO 07
		if((Y_1 == "OK") && (Y_2 == "OK") && (Y_3 != "OK") && (Y_4 != "OK")){
			caso = "CANHÃO - 1.2";
		}
		else{
			if((Y_1 != "OK") && (Y_2 == "OK") && (Y_3 != "OK") && (Y_4 == "OK")){
				caso = "CANHÃO - 4.2";
			}
			else{
				if((Y_1 == "OK") && (Y_2 != "OK") && (Y_3 == "OK") && (Y_4 != "OK")){
					caso = "CANHÃO - 1.3";
				}
				else{
					if((Y_1 != "OK") && (Y_2 != "OK") && (Y_3 == "OK") && (Y_4 == "OK")){
						caso = "CANHÃO - 4.3";
					}
				}
			}
		}
		
		return caso;
	}

	function formulaPeixe(caso){
		if(caso == true){
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(RIGHT,false);
			turnFace(UP,true);
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(RIGHT,false);
		}
		else{
			turnFace(LEFT,false);
			turnFace(UP,false);
			turnFace(LEFT,true);
			turnFace(UP,false);
			turnFace(LEFT,false);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(LEFT,true);
		}
	}
	
	function formulaCanhao(caso){
		if(caso == true){
			turnFace(RIGHT,false);
			turnFace(FRONT,false);
			turnFace(LEFT,true);
			turnFace(FRONT,true);
			turnFace(RIGHT,true);
			turnFace(FRONT,false);
			turnFace(LEFT,false);
			turnFace(FRONT,true);
		}
		else{
			turnFace(RIGHT,true);
			turnFace(RIGHT,true);
			turnFace(DOWN,false);
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(RIGHT,false);
			turnFace(DOWN,true);
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(RIGHT,true);
		}
	}
	
	function formulaPeixeDuplo(){
		turnFace(LEFT,true);
		setFace(FRONT, DOWN);
		turnFace(UP,true);
		turnFace(RIGHT,true);
		turnFace(UP,false);
		turnFace(LEFT,false);
		turnFace(UP,true);
		turnFace(RIGHT,false);
		turnFace(UP,false);
	}
	
	function formulaCruz(caso){
		if(caso == true){
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(RIGHT,false);
			turnFace(UP,true);
			turnFace(RIGHT,true);
			turnFace(UP,false);
			turnFace(RIGHT,false);
			turnFace(UP,true);
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(RIGHT,false);
		}
		else{
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(RIGHT,true);
			turnFace(RIGHT,true);
			turnFace(UP,false);
			turnFace(RIGHT,true);
			turnFace(RIGHT,true);
			turnFace(UP,false);
			turnFace(RIGHT,true);
			turnFace(RIGHT,true);
			turnFace(UP,true);
			turnFace(UP,true);
			turnFace(RIGHT,true);
		}
	}

	function completeYellow(){
		var caso = OLL();
		
		if(caso == "COMPLETE"){
			return;
		}
		
		if(caso == "CRUZ"){
			
			if((matrizRed[0][0] == YELLOW) && (matrizRed[0][2] != YELLOW)){
				setFace(YELLOW, ORANGE);
				formulaCruz(false);
				return;
			}
			
			if((matrizGreen[0][0] == YELLOW) && (matrizGreen[0][2] != YELLOW)){
				setFace(YELLOW, BLUE);
				formulaCruz(false);
				return;
			}
			
			if((matrizOrange[0][0] == YELLOW) && (matrizOrange[0][2] != YELLOW)){
				setFace(YELLOW, RED);
				formulaCruz(false);
				return;
			}
			
			if((matrizBlue[0][0] == YELLOW) && (matrizBlue[0][2] != YELLOW)){
				setFace(YELLOW, GREEN);
				formulaCruz(false);
				return;
			}
			
			if((matrizRed[0][0] == YELLOW) && (matrizRed[0][2] == YELLOW)){
				setFace(YELLOW, GREEN);
				formulaCruz(true);
				return;
			}
			
			if((matrizGreen[0][0] == YELLOW) && (matrizGreen[0][2] == YELLOW)){
				setFace(YELLOW, ORANGE);
				formulaCruz(true);
				return;
			}
		}
		
		if(caso == "PEIXE - 1"){
			if(matrizRed[0][0] == YELLOW){
				setFace(YELLOW, ORANGE);
				formulaPeixe(false);
				return;
			}
			else{
				setFace(YELLOW, BLUE);
				formulaPeixe(true);
				return;
			}
		}
		
		if(caso == "PEIXE - 2"){
			if(matrizRed[0][0] == YELLOW){
				setFace(YELLOW, GREEN);
				formulaPeixe(false);
				return;
			}
			else{
				setFace(YELLOW, ORANGE);
				formulaPeixe(true);
				return;
			}
		}
		
		if(caso == "PEIXE - 3"){
			if(matrizRed[0][2] == YELLOW){
				setFace(YELLOW, RED);
				formulaPeixe(true);
				return;
			}
			else{
				setFace(YELLOW, BLUE);
				formulaPeixe(false);
				return;
			}
		}
		
		if(caso == "PEIXE - 4"){
			if(matrizRed[0][0] == YELLOW){
				setFace(YELLOW, RED);
				formulaPeixe(false);
				return;
			}
			else{
				setFace(YELLOW, GREEN);
				formulaPeixe(true);
				return;
			}
		}
		
		if(caso == "PEIXE DUPLO - 1.4"){
			if(matrizRed[0][0] == YELLOW){
				setFace(YELLOW, BLUE);
				formulaPeixeDuplo();
				return;
			}
			else{
				setFace(YELLOW, GREEN);
				formulaPeixeDuplo();
				return;
			}
		}
		
		if(caso == "PEIXE DUPLO - 2.3"){
			if(matrizRed[0][2] == YELLOW){
				setFace(YELLOW, ORANGE);
				formulaPeixeDuplo();
				return;
			}
			else{
				setFace(YELLOW, RED);
				formulaPeixeDuplo();
				return;
			}
		}
		
		if(caso == "CANHÃO - 1.2"){
			if(matrizRed[0][0] == YELLOW){
				setFace(YELLOW, ORANGE);
				formulaCanhao(false);
				return;
			}
			else{
				setFace(YELLOW, BLUE);
				formulaCanhao(true);
				return;
			}
		}
		
		if(caso == "CANHÃO - 4.2"){
			if(matrizRed[0][0] == YELLOW){
				setFace(YELLOW, ORANGE);
				formulaCanhao(true);
				return;
			}
			else{
				setFace(YELLOW, GREEN);
				formulaCanhao(false);
				return;
			}
		}
		
		if(caso == "CANHÃO - 1.3"){
			if(matrizRed[0][2] == YELLOW){
				setFace(YELLOW, RED);
				formulaCanhao(true);
				return;
			}
			else{
				setFace(YELLOW, BLUE);
				formulaCanhao(false);
				return;
			}
		}
		
		if(caso == "CANHÃO - 4.3"){
			if(matrizBlue[0][0] == YELLOW){
				setFace(YELLOW, GREEN);
				formulaCanhao(true);
				return;
			}
			else{
				setFace(YELLOW, RED);
				formulaCanhao(false);
				return;
			}
		}
	}

	function findMiddle(color1, color2){
		//color1 na matrizBlue
		if(matrizBlue[0][1] == color1){
			if(matrizYellow[1][0] == color2){
				pos1 = BLUE;
				pos2 = YELLOW;
				return;
			}
		}
		if(matrizBlue[1][2] == color1){
			if(matrizRed[1][0] == color2){
				pos1 = BLUE;
				pos2 = RED;
				return;
			}
		}
		if(matrizBlue[2][1] == color1){
			if(matrizWhite[1][0] == color2){
				pos1 = BLUE;
				pos2 = WHITE;
				return;
			}
		}
		if(matrizBlue[1][0] == color1){
			if(matrizOrange[1][2] == color2){
				pos1 = BLUE;
				pos2 = ORANGE;
				return;
			}
		}
		
		//color1 na matrizRed
		if(matrizRed[0][1] == color1){
			if(matrizYellow[2][1] == color2){
				pos1 = RED;
				pos2 = YELLOW;
				return;
			}
		}
		if(matrizRed[1][2] == color1){
			if(matrizGreen[1][0] == color2){
				pos1 = RED;
				pos2 = GREEN;
				return;
			}
		}
		if(matrizRed[2][1] == color1){
			if(matrizWhite[0][1] == color2){
				pos1 = RED;
				pos2 = WHITE;
				return;
			}
		}
		if(matrizRed[1][0] == color1){
			if(matrizBlue[1][2] == color2){
				pos1 = RED;
				pos2 = BLUE;
				return;
			}
		}
		
		//color1 na matrizYellow
		if(matrizYellow[0][1] == color1){
			if(matrizOrange[0][1] == color2){
				pos1 = YELLOW;
				pos2 = ORANGE;
				return;
			}
		}
		if(matrizYellow[1][2] == color1){
			if(matrizGreen[0][1] == color2){
				pos1 = YELLOW;
				pos2 = GREEN;
				return;
			}
		}
		if(matrizYellow[2][1] == color1){
			if(matrizRed[0][1] == color2){
				pos1 = YELLOW;
				pos2 = RED;
				return;
			}
		}
		if(matrizYellow[1][0] == color1){
			if(matrizBlue[0][1] == color2){
				pos1 = YELLOW;
				pos2 = BLUE;
				return;
			}
		}
		
		//color1 na matrizOrange
		if(matrizOrange[0][1] == color1){
			if(matrizYellow[0][1] == color2){
				pos1 = ORANGE;
				pos2 = YELLOW;
				return;
			}
		}
		if(matrizOrange[1][2] == color1){
			if(matrizBlue[1][0] == color2){
				pos1 = ORANGE;
				pos2 = BLUE;
				return;
			}
		}
		if(matrizOrange[2][1] == color1){
			if(matrizWhite[2][1] == color2){
				pos1 = ORANGE;
				pos2 = WHITE;
				return;
			}
		}
		if(matrizOrange[1][0] == color1){
			if(matrizGreen[1][2] == color2){
				pos1 = ORANGE;
				pos2 = GREEN;
				return;
			}
		}
		
		//color1 na matrizGreen
		if(matrizGreen[0][1] == color1){
			if(matrizYellow[1][2] == color2){
				pos1 = GREEN;
				pos2 = YELLOW;
				return;
			}
		}
		if(matrizGreen[1][2] == color1){
			if(matrizOrange[1][0] == color2){
				pos1 = GREEN;
				pos2 = ORANGE;
				return;
			}
		}
		if(matrizGreen[2][1] == color1){
			if(matrizWhite[1][2] == color2){
				pos1 = GREEN;
				pos2 = WHITE;
				return;
			}
		}
		if(matrizGreen[1][0] == color1){
			if(matrizRed[1][2] == color2){
				pos1 = GREEN;
				pos2 = RED;
				return;
			}
		}
		
		//color1 na matrizWhite
		if(matrizWhite[0][1] == color1){
			if(matrizRed[2][1] == color2){
				pos1 = WHITE;
				pos2 = RED;
				return;
			}
		}
		if(matrizWhite[1][2] == color1){
			if(matrizGreen[2][1] == color2){
				pos1 = WHITE;
				pos2 = GREEN;
				return;
			}
		}
		if(matrizWhite[2][1] == color1){
			if(matrizOrange[2][1] == color2){
				pos1 = WHITE;
				pos2 = ORANGE;
				return;
			}
		}
		if(matrizWhite[1][0] == color1){
			if(matrizBlue[2][1] == color2){
				pos1 = WHITE;
				pos2 = BLUE;
				return;
			}
		}
	}

	function casoU(clockwise){
		if(clockwise == true){
			turnFace(FRONT, true);
			turnFace(FRONT, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(LEFT, true);
			turnFace(FRONT, true);
			turnFace(FRONT, true);
			turnFace(RIGHT, true);
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(FRONT, true);
			turnFace(FRONT, true);
		}
		else{
			turnFace(FRONT, true);
			turnFace(FRONT, true);
			turnFace(UP, false);
			turnFace(RIGHT, false);
			turnFace(LEFT, true);
			turnFace(FRONT, true);
			turnFace(FRONT, true);
			turnFace(RIGHT, true);
			turnFace(LEFT, false);
			turnFace(UP, false);
			turnFace(FRONT, true);
			turnFace(FRONT, true);
		}
	}
	
	function casoA(clockwise){
		if(clockwise == true){
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(LEFT, false);
			turnFace(DOWN, true);
			turnFace(DOWN, true);
			turnFace(LEFT, true);
			turnFace(UP, false);
			turnFace(LEFT, false);
			turnFace(DOWN, true);
			turnFace(DOWN, true);
			turnFace(LEFT, true);
			turnFace(LEFT, true);
		}
		else{
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(DOWN, true);
			turnFace(DOWN, true);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(RIGHT, true);
			turnFace(DOWN, true);
			turnFace(DOWN, true);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
		}
	}
	
	function casoH(){
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
		turnFace(UP, true);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
	}
	
	function casoZ(){
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, false);
		setFace(FRONT, DOWN);
		turnFace(UP, true);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		setFace(DOWN, BACK);
		turnFace(UP, true);
		turnFace(UP, true);
		turnFace(LEFT, true);
		turnFace(RIGHT, false);
		setFace(FRONT, DOWN);
		turnFace(UP, true);
		turnFace(UP, true);
	}
	
	function casoT(){
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(FRONT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(FRONT, false);
	}
	
	function casoF(){
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(FRONT, false);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(FRONT, true);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(UP, true);
		turnFace(RIGHT, true);
	}
	
	function casoY(){
		turnFace(FRONT, true);
		turnFace(RIGHT, true);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(FRONT, false);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(FRONT, true);
		turnFace(RIGHT, true);
		turnFace(FRONT, false);
	}
	
	function casoE(){
		turnFace(RIGHT, true);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(DOWN, true);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(DOWN, false);
		turnFace(RIGHT, true);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(DOWN, true);
		turnFace(RIGHT, true);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(DOWN, false);
	}
	
	function casoV(){
		turnFace(RIGHT, false);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(UP, false);
		setFace(UP, RIGHT);
		turnFace(RIGHT, false);
		turnFace(FRONT, false);
		turnFace(RIGHT, true);
		turnFace(RIGHT, true);
		turnFace(UP, false);
		turnFace(RIGHT, false);
		turnFace(UP, true);
		turnFace(RIGHT, false);
		turnFace(FRONT, true);
		turnFace(RIGHT, true);
		turnFace(FRONT, true);
	}
	
	function casoR(side){
		if(side == "left"){
			turnFace(LEFT, true);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(LEFT, true);
			turnFace(FRONT, false);
			turnFace(LEFT, false);
			turnFace(UP, false);
			turnFace(LEFT, true);
			turnFace(UP, true);
			turnFace(LEFT, true);
			turnFace(FRONT, true);
			turnFace(LEFT, true);
			turnFace(LEFT, true);
			turnFace(UP, true);
		}
		else if(side == "right"){
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(FRONT, true);
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(UP, false);
			turnFace(RIGHT, false);
			turnFace(FRONT, false);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			turnFace(UP, false);
		}
	}
	
	function casoJ(side){
		if(side == "left"){
			turnFace(FRONT, true);
			turnFace(FRONT, true);
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			setFace(FRONT, DOWN);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(LEFT, true);
			setFace(FRONT, DOWN);
			turnFace(UP, false);
			turnFace(LEFT, true);
			turnFace(UP, true);
			turnFace(LEFT, true);
			turnFace(LEFT, true);
		}
		else if(side == "right"){
			turnFace(FRONT, true);
			turnFace(FRONT, true);
			turnFace(LEFT, false);
			turnFace(UP, false);
			turnFace(LEFT, true);
			setFace(FRONT, DOWN);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			setFace(FRONT, DOWN);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
		}
	}
	
	function casoN(side){
		if(side == "left"){
			turnFace(UP, true);
			turnFace(LEFT, true);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(LEFT, true);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(RIGHT, false);
		}
		else if(side == "right"){
			turnFace(UP, false);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(LEFT, true);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(LEFT, false);
			turnFace(UP, true);
			turnFace(UP, true);
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(LEFT, true);
		}
	}
	
	function casoG(caso){
		switch (caso){
		case 1:
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			turnFace(DOWN, true);
			setFace(UP, RIGHT);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(DOWN, false);
			setFace(UP, LEFT);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			setFace(UP, LEFT);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(RIGHT, true);
		break;
		case 2:
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			turnFace(DOWN, false);
			setFace(UP, LEFT);
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(DOWN, true);
			setFace(UP, RIGHT);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			setFace(UP, RIGHT);
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(RIGHT, false);
		break;
		case 3:
			turnFace(RIGHT, true);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			setFace(UP, LEFT);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			turnFace(DOWN, false);
			setFace(UP, LEFT);
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(RIGHT, false);
			turnFace(DOWN, true);
			setFace(UP, RIGHT);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
		break;
		case 4:
			turnFace(RIGHT, false);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			setFace(UP, RIGHT);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
			turnFace(DOWN, true);
			setFace(UP, RIGHT);
			turnFace(RIGHT, false);
			turnFace(UP, true);
			turnFace(RIGHT, true);
			turnFace(UP, false);
			turnFace(RIGHT, true);
			turnFace(DOWN, false);
			setFace(UP, LEFT);
			turnFace(RIGHT, true);
			turnFace(RIGHT, true);
		break;
		}
	}

	function PLL(){
		//Y_B_R
		findCorner(YELLOW, BLUE, RED);
		pos_Y_B_R = position;
		
		//Y_B_O
		findCorner(YELLOW, BLUE, ORANGE);
		pos_Y_B_O = position;
		
		//Y_G_R
		findCorner(YELLOW, GREEN, RED);
		pos_Y_G_R = position;
		
		//Y_G_O
		findCorner(YELLOW, GREEN, ORANGE);
		pos_Y_G_O = position;
		
		//Y_B
		findMiddle(YELLOW, BLUE);
		pos_Y_B = pos2;
		
		//Y_G
		findMiddle(YELLOW, GREEN);
		pos_Y_G = pos2;
		
		//Y_R
		findMiddle(YELLOW, RED);
		pos_Y_R = pos2;
		
		//Y_O
		findMiddle(YELLOW, ORANGE);
		pos_Y_O = pos2;
		
		//Y_B_R
		if(pos_Y_B_R == 33){
			Y_B_R = "OK";
		}
		else {
			Y_B_R = "";
		}
		
		//Y_B_O
		if(pos_Y_B_O == 11){
			Y_B_O = "OK";
		}
		else {
			Y_B_O = "";
		}
		
		//Y_G_R
		if(pos_Y_G_R == 44){
			Y_G_R = "OK";
		}
		else {
			Y_G_R = "";
		}
		
		//Y_G_O
		if(pos_Y_G_O == 22){
			Y_G_O = "OK";
		}
		else {
			Y_G_O = "";
		}
		
		//Y_B
		if(pos_Y_B == BLUE){
			Y_B = "OK";
		}
		else {
			Y_B = "";
		}
		
		//Y_G
		if(pos_Y_G == GREEN){
			Y_G = "OK";
		}
		else {
			Y_G = "";
		}
		
		//Y_R
		if(pos_Y_R == RED){
			Y_R = "OK";
		}
		else {
			Y_R = "";
		}
		
		//Y_O
		if(pos_Y_O == ORANGE){
			Y_O = "OK";
		}
		else {
			Y_O = "";
		}
	}

	function completeCube(){
		for(var i = 1; i <= 4; i++){
			turnFace(YELLOW, true);
			PLL();
				
			//caso montado
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				return;
			}
			
			//casoU(true)
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == BLUE)){
				setFace(YELLOW, BLUE);
				casoU(true);
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == GREEN) && (pos_Y_O == RED)){
				setFace(YELLOW, GREEN);
				casoU(true);
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, ORANGE);
				casoU(true);
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == BLUE) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoU(true);
				return;
			}
			
			//casoU(false)
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == RED)){
				setFace(YELLOW, BLUE);
				casoU(false);
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == ORANGE) && (pos_Y_O == GREEN)){
				setFace(YELLOW, GREEN);
				casoU(false);
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, ORANGE);
				casoU(false);
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == RED) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoU(false);
				return;
			}
			
			//casoA(true)
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (pos_Y_G_O == 33) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(BLUE, YELLOW);
				casoA(true);
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(RED, YELLOW);
				casoA(true);
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(ORANGE, YELLOW);
				casoA(true);
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 22) && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(GREEN, YELLOW);
				casoA(true);
				return;
			}
			
			//casoA(false)
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 44) && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(ORANGE, YELLOW);
				casoA(false);
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 11) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(BLUE, YELLOW);
				casoA(false);
				return;
			}
			if((pos_Y_B_O == 44) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(GREEN, YELLOW);
				casoA(false);
				return;
			}
			if((pos_Y_B_O == 22) && (pos_Y_B_R == 11) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(RED, YELLOW);
				casoA(false);
				return;
			}
			
			//casoH
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, BLUE);
				casoH();
				return;
			}
			
			//casoZ
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == BLUE)){
				setFace(YELLOW, RED);
				casoZ();
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == ORANGE) && (pos_Y_R == BLUE) && (pos_Y_O == GREEN)){
				setFace(YELLOW, BLUE);
				casoZ();
				return;
			}
			
			//casoT
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, BLUE);
				casoT();
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, GREEN);
				casoT();
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, ORANGE);
				casoT();
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoT();
				return;
			}
			
			//casoF
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, BLUE);
				casoF();
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, GREEN);
				casoF();
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, ORANGE);
				casoF();
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, RED);
				casoF();
				return;
			}
			
			//casoE
			if((pos_Y_B_O == 22) && (pos_Y_B_R == 44) && (pos_Y_G_O == 11) && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(GREEN, YELLOW);
				casoE();
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(ORANGE, YELLOW);
				casoE();
				return;
			}
			
			//casoY
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, BLUE);
				casoY();
				return;
			}
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, GREEN);
				casoY();
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, RED);
				casoY();
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, ORANGE);
				casoY();
				return;
			}
			
			//casoV
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, GREEN);
				casoV();
				return;
			}
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, BLUE);
				casoV();
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, RED);
				casoV();
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, ORANGE);
				casoV();
				return;
			}
			
			//casoR("right")
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, ORANGE);
				casoR("right");
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoR("right");
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, GREEN);
				casoR("right");
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, BLUE);
				casoR("right");
				return;
			}
			
			//casoR("left")
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, ORANGE);
				casoR("left");
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoR("left");
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, GREEN);
				casoR("left");
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, BLUE);
				casoR("left");
				return;
			}
			
			//casoJ("right")
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, BLUE);
				casoJ("right");
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, GREEN);
				casoJ("right");
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, ORANGE);
				casoJ("right");
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, RED);
				casoJ("right");
				return;
			}
			
			//casoJ("left")
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, GREEN);
				casoJ("left");
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, BLUE);
				casoJ("left");
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, RED);
				casoJ("left");
				return;
			}
			if((Y_B_O == "OK") && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, ORANGE);
				casoJ("left");
				return;
			}
			
			//casoN("right")
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, BLUE);
				casoN("right");
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoN("right");
				return;
			}
			
			//casoN("left")
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoN("left");
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == RED)){
				setFace(YELLOW, BLUE);
				casoN("left");
				return;
			}
			
			//casoG(1)
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (pos_Y_G_O == 33) && (pos_Y_G_R == 22) && (pos_Y_B == GREEN) && (pos_Y_G == RED) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, ORANGE);
				casoG(1);
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == ORANGE) && (pos_Y_O == GREEN)){
				setFace(YELLOW, BLUE);
				casoG(1);
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == ORANGE) && (pos_Y_G == GREEN) && (pos_Y_R == BLUE) && (pos_Y_O == RED)){
				setFace(YELLOW, GREEN);
				casoG(1);
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 22) && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == ORANGE) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, RED);
				casoG(1);
				return;
			}
			
			//casoG(3)
			if((Y_B_O == "OK") && (pos_Y_B_R == 44) && (pos_Y_G_O == 33) && (pos_Y_G_R == 22) && (pos_Y_B == BLUE) && (pos_Y_G == RED) && (pos_Y_R == ORANGE) && (pos_Y_O == GREEN)){
				setFace(YELLOW, ORANGE);
				casoG(3);
				return;
			}
			if((pos_Y_B_O == 44) && (Y_B_R == "OK") && (pos_Y_G_O == 11) && (pos_Y_G_R == 22) && (pos_Y_B == ORANGE) && (pos_Y_G == BLUE) && (pos_Y_R == RED) && (pos_Y_O == GREEN)){
				setFace(YELLOW, BLUE);
				casoG(3);
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 44) && (Y_G_O == "OK") && (pos_Y_G_R == 11) && (pos_Y_B == GREEN) && (pos_Y_G == RED) && (pos_Y_R == BLUE) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, GREEN);
				casoG(3);
				return;
			}
			if((pos_Y_B_O == 33) && (pos_Y_B_R == 22) && (pos_Y_G_O == 11) && (Y_G_R == "OK") && (pos_Y_B == BLUE) && (pos_Y_G == GREEN) && (pos_Y_R == RED) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoG(3);
				return;
			}
			
			//casoG(2)
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 44) && (pos_Y_G_R == 33) && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == GREEN) && (pos_Y_O == RED)){
				setFace(YELLOW, GREEN);
				casoG(2);
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 11) && (pos_Y_B == GREEN) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, ORANGE);
				casoG(2);
				return;
			}
			if((pos_Y_B_O == 44) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (pos_Y_G_R == 33) && (pos_Y_B == RED) && (pos_Y_G == BLUE) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, RED);
				casoG(2);
				return;
			}
			if((pos_Y_B_O == 22) && (pos_Y_B_R == 11) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == BLUE)){
				setFace(YELLOW, BLUE);
				casoG(2);
				return;
			}
			
			//casoG(4)
			if((Y_B_O == "OK") && (pos_Y_B_R == 22) && (pos_Y_G_O == 44) && (pos_Y_G_R == 33) && (pos_Y_B == RED) && (pos_Y_G == BLUE) && (pos_Y_R == GREEN) && (pos_Y_O == ORANGE)){
				setFace(YELLOW, GREEN);
				casoG(4);
				return;
			}
			if((pos_Y_B_O == 22) && (Y_B_R == "OK") && (pos_Y_G_O == 44) && (pos_Y_G_R == 11) && (pos_Y_B == BLUE) && (pos_Y_G == ORANGE) && (pos_Y_R == GREEN) && (pos_Y_O == RED)){
				setFace(YELLOW, ORANGE);
				casoG(4);
				return;
			}
			if((pos_Y_B_O == 44) && (pos_Y_B_R == 11) && (Y_G_O == "OK") && (pos_Y_G_R == 22) && (pos_Y_B == RED) && (pos_Y_G == GREEN) && (pos_Y_R == ORANGE) && (pos_Y_O == BLUE)){
				setFace(YELLOW, RED);
				casoG(4);
				return;
			}
			if((pos_Y_B_O == 22) && (pos_Y_B_R == 11) && (pos_Y_G_O == 33) && (Y_G_R == "OK") && (pos_Y_B == GREEN) && (pos_Y_G == ORANGE) && (pos_Y_R == RED) && (pos_Y_O == BLUE)){
				setFace(YELLOW, BLUE);
				casoG(4);
				return;
			}
		}
	}

	var replace = function(str, oldPart, newPart){

		var newStr = str;

		var i = newStr.indexOf(oldPart);
		while (i >= 0) {
		    newStr = newStr.replace(oldPart, newPart);
		    i = newStr.indexOf(oldPart);
		}
		return newStr;
    }

    function optimizeResolution(S) {
        var aux;
		
		var replaced = true;
		
        while(replaced) { 
			replaced = false;
			//"Y;Y;Y;Y;
			aux = replace(S, "Y;Y;Y;Y;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//W;W;W;W;
			aux = replace(S, "W;W;W;W;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//G;G;G;G;
			aux = replace(S, "G;G;G;G;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//B;B;B;B;
			aux = replace(S, "B;B;B;B;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//R;R;R;R;
			aux = replace(S, "R;R;R;R;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//O;O;O;O;
			aux = replace(S, "O;O;O;O;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//Yl;Yl;Yl;Yl;
			aux = replace(S, "Yl;Yl;Yl;Yl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//Wl;Wl;Wl;Wl;
			aux = replace(S, "Wl;Wl;Wl;Wl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//Rl;Rl;Rl;Rl;
			aux = replace(S, "Rl;Rl;Rl;Rl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//Ol;Ol;Ol;Ol;
			aux = replace(S, "Ol;Ol;Ol;Ol;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//Gl;Gl;Gl;Gl;
			aux = replace(S, "Gl;Gl;Gl;Gl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//Bl;Bl;Bl;Bl;
			aux = replace(S, "Bl;Bl;Bl;Bl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//YYl
			aux = replace(S, "Y;Yl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//WWl
			aux = replace(S, "W;Wl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//GGl
			aux = replace(S, "G;Gl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//BBl
			aux = replace(S, "B;Bl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//RRl
			aux = replace(S, "R;Rl;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//OOl
			aux = replace(S, "O;Ol;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//YlY
			aux = replace(S, "Yl;Y;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//WlW
			aux = replace(S, "Wl;W;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//RlR
			aux = replace(S, "Rl;R;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//OlO
			aux = replace(S, "Ol;O;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//GlG
			aux = replace(S, "Gl;G;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//BlB
			aux = replace(S, "Bl;B;","");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//YYY
			aux = replace(S, "Y;Y;Y","Yl");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//WWW
			aux = replace(S, "W;W;W","Wl");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//RRR
			aux = replace(S, "R;R;R","Rl");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//OOO
			aux = replace(S, "O;O;O","Ol");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//GGG
			aux = replace(S, "G;G;G","Gl");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//BBB
			aux = replace(S, "B;B;B","Bl");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//YlYlYl
			aux = replace(S, "Yl;Yl;Yl","Y");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//WlWlWl
			aux = replace(S, "Wl;Wl;Wl","W");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//GlGlGl
			aux = replace(S, "Gl;Gl;Gl","G");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//BlBlBl
			aux = replace(S, "Bl;Bl;Bl","B");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//RlRlRl
			aux = replace(S, "Rl;Rl;Rl","R");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//OlOlOl
			aux = replace(S, "Ol;Ol;Ol","O");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
			//l
			aux = replace(S, "l","'");
			if(aux != S) {
				replaced=true;
				S=aux;
			}
        } 
        
		resolution = S;
    }

    function main() {
		//Monta o cubo
		//alert("Inicio");
		makeWhiteCruz();
		//alert("Cruz Montada");
		completeWhite();
		//alert("Branco Montado");
		completeSecondRow();
		//alert("Segunda Camada Montada");
		makeYellowCruz();
		//alert("Cruz Amarela Montada");
		completeYellow();
		//alert("Amarelo Montado");
		completeCube();
		//alert("Cubo Montado");
		//alert(resolution);
		//Optimiza a resolução
		optimizeResolution(resolution);
		//alert("optimizing RESOLUTION .....");
		//alert(resolution);
		document.getElementById("textarea").value=resolution;
	}

	//Funcões do site
	function setColor(corAux) {

		resolution = "";

	    cor=corAux; 
		if(cor == "GREEN"){
			document.getElementById("corTabela").style.backgroundColor = "lime";
		} else if(cor == "ORANGE"){
			document.getElementById("corTabela").style.backgroundColor = "darkOrange";
		}else{
			document.getElementById("corTabela").style.backgroundColor = cor;
		}
	}

	function changeColor(id){
		var i = id.substr(0, 1);
		var i1 = id.substr(1, 1);
		var i2 = id.substr(2, 1);

		var color;

		document.getElementById("textarea").value="";
		resolution = "";

		if(cor == "GRAY"){
			alert("Selecione uma cor antes de preencher a matriz");
		}else{
			document.getElementById(id).src="assets/css/images/" + cor +  ".png";
			updateColor(id);

			switch(cor){
				case "RED":
					color = RED;
				break;
				case "ORANGE":
					color = ORANGE;
				break;
				case "BLUE":
					color = BLUE;
				break;
				case "GREEN":
					color = GREEN;
				break;
				case "YELLOW":
					color = YELLOW;
				break;
				case "WHITE":
					color = WHITE;
				break;
			}

			switch(i){
				case "R":
					matrizRed[i1][i2] = color;
				break;
				case "O":
					matrizOrange[i1][i2] = color;
				break;
				case "B":
					matrizBlue[i1][i2] = color;
				break;
				case "G":
					matrizGreen[i1][i2] = color;
				break;
				case "Y":
					matrizYellow[i1][i2] = color;
				break;
				case "W":
					matrizWhite[i1][i2] = color;
				break;
			}
		}
	}

	function resetColor(id, color){
		document.getElementById(id).src="assets/css/images/" + color +  ".png";
	}

	function updateColor(id){
		var i = "var." + id;
		lessColorNumber(i);
		addColorNumber();
		document.getElementById(i).value = cor;
		//alert(id + "=" + cor);
	}

	function mouseOver(id, color){
		if(color != "GRAY"){
			document.getElementById(id).src="assets/css/images/" + color +  "mouseOn.png";
		}
	}

	function mouseOut(id, color){
		document.getElementById(id).src="assets/css/images/" + color +  ".png";
	}

	function checkCube(){

		resolution = "";

		if((qntWHITE == 9) && (qntYELLOW == 9) && (qntRED == 9) && (qntORANGE == 9) && (qntBLUE == 9) && (qntGREEN == 9)){
			main(); //vai para a programação de java
		}
		else{
			alert("Verifique se você prencheu a matriz corretamente.");
			//alert("YELLOW = " + qntYELLOW + " / " + "WHITE = " + qntWHITE + " / " + "RED = " + qntRED + " / " + "ORANGE = " + qntORANGE + " / " + "BLUE = " + qntBLUE + " / " + "GREEN = " + qntGREEN);
		}
	}

	function resetCube(){
		resetColor("Y00", "YELLOW");
		resetColor("Y01", "YELLOW");
		resetColor("Y02", "YELLOW");
		resetColor("Y10", "YELLOW");
		resetColor("Y12", "YELLOW");
		resetColor("Y20", "YELLOW");
		resetColor("Y21", "YELLOW");
		resetColor("Y22", "YELLOW");
		
		resetColor("W00", "WHITE");
		resetColor("W01", "WHITE");
		resetColor("W02", "WHITE");
		resetColor("W10", "WHITE");
		resetColor("W12", "WHITE");
		resetColor("W20", "WHITE");
		resetColor("W21", "WHITE");
		resetColor("W22", "WHITE");
		
		resetColor("B00", "BLUE");
		resetColor("B01", "BLUE");
		resetColor("B02", "BLUE");
		resetColor("B10", "BLUE");
		resetColor("B12", "BLUE");
		resetColor("B20", "BLUE");
		resetColor("B21", "BLUE");
		resetColor("B22", "BLUE");
		
		resetColor("G00", "GREEN");
		resetColor("G01", "GREEN");
		resetColor("G02", "GREEN");
		resetColor("G10", "GREEN");
		resetColor("G12", "GREEN");
		resetColor("G20", "GREEN");
		resetColor("G21", "GREEN");
		resetColor("G22", "GREEN");
		
		resetColor("O00", "ORANGE");
		resetColor("O01", "ORANGE");
		resetColor("O02", "ORANGE");
		resetColor("O10", "ORANGE");
		resetColor("O12", "ORANGE");
		resetColor("O20", "ORANGE");
		resetColor("O21", "ORANGE");
		resetColor("O22", "ORANGE");
		
		resetColor("R00", "RED");
		resetColor("R01", "RED");
		resetColor("R02", "RED");
		resetColor("R10", "RED");
		resetColor("R12", "RED");
		resetColor("R20", "RED");
		resetColor("R21", "RED");
		resetColor("R22", "RED");
		
		qntWHITE=9;
		qntYELLOW=9;
		qntRED=9;
		qntORANGE=9;
		qntBLUE=9;
		qntGREEN=9;
	}

	function addColorNumber(){
		if(cor == "WHITE"){ 
			qntWHITE++;
			//alert("WHITE =" + WHITE);
		}
		else if(cor == "YELLOW"){
			qntYELLOW++;
			//alert("YELLOW =" + YELLOW);
		}
		else if(cor == "RED"){
			qntRED++;
			//alert("RED =" + RED);
		}
		else if(cor == "ORANGE"){
			qntORANGE++;
			//alert("ORANGE =" + ORANGE);
		}
		else if(cor == "BLUE"){
			qntBLUE++;
			//alert("BLUE =" + BLUE);
		}
		else if(cor == "GREEN"){
			qntGREEN++;
			//alert("GREEN =" + GREEN);
		}
	}

	function lessColorNumber(i){
		if(document.getElementById(i).value == "WHITE"){
			qntWHITE--;
			//alert("WHITE--");
		}
		if(document.getElementById(i).value == "YELLOW"){
			qntYELLOW--;
			//alert("YELLOW--");
		}
		if(document.getElementById(i).value == "RED"){
			qntRED--;
			//alert("RED--");
		}
		if(document.getElementById(i).value == "ORANGE"){
			qntORANGE--;
			//alert("ORANGE--");
		}
		if(document.getElementById(i).value == "BLUE"){
			qntBLUE--;
			//alert("BLUE--");
		}
		if(document.getElementById(i).value == "GREEN"){
			qntGREEN--;
			//alert("GREEN--");
		}
	}

