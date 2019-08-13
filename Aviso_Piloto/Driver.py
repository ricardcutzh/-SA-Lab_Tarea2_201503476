"""
@author: Ricardo Antonio Cutz Hernandez | 201503476
This file represents the driver in the system
"""
import random 
import math
class Driver():
    """
    Attributes
    ----------
    name: str
        name of the client
    lastname: str
        lastname of the client
    driver_id: int
        id representing a client
    pos_x: int
        driver's x position
    pos_y: int
        driver's y position
    """

    def __init__(self, name, lastname, id_driver):
        """
        Parameters:
        -----------
        name: str 
            name of the client
        lastname: str
            lastname of the client
        id_driver:
            id
        """
        self.driver_id = id_driver
        self.name = name
        self.lastname = lastname
        self.pos_x = random.randint(40,200)
        self.pos_y = random.randint(40,200)
        
    
    def get_distance(self, x, y):
        """
        Parameters:
        -----------
        x: int
            x position of the client
        y: int
            y position of the client
        
        Description:
        -----------
        returns the distance between the driver and the x, y point given
        """
        return math.sqrt(math.pow(self.pos_x-x,2)+math.pow(self.pos_y-y,2))