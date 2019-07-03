var attack;
var defend;
var attackcharacter;
var health;
var attack;
var enemyattackback;
var dfcharacter;
var dfhealth;
var dfattack;
var dfenemyattackback;
var name;
var YourCharacter;
var YourDefender;
var selectedFighter = "";
var selectedDefender = "";


var characters = {
    rey: {
        name: 'Rey',
        health: 150,
        attack: 10,
        imageUrl: '../assets/images/rey.jpg',
        enemyattackback: 5
    },

    ventress: { //asajj ventress
        name: 'Asajj Ventress',
        health: 175,
        attack: 15,
        imageUrl: '../assets/images/ventress.jpg',
        enemyattackback: 20
    },

    general: { //general grievous
        name: 'General Grievous',
        health: 200,
        attack: 5,
        imageUrl: '../assets/images/general.jpg',
        enemyattackback: 10
    },

    dooku: { //count dooku
        name: 'Count Dooku',
        health: 150,
        attack: 20,
        imageUrl: '../assets/images/dooku.jpg',
        enemyattackback: 15
    }
}


var selectedEnemy;
var enemiesLeft = [];
var selectedFighterIndex;
var result;

function reset() {
    $('.char').show();
    var selectedFighter = "";
    var selectedDefender = "";
    var enemiesLeft = [];

    characters.rey.health = 140;
    characters.ventress.health = 100;
    characters.general.health = 150;
    characters.dooku.health = 180;

    // reset attack power.
    characters.rey.attack = 8;
    characters.ventress.attack = 10;
    characters.general.attack = 10;
    characters.dooku.attack = 12;

    // delete all in-game text.
    $(".youAttacked").empty();
    $(".attackedBack").empty();
    $(".youDefeated").empty();
    $(".youWon").empty();
    $(".youLose").empty();
    $(".noEnemy").empty();

    //writing each characters health to the html so they show up on the page.
    $(".reyHp").html(characters.rey.health);
    $(".ventressHp").html(characters.ventress.health);
    $(".generalHp").html(characters.general.health);
    $(".dookuHp").html(characters.dooku.health);



}

$(document).ready(function () {
    reset();


$(".row1").click(function(){

console.log(this);
    if (selectedFighter == "") {
        $(this).appendTo("#fighter");
        selectedFighter = $(this);
        yourChar = $('#fighter').attr("value");
    }

    if (yourChar == characters.rey.name) {
        health = characters.rey.health;
        attack = characters.rey.attack;
        enemyattackback = characters.rey.enemyattackback;
        
    } else if (yourChar == characters.ventress.name) {
        health = characters.ventress.health;
        attack = characters.ventress.attack;
        enemyattackback = characters.ventress.enemyattackback;

    } else if (yourChar == characters.general.name) {
        health = characters.general.health;
        attack = characters.general.attack;
        enemyattackback = characters.general.enemyattackback;

    } else if (yourChar == characters.dooku.name) {
        health = characters.dooku.health;
        attack = characters.dooku.attack;
        enemyattackback = characters.dooku.enemyattackback;

    }

    for (var i = 0; i < 4; i++) {
        $("._" + [i]).not(yourChar).appendTo("#enemy" + [i]);
    }

    
console.log(yourChar);

});

$("#enemies-left").click(function(){

    console.log(this);
        if (selectedDefender == "") {
            $(this).append("#enemies-left");
            selectedDefender = $(this);
            YourDefender = $(selectedDefender).children().attr("value");
        }
    
        if (YourDefender == characters.rey.name) {
            dfhealth = characters.rey.health;
            dfattack = characters.rey.attack;
            dfenemyattackback = characters.rey.enemyattackback;
            
        } else if ( YourDefender == characters.ventress.name) {
            dfhealth = characters.ventress.health;
            dfattack = characters.ventress.attack;
            dfenemyattackback = characters.ventress.enemyattackback;
    
        } else if (YourDefender == characters.general.name) {
            dfhealth = characters.general.health;
            dfattack = characters.general.attack;
            dfenemyattackback = characters.general.enemyattackback;
    
        } else if (YourDefender == characters.dooku.name) {
            dfhealth = characters.dooku.health;
            dfattack = characters.dooku.attack;
            dfenemyattackback = characters.dooku.enemyattackback;
    
        }
        
    console.log(YourDefender);
    
    });

    $("#enemies-left").click(function(){

        console.log(this);
            if (selectedDefender == "") {
                $(this).appendTo("#enemies-left");
                selectedDefender = $(this);
                YourDefender = $(selectedDefender).children().attr("value");
            }
        
            if (YourDefender == characters.rey.name) {
                dfhealth = characters.rey.health;
                dfattack = characters.rey.attack;
                dfenemyattackback = characters.rey.enemyattackback;
                
            } else if ( YourDefender == characters.ventress.name) {
                dfhealth = characters.ventress.health;
                dfattack = characters.ventress.attack;
                dfenemyattackback = characters.ventress.enemyattackback;
        
            } else if (YourDefender == characters.general.name) {
                dfhealth = characters.general.health;
                dfattack = characters.general.attack;
                dfenemyattackback = characters.general.enemyattackback;
        
            } else if (YourDefender == characters.dooku.name) {
                dfhealth = characters.dooku.health;
                dfattack = characters.dooku.attack;
                dfenemyattackback = characters.dooku.enemyattackback;
        
            }
            
        console.log(YourDefender);
        
        });

});
