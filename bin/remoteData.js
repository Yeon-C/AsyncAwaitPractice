async function retrieveCity(CityName) {
    //Use the parameter to make the url    
    let url = "https://geocode.xyz/"+CityName+"?json=1"
    let complete = false;

    //Because the website almost always returns an error, I used a while loop to make sure I get the values I want
    while(!complete){    
        const city = await fetch(url);
        const data = await city.json();
        if(data['latt'] == undefined){
            complete = false;
        }else{
            complete = true;
            // geocode.xyz returns negative value for longitute, this is just for easier viewing.
            long = data['longt'] * -1;    
            console.log("The lattitude of " + CityName + " is : " + data['latt'] + "° N");
            console.log("The longitude of " + CityName + " is : " + long+ "° S");
        }
    }

    //If the geocode.xyz's api is working as intended, you can use this code

    // const data = await city.json();
    // console.log("The lattitude of " + CityName + " is : " + data['latt'] + "° N");
    // console.log("The longitude of " + CityName + " is : " + data['longt'] + "° S");
}
retrieveCity("seattle");
retrieveCity("chicago");
retrieveCity("topeka");



