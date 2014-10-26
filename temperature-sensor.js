var Cylon = require("cylon");
var clientApi = require('./temperature-client-api.js')(process.argv[2], process.argv[3], process.argv[4]);

var robot = Cylon.robot({

  connection: { name: 'arduino', adaptor: 'firmata', port: 'COM7' },
  device:     { name: 'sensor', driver: 'analogSensor', pin: 0 },

  work: function(my) {
    var analogValue = 0;

    every((5).second(), function() {
      analogValue = my.sensor.analogRead(0);
      temperature = analogValue * 0.4887585532746823069403714565;

	    updateTemperature(temperature);
	  
      console.log('[Sensor] Current temperature (in Celsius) => ', temperature);
    });

  }
});

function updateTemperature(temperature) {
	clientApi.updateTemperature({ temperature: temperature }, function(err, res) {
		if (err) {
			console.error("[Sensor] Error updating temperature on the server: " + err + ".");
		} else {
			console.log("[Sensor] Success updating temperature on the server.");
		}
	});
}

robot.start();