/** 
 * @author Ricardo Antonio Cutz Hernandez
 * This is the express server for the tracking service
 * 
 * **/
const express = require('express'); // import expresss
const app = express(); 
const morgan = require('morgan');
const track = require('./tracking.js')

app.use(morgan('dev'));

// ROUTES

/**
 * Description:
    ------------
    This url adds a driver to the tracking queue

    Example URL:
    ------------
    /add_driver?driver_id=1&name=ric&lastname=ric&distance=10&pos_x=10&pos_y=10&client_id=1

    Returns:
    --------
    code 200:
        returns the driver added to the queue
    
    code 400:
        returns error message, parameters are not the correct ones

    code 500:
        returns server error
 */
app.get('/add_driver', (req, res)=>{
    try
    {
        if(Object.keys(req.query).length == 7)
        {
            d = {
                "client_id": req.query.client_id,
                "driver_id":req.query.driver_id,
                "name": req.query.name,
                "lastname": req.query.lastname,
                "distance": Math.floor(req.query.distance),
                "pos_x": req.query.pos_x,
                "pos_y": req.query.pos_y
            };
            track.add_driver(d);
            res.status(200);
            res.send({"message": "ok", "driver_added": d});
        }
        else
        {
            res.status(400);
            res.send({"message":"wrong parameters send"});
        }
    }
    catch(exception)
    {
        res.status(500);
        res.send({"message": exception});
    }
});

/**
 * Description:
    ------------
    This url adds a driver to the tracking queue

    Example URL:
    ------------
    /get_position?driver_id=1&client_id=2

    Returns:
    --------
    code 200:
        returns the driver's current distance and combination , client - driver
    
    code 400:
        returns error message, parameters are not the correct ones

    code 500:
        returns server error
 */
app.get('/get_position', (req, res)=>{
    try
    {
        if(Object.keys(req.query).length == 2)
        {
            d_id = req.query.driver_id;
            c_id = req.query.client_id;
            distance = track.get_current_distance(d_id, c_id);
            if(distance != null)
            {
                res.status(200);
                res.send({
                    "message": "ok",
                    "progress": {
                        "driver_id": d_id,
                        "client_id": c_id,
                        "distance": distance
                    }
                });
            }
            else
            {
                res.status(404);
                res.send({
                    "message": "Client - Driver not found"
                });
            }
        }
        else
        {
            res.status(400);
            res.send({
               "message":"bad request, parameters are not the correct ones" 
            });
        }
    }
    catch(exception)
    {
        res.status(500);
        res.send({"message": exception});
    }
});

app.listen(8001, ()=>{ // server listening
    console.log("Server listening on port 8001");
});