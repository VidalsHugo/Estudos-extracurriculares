/*
According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π√a^3/μ
 
a  is the orbit's semi-major axis
μ=GM 
G 
M 

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    arr.forEach((e) => {
      e.orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt((Math.pow(e.avgAlt + earthRadius, 3)) / GM))
    delete e.avgAlt;
    })
    return arr;
  }
  
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);