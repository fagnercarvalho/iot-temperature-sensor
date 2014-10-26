# IoT Temperature Sensor

A simple temperature sensor created for registering the temperature in my bedroom. 

Feel free to use and/or make any improvements to it. 

I developed this using Restify to connect to my API where the current temperature is updated and Cylon to connect to Arduino and get the temperature in my room using a LM35 sensor. 

## Instructions

1. With a Arduino UNO and a LM35 temperature sensor [implement this schematic](http://openhomeautomation.net/wp-content/uploads/2013/01/remtoe_temp-1024x443.jpg).

2. Connect the Arduino UNO to any USB port in your computer. Make sure you have install [Firmata](http://www.firmata.org/wiki/Main_Page) in your Arduino. If you dont, using [Arduino IDE](http://arduino.cc/en/Main/Software#toc1) run the example StandardFirmata located in File > Examples > Firmata.

3. Install dependencies. 

   ```
	npm install
   ```

4. Use my [API project](https://github.com/fagnercarvalho/iot-temperature-sensor-api), so you can see the temperature using a API. 

5. Run!

   ```
	node temperature-sensor.js url username password
   ```

There are 3 parameters: the url represents the address to the API where the updated temperature will be received, the user and password are needed for API user authorization purposes.

That's it! Arduino will get the current temperature in the room, and this app will output to the console and send the updated information to the API.

