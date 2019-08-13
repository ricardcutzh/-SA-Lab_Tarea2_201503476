/** 
 * @author Ricardo Antonio Cutz Hernandez
 * This File defines all the services in the app
 * 
 * **/

 // SERVICES REGISTERED IN THE SYSTEM
 const services = {
     "client_service":{
         "name":"http://clientservice",
         "port":"8001",
         "get_client": "get_client?id_client="
     }
     ,
     "notification_service":{
         "name":"http://notificationservice",
         "port": "8001",
     }
     ,
     "tracking_service":{
         "name":"http://trackingservice",
         "port": "8001"
     }
 };

 /**
  * RETURNS SERVICE URL
  * @param {*} id_client 
  */
function client_service_url(id_client)
{
    return services.client_service.name+":"+services.client_service.port+"/"+services.client_service.get_client+""+id_client;
}

/**
 * RETURNS SERVICE URL
 * @param {*} id_client 
 * @param {*} name 
 * @param {*} lastname 
 * @param {*} pos_x 
 * @param {*} pos_y 
 */
function notification_service_url_get_driver(id_client, name, lastname, pos_x, pos_y)
{
    return services.notification_service.name+":"+services.notification_service.port+"/get_driver?id_client="+id_client+"&name="+name+"&lastname="+lastname+"&pos_x="+pos_x+"&pos_y="+pos_y;
}

/**
 * RETURNS SERVICE URL
 * @param {*} driver_id 
 * @param {*} client_id 
 * @param {*} name 
 * @param {*} lastname 
 * @param {*} pos_x 
 * @param {*} pos_y 
 * @param {*} distance 
 */
function tracking_service_add_driver(driver_id, client_id, name, lastname, pos_x, pos_y, distance)
{
    return services.tracking_service.name+":"+services.tracking_service.port+"/add_driver?driver_id="+driver_id+"&name="+name+"&lastname="+lastname+"&distance="+distance+"&pos_x="+pos_x+"&pos_y="+pos_y+"&client_id="+client_id;
}

/**
 * RETURNS SERVICE URL
 * @param {*} driver_id 
 * @param {*} client_id 
 */
function tracking_service_get_position(driver_id, client_id)
{
    return services.tracking_service.name+":"+services.tracking_service.port+"/get_position?driver_id="+driver_id+"&client_id="+client_id;
}

 module.exports = {
     client_service_url,
     notification_service_url_get_driver,
     tracking_service_add_driver,
     tracking_service_get_position
 }