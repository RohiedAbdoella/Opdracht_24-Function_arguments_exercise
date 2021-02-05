//no arguments

/*
const paintWall = function() {
    console.log("The wall has been painted red");
};

paintWall();
*/

//Single argument
/*
const paintWall = function(color) {
    console.log("The wall has been painted " + color);
};

paintWall("green");
*/

//Multiple arguments
const paintWall = function(wall, color) {
    console.log("The " + wall + "wall has been painted " + color);
};

paintWall("North", "green");