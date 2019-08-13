"""
@author: Ricardo Antonio Cutz Hernandez | 201503476
This file handles driver service operations
"""
from Driver import Driver # import class driver
# DRIVERS CURRENTLY IN THE APP
drivers = [
    Driver("D1", "D1", 1),
    Driver("D2", "D2", 2),
    Driver("D3", "D3", 3),
    Driver("D4", "D4", 4),
    Driver("D5", "D5", 5),
    Driver("D6", "D6", 6),
    Driver("D7", "D7", 7),
    Driver("D8", "D8", 8),
    Driver("D9", "D9", 9),
    Driver("D10", "D10", 10),
]

def search_driver(x, y):
    """
    Parameters:
    -----------
    client: Client
        is the client that needs a driver

    Description:
    -----------
    is in charge of returning a driver
    """
    closest = get_closest_driver(x, y)
    return closest


def get_closest_driver(x,y):
    """
    Parameters:
    -----------
    x: int
        x position
    y: int
        y position

    Description:
    -----------
    returns the closest driver
    """
    before = None
    ant_distance = None
    for d in drivers:
        distance = d.get_distance(x,y)
        if before is not None:
            if distance < ant_distance:
                before = d
                ant_distance = distance
        else:
            before = d
            ant_distance = distance
    return {"driver": before, "distance": ant_distance}