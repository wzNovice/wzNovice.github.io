//necessary
var heroQuantity = [0];
var heroName = ["x"];

//Tons of stuff (heroes)
function heroConstructor(name, cp, pg, ad, num, ide){
	this.ident = name;
	this.cp = cp;
	this.pg = pg;
	this.ad = ad;
	this.num = num;
	this.ide = ide;

	heroes++;
	heroName[this.num] = this.ident;
}

var Thing = new heroConstructor('Thing', 0, 1, 0, 1, 'thing');
var Essence = new heroConstructor("Essence", 1, 1, 1, 2, 'essence');

//SHOP INTERFACE kind of important variable
var Sel = 0;

//Lots of dumb buttons

//dumb button constructor - revolutionize humanity
function heroPurchase(cost, pg, cp, name, id){
	if(resource > cost){
		resource = resource - cost;
		passiveGain = passiveGain + pg;
		clickPower = clickPower + cp;
		
		if(heroQuantity[id] >= 0){
			heroQuantity[id]++;
		}
		else{
			heroQuantity[id] = 1;
		}
		Deselect(name);
	}
	else{
		Deselect(name);
	}
}

//actual dumb buttons for now
function thingButton(){
	Clear();
	Sel = Thing.num;
	Select("thing");
}

function essenceButton(){
	Clear();
	Sel = Essence.num;
	Select("essence");
}

//Basic Everyday Interfaces
//Selecting stuff
function Select(ident){
	document.getElementById(ident).style.color = "blue";
}

function Clear(){
	if(Sel == Thing.num){
		Deselect('thing');
	}
	else if(Sel == Essence.num){
		Deselect('essence');
	}
}

function Deselect(ident){
	Sel = 0;
	document.getElementById(ident).style.color = "black";
}

//i hate u
function Purchase(){
	if(Sel == Thing.num){
		heroPurchase(10, Thing.pg, Thing.cp, Thing.ide, Thing.num);
	}
	else if(Sel == Essence.num){
		heroPurchase(1, Essence.pg, Essence.cp, Essence.ide, Essence.num);
	}
}

//Backpack
var open = false;
var Display = " ";

function checkBackpack(){
	for(i=0;i<=heroes;i++){
		if(heroQuantity[i] >= 1){
			Display = Display + heroName[i] + " " + heroQuantity[i];
		}
		else{

		}
	}
}

function openBackpack(){
	checkBackpack();
	if(open == true){
		document.getElementById("backpack").innerHTML = " ";
		open = false;
	}
	else{
		document.getElementById("backpack").innerHTML = Display;
		open = true;
	}
}


