
/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Arduino.tuah');

goog.require('Blockly.Arduino');


Blockly.Arduino.tuah_led = function() {
  var dropdown_pin = this.getFieldValue('LEDx');
  var dropdown_stat = this.getFieldValue('STAT');
  var code = 'bot.LED('+dropdown_pin+',"'+ dropdown_stat+'");\n'
  return code;
};

Blockly.Arduino.tuah_megablink = function() {
	    var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
	     Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
  var code = 'bot.megablink('+value_delay+');\n'
  return code;
};

Blockly.Arduino.tuah_knightrider = function() {
	    var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
	     Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
  var code = 'bot.knightrider('+value_delay+');\n'
  return code;
};



Blockly.Arduino.tuah_motor_steer = function() {
  var dropdown_dir = this.getFieldValue('DIR');
    var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
   var code = 'bot.motorsteer("'+dropdown_dir+'",'+ value_speed+');\n'
  return code;
};

Blockly.Arduino.tuah_motor_stop = function() {
  var dropdown_dir = this.getFieldValue('DIR');
    var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
   var code = 'bot.motorsteer("STOP",0);\n'
  return code;
};

Blockly.Arduino.tuah_motor_tank = function() {
  var dropdown_dirl = this.getFieldValue('DIRL');
  var dropdown_dirr = this.getFieldValue('DIRR');
      var value_speedl = Blockly.Arduino.valueToCode(this, 'SPEEDL', Blockly.Arduino.ORDER_ATOMIC);
      var value_speedr = Blockly.Arduino.valueToCode(this, 'SPEEDR', Blockly.Arduino.ORDER_ATOMIC);

 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
   var code = 'bot.motortank("'+dropdown_dirl+'",'+ value_speedl+',"'+dropdown_dirr+'",'+ value_speedr+');\n'
  return code;
};


Blockly.Arduino.tuah_ultrasonic_read = function() {

	  var trig= 14;
	  var echo= 15;

  Blockly.Arduino.setups_['setup_input_' + trig] = 'pinMode('+ trig +', OUTPUT);';
  Blockly.Arduino.setups_['setup_input_' + echo] = 'pinMode('+ echo +', INPUT);';


Blockly.Arduino.definitions_['define_tuah_ultrasonic'] = "int tuah_ultrasonic(byte trig,byte echo)\n"+
    "{\n"+
    "  digitalWrite(trig,LOW);\n"+ //NBR sens was reversed on left motor... so I added a not (!)
    "  delayMicroseconds(2);\n"+
    "  digitalWrite(trig,HIGH);\n"+
    "  delayMicroseconds(10);\n"+
    "  digitalWrite(trig,LOW);\n"+
    "  long duration= pulseIn(echo,HIGH);\n"+
    "  int distance= duration*0.034/2;\n"+
    " return distance;"+
    "}\n";
    

  	var code='tuah_ultrasonic('+trig+','+echo+')';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.tuah_linesensor = function() {
  var dropdown_sensor = this.getFieldValue('sensorx');
 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
    var code = 'bot.ir_sense('+dropdown_sensor+');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.tuah_calibrate = function() {

 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';

     Blockly.Arduino.setups_['tuah_motor_lib']='bot.Motor(6,5,2,3);';
          // get the device ID, this is just a test to see if we're connected
  

  	var code='bot.calibrate();\n';

  return code;
};

Blockly.Arduino.tuah_tracer = function() {


	  var linetype = this.getFieldValue('line');
      var left = Blockly.Arduino.valueToCode(this, 'Left', Blockly.Arduino.ORDER_ATOMIC);
      var right = Blockly.Arduino.valueToCode(this, 'Right', Blockly.Arduino.ORDER_ATOMIC);
      var turn = Blockly.Arduino.valueToCode(this, 'Turn', Blockly.Arduino.ORDER_ATOMIC);
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
      var sensor = Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC);

      
 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';     Blockly.Arduino.setups_['tuah_motor_lib']='bot.Motor(6,5,2,3);';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='bot.pid_line('+right+', '+left+', '+turn+', 255, '+kp+','+ kd+', '+linetype+', '+sensor+');\n';

  return code;
};

Blockly.Arduino.tuah_path = function() {


	  var junction = this.getFieldValue('junction');
	  var action = this.getFieldValue('action');
      var left = Blockly.Arduino.valueToCode(this, 'Left', Blockly.Arduino.ORDER_ATOMIC);
      var right = Blockly.Arduino.valueToCode(this, 'Right', Blockly.Arduino.ORDER_ATOMIC);
      var turn = Blockly.Arduino.valueToCode(this, 'Turn', Blockly.Arduino.ORDER_ATOMIC);
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
      var sensor = Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC);
      var fdelay = Blockly.Arduino.valueToCode(this, 'FDelay', Blockly.Arduino.ORDER_ATOMIC);
      var tdelay = Blockly.Arduino.valueToCode(this, 'TDelay', Blockly.Arduino.ORDER_ATOMIC);

      
 Blockly.Arduino.definitions_['define_tuah'] = '#include <Tuah.h>\n';
  Blockly.Arduino.definitions_['var_tuah'] = 'tuah bot((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';     Blockly.Arduino.setups_['tuah_motor_lib']='bot.Motor(6,5,2,3);';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='bot.pathfinder('+junction+','+action+','+right+', '+left+', '+turn+', 255, '+kp+','+ kd+', '+sensor+','+fdelay+','+tdelay+');\n';

  return code;
};

Blockly.Arduino.tuah_bluetooth_ready = function() {



Blockly.Arduino.definitions_['define_tuah_bluetooth'] = "#include <SoftwareSerial.h>\n SoftwareSerial tuahbluetooth(12, 11); \n char BTdata; // variable for bluetooth";


     Blockly.Arduino.setups_['tuah_bluetooth']='tuahbluetooth.begin(9600);\n';
          // get the device ID, this is just a test to see if we're connected
  
    

  	var code='tuahbluetooth.available()';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.tuah_bluetooth_data = function() {



Blockly.Arduino.definitions_['define_tuah_bluetooth'] = "#include <SoftwareSerial.h>\nSoftwareSerial tuahbluetooth(12, 11); \n // variable for bluetooth";


     Blockly.Arduino.setups_['tuah_bluetooth']='tuahbluetooth.begin(9600);\n';
          // get the device ID, this is just a test to see if we're connected
  
    

  	var code='tuahbluetooth.read()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

