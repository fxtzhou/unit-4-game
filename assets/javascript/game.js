var defend;
var attackchar;
var hp;
var ap;
var enemyattackback;
var dfcharacter;
var dfhealth;
var dfattack;
var dfenemyattackback;
var name;
var dfname;
var yourChar;
var YourDefender;
var selectedFighter = "";
var selectedDefender = "";
var selectedEnemy;
var enemiesLeft = [];
var selectedFighterIndex;
var result;
var attackerfn;

var characters = {
    rey: {
        name: 'rey',
        fname: "Rey",
        health: 150,
        attack: 10,
        imageUrl: '../assets/images/rey.jpg',
        enemyattackback: 22
    },

    ventress: { //asajj ventress
        name: 'ventress',
        fname: 'Asajj Ventress',
        health: 175,
        attack: 15,
        imageUrl: '../assets/images/ventress.jpg',
        enemyattackback: 17
    },

    general: { //general grievous
        name: 'general',
        fname: 'General Grievous',
        health: 200,
        attack: 5,
        imageUrl: '../assets/images/general.jpg',
        enemyattackback: 10
    },

    dooku: { //count dooku
        name: 'dooku',
        fname: 'Count Dooku',
        health: 150,
        attack: 20,
        imageUrl: '../assets/images/dooku.jpg',
        enemyattackback: 15
    }
}

function reset() {
    $('.char').show();
    selectedFighter = "";
    selectedDefender = "";
    enemiesLeft = [];

    characters.rey.health = 140;
    characters.ventress.health = 100;
    characters.general.health = 175;
    characters.dooku.health = 180;

    characters.rey.attack = 22;
    characters.ventress.attack = 17;
    characters.general.attack = 10;
    characters.dooku.attack = 12;


    // delete all in-game text.
    $("#attack-button").hide();
    $("#attack-text").empty();
    $("counter-text").empty();
    $("you-lose").empty();
    $("you-win").empty();
    $("#restart").hide();

    //reset hp stats
    $(".reyHp").html(characters.rey.health);
    $(".ventressHp").html(characters.ventress.health);
    $(".generalHp").html(characters.general.health);
    $(".dookuHp").html(characters.dooku.health);
}
reset();
$(document).ready(function () {


    $(".row1").click(function () {
 


        if (selectedFighter == "") {

            $(this).appendTo("#fighter");
            selectedFighter = $(this);
            yourChar = $(selectedFighter).attr("value");
            console.log(selectedFighter);
            console.log(yourChar)

            if (yourChar == characters.rey.name) {
                hp = characters.rey.health;
                ap = characters.rey.attack;
                enemyattackback = characters.rey.enemyattackback;
                attackchar = characters.rey;
                attackerfn = characters.rey.fname;

            } else if (yourChar == characters.ventress.name) {
                hp = characters.ventress.health;
                ap = characters.ventress.attack;
                enemyattackback = characters.ventress.enemyattackback;
                attackchar = characters.ventress;
                attackerfn = characters.ventress.fname;

            } else if (yourChar == characters.general.name) {
                hp = characters.general.health;
                ap = characters.general.attack;
                enemyattackback = characters.general.enemyattackback;
                attackchar = characters.general;
                attackerfn = characters.general.fname;

            } else if (yourChar == characters.dooku.name) {
                hp = characters.dooku.health;
                ap = characters.dooku.attack;
                enemyattackback = characters.dooku.enemyattackback;
                attackchar = characters.dooku;
                attackerfn = characters.dooku.fname;

            }

            for (var i = 0; i < 4; i++) {
                $("._" + [i]).not(selectedFighter).appendTo("#enemy" + [i]);
            }

        }
        console.log(yourChar);

    });

    $(".move").click(function () {
        $("#attack-button").show();
        $("#win-continue").empty();


        console.log(this);

        if (selectedDefender == "") {
            $(this).appendTo("#defender");
            selectedDefender = $(this);
            YourDefender = $(selectedDefender).children().attr("value");

            if (YourDefender == characters.rey.name) {
                dfhealth = characters.rey.health;
                dfattack = characters.rey.attack;
                dfenemyattackback = characters.rey.enemyattackback;
                dfname = characters.rey.fname;
                defend = characters.rey;

            } else if (YourDefender == characters.ventress.name) {
                dfhealth = characters.ventress.health;
                dfattack = characters.ventress.attack;
                dfenemyattackback = characters.ventress.enemyattackback;
                dfname = characters.ventress.fname;
                defend = characters.ventress;

            } else if (YourDefender == characters.general.name) {
                dfhealth = characters.general.health;
                dfattack = characters.general.attack;
                dfenemyattackback = characters.general.enemyattackback;
                dfname = characters.general.fname;
                defend = characters.general;

            } else if (YourDefender == characters.dooku.name) {
                dfhealth = characters.dooku.health;
                dfattack = characters.dooku.attack;
                dfenemyattackback = characters.dooku.enemyattackback;
                dfname = characters.dooku.fname;
                defend = characters.dooku;
            }
        }

        console.log(YourDefender);
        console.log(defend);
        console.log(selectedDefender);
        console.log(attackchar);
    });

    $("#attack-button").click(function () {

        if (!(hp < 1) || !(dfhealth < 1)) {
            $("#no-enemy").hide();

            hp = hp - dfenemyattackback;
            $("#attack-text").html("You attacked " + dfname + " for " + ap + " damage!");

            dfhealth = (dfhealth - ap);
            $("#counter-text").html(dfname + " attacked you back for " + dfenemyattackback + " damage!");

            
            console.log(yourChar);
            console.log(selectedFighter);

            $("." + YourDefender).html(dfhealth);
            $("." + yourChar).html(hp);
        }


        if (dfhealth <= 0) {
            $("#attack-button").hide();

            $("#attack-text").empty();
            $("#counter-text").empty();
            $("#win-continue").html(dfname + " has been defeated... Choose another enemy.");
            $("#attack-text").empty();
            $("#counter-text").empty();
            $("#you-win").empty();
           
           $("#fighter").show();
           
            
            $("#enemies-left").show();
            $("#attack-button").hide();
            $("#no-enemy").hide();
           

            $("#defender").empty();
            selectedDefender = "";

            console.log(ap);
            ap = (ap + 10);

            ap.attack = ap;
            console.log(ap);
        }

      
        //win
        if ($(".move").children().length == 0) {
            $("#attack-text").empty();
            $("#counter-text").empty();
            $("#you-lose").empty();
            $("#no-enemy").hide();
            $("#you-win").text("You won! The evil has been defeated.");

            $("#restart").click(function () {
                location.reload(true);
            })

        }



        //lose 
        if (hp <= 0) {
            console.log(hp);

            // You lose.
            $("#attack-text").empty();
            $("#counter-text").empty();
            $("#you-win").empty();
            $("#you-lose").html("You've been defeated... Perhaps you will have your chance in the extended universe.")
            $(".lose").hide();
            $("#defender").hide();
            $("#fighter").empty();
            $("#enemies-left").hide();
            $("#attack-button").hide();
            $("#no-enemy").hide();
            $("#restart").show();

            $("#restart").click(function () {
                location.reload(true);
            });

        }

    })

});