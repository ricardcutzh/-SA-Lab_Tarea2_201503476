/** 
 * @author Ricardo Antonio Cutz Hernandez
 * This file describes de esb that will be in charge of managing all services
 * 
 * **/
const express = require('express'); // import expresss
const app = express();
const morgan = require('morgan');
const services = require("./services.js");
const request = require('request');
app.use(morgan('dev'));


/**
 * Method that handles the request for a service
 */
app.post('/request_driver', (req, res) => {
    try {
        if (Object.keys(req.query).length == 1) {
            client_id = parseInt(req.query.client_id,10);
            // CALLING CLIENT SERVICE TO GET USER INFO
            request.get(services.client_service_url(client_id)
                , { json: true }, (err, resu, body) => {
                    if (err) {
                        res.status(500);
                        res.send({"message": "Error client service: "+err});
                    }
                    else {
                        c_name = body.client.name;
                        c_lastname = body.client.lastname;
                        pos_x = body.client.pos_x;
                        pos_y = body.client.pos_y;
                        me = {
                            "name": c_name,
                            "lastname": c_lastname,
                            "my_id": client_id
                        }
                        ///////////////////////////
                        // CALLING NOTIFICATION SERVICE
                        request.get(services.notification_service_url_get_driver(client_id, c_name, c_lastname, pos_x, pos_y)
                        , {json:true}, (err2, resu2, body2)=>{
                            if(err2)
                            {
                                res.status(500);
                                res.send({"message": "Error notification: "+err2});
                            }
                            else
                            {
                                driver = {
                                    "name":body2.driver_info.name,
                                    "lastname":body2.driver_info.lastname,
                                    "driver_id": body2.driver_info.id_driver,
                                    "distance": body2.driver_info.distance
                                };
                                
                                // ADDING A DRIVER TO TRACKING SERVICE
                                // CALLING TO TRACKIN SERVICE TO ADD A PILOT
                                console.log(client_id);
                                request.get(services.tracking_service_add_driver(body2.driver_info.id_driver, client_id, body2.driver_info.name, body2.driver_info.lastname, 
                                    body2.driver_info.pos_x, body2.driver_info.pos_y, body2.driver_info.distance), {json:true}, (err3,resu3, body3)=>{
                                        if(err3)
                                        {
                                            res.status(500);
                                            res.send({"message": "Error notification: "+err3});
                                        }
                                        else
                                        {
                                            res.status(200);
                                            res.send(
                                                {
                                                    "my_driver":driver,
                                                    "my_id": me,
                                                    "message":"ok"
                                                }
                                            );
                                        }
                                    });
                            }
                        });
                    }
                });
        }
        else {
            res.status(400);
            res.send({ "message": "Bad request, not the right parameters" });
        }
    }
    catch (exception) {
        res.status(500);
        res.send({ "message": exception });
    }
});

app.get('/track_driver', (req,res)=>{
    try
    {
        if(Object.keys(req.query).length == 2)
        {
            client_id = req.query.client_id;
            driver_id = req.query.driver_id+"";
           // console.log(client_id);
            //console.log(driver_id);
            request.get(services.tracking_service_get_position(driver_id, client_id),{json:true}, (err, resu, body)=>{
                if(err)
                {
                    res.status(500);
                    res.send({"message": "Error notification: "+err});
                }
                else
                {
                    res.status(200);
                    res.send(body);
                }
            });
        }
        else
        {
            res.status(400);
            res.send({ "message": "Bad request, not the right parameters" });
        }
    }
    catch(exception)
    {
        res.status(500);
        res.send({ "message": exception });
    }
});
app.listen(8001, () => { // server listening
    console.log("Server listening on port 8001");
});