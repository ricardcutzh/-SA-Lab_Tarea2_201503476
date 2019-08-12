/** 
 * @author Ricardo Antonio Cutz Hernandez
 * This file is in charge of managing the traking of diferent drivers
 * **/
var traking_drivers = [];
// function to simulate drivers movement
setInterval(update_drivers, 10000);

/**
 * function to add a driver to the list
 * @param {*} driver the driver to be added to the list
 */
function add_driver(driver){
    traking_drivers.push(driver);
}

/**
 * function in charge of emulating drivers distance changing
 */
function update_drivers(){
    console.log(" ");
    console.log("*****************************");
    console.log("* updating drivers distance....");
    console.log("*****************************");
    for(i = 0; i < traking_drivers.length; i++){
        d = traking_drivers[i];
        if(d.distance != 0)
        {
            d.distance = d.distance - 1;
            console.log("driver: "+d.name+" | distance "+d.distance+" | client: "+d.client_id);
        }
    }
    console.log("*****************************");
    console.log("* end...");
    console.log("*****************************");
}

/**
 * function that searches for a driver to return its distance
 * @param {*} id_driver id of the driver to get the distance
 * @param {*} id_client id of the client that asked for the driver
 */
function get_current_distance(id_driver, id_client){
    for(i = 0; i < traking_drivers.length; i++)
    {
        d = traking_drivers[i];
        if(d.driver_id == id_driver && d.client_id == id_client){
            return d.distance;
        }
    }
    return null;
}

module.exports = 
{
    add_driver,
    update_drivers,
    get_current_distance
}