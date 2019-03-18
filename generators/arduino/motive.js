
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

goog.provide('Blockly.Arduino.motive');

goog.require('Blockly.Arduino');



Blockly.Arduino.motive_led = function() {
  var dropdown_pin = this.getFieldValue('port');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+ dropdown_stat+');\n';
  return code;
};


Blockly.Arduino.motive_all_led = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_30'] = 'pinMode(30, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_31'] = 'pinMode(31, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_32'] = 'pinMode(32, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_33'] = 'pinMode(33, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_34'] = 'pinMode(34, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_35'] = 'pinMode(35, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_36'] = 'pinMode(36, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_37'] = 'pinMode(37, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_38'] = 'pinMode(38, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_39'] = 'pinMode(39, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_40'] = 'pinMode(40, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_41'] = 'pinMode(41, OUTPUT);';
  
  var code = 'digitalWrite(30,'+ dropdown_stat+');\ndigitalWrite(31,'+ dropdown_stat+');\ndigitalWrite(32,'+ dropdown_stat+');\ndigitalWrite(33,'+ dropdown_stat+');\ndigitalWrite(34,'+ dropdown_stat+');\ndigitalWrite(35,'+ dropdown_stat+');\ndigitalWrite(36,'+ dropdown_stat+');\ndigitalWrite(37,'+ dropdown_stat+');\ndigitalWrite(38,'+ dropdown_stat+');\ndigitalWrite(39,'+ dropdown_stat+');\ndigitalWrite(40,'+ dropdown_stat+');\ndigitalWrite(41,'+ dropdown_stat+');\n';
  return code;
};


Blockly.Arduino.motive_rgb_num = function() {

    var r = Blockly.Arduino.valueToCode(this, 'red_color', Blockly.Arduino.ORDER_ATOMIC);
    var g = Blockly.Arduino.valueToCode(this, 'green_color', Blockly.Arduino.ORDER_ATOMIC);
    var b = Blockly.Arduino.valueToCode(this, 'blue_color', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.setups_['setup_output_5'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_4'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_3'] = 'pinMode(3, OUTPUT);';

  var code = 'analogWrite(5,'+r+');\nanalogWrite(4,'+g+');\nanalogWrite(3,'+b+');\n';
  return code;
};







Blockly.Arduino.motive_digital = function() {
  var dropdown_pin = this.getFieldValue('port');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+ dropdown_stat+');\n';
  return code;
};




Blockly.Arduino.motive_ldr = function() {
  var dropdown_pin = 'A6';
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', INPUT);';

    var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.motive_ir = function() {
  var dropdown_pin = this.getFieldValue('port');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', INPUT);';

    var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.motive_ultrasonic = function() {

	  var trig= 14;
	  var echo= 15;

  Blockly.Arduino.setups_['setup_input_' + trig] = 'pinMode('+ trig +', OUTPUT);';
  Blockly.Arduino.setups_['setup_input_' + echo] = 'pinMode('+ echo +', INPUT);';


Blockly.Arduino.definitions_['define_motive_ultrasonic'] = "int motive_ultrasonic(byte trig,byte echo)\n"+
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
    

  	var code='motive_ultrasonic('+trig+','+echo+')';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.motive_button = function() {
  var dropdown_pin = this.getFieldValue('port');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', INPUT);';

    var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Arduino.motive_motor_steer = function() {
  var left_dir1,right_dir1,left_dir2,right_dir2,left_speed,right_speed;
  var dropdown_dir = this.getFieldValue('DIR');
  var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  value_speed= Math.round(value_speed/100*255); //map value to 0-255
  
  if (dropdown_dir=="backward") {left_dir1="HIGH";left_dir2="LOW";right_dir1="HIGH";right_dir2="LOW";left_speed=value_speed;right_speed=value_speed;}
 else if (dropdown_dir=="forward") {left_dir1="LOW";left_dir2="HIGH";right_dir1="LOW";right_dir2="HIGH";left_speed=value_speed;right_speed=value_speed;}
  else if (dropdown_dir=="left") {left_dir1="HIGH";left_dir2="LOW";right_dir1="LOW";right_dir2="HIGH";left_speed=Math.round(value_speed/1.5);right_speed=value_speed;}
  else if (dropdown_dir=="right") {left_dir1="LOW";left_dir2="HIGH";right_dir1="HIGH";right_dir2="LOW";left_speed=value_speed;right_speed=Math.round(value_speed/1.5);}
  else if (dropdown_dir=="stop") {left_dir1="LOW";left_dir2="LOW";right_dir1="LOW";right_dir2="LOW";left_speed=0;right_speed=0;}
  else {left_dir1="HIGH";left_dir2="HIGH";right_dir1="HIGH";right_dir2="HIGH";left_speed=value_speed;right_speed=value_speed;}

    Blockly.Arduino.setups_['setup_motoren'] = 'pinMode(69, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_A'] = 'pinMode(10, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_B'] = 'pinMode(11, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A1'] = 'pinMode(65, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A2'] = 'pinMode(66, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B1'] = 'pinMode(67, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B2'] = 'pinMode(68, OUTPUT);';

   var code0 = 'digitalWrite(69,HIGH);\n';
	
   var code1 = 'analogWrite(10,'+ value_speed+');\n';
  
   var code2 = 'analogWrite(11,'+ value_speed+');\n';

   var code3 = 'digitalWrite(65,'+ left_dir1+');\n';

   var code4 = 'digitalWrite(66,'+ left_dir2+');\n';
   
   var code5 = 'digitalWrite(67,'+ right_dir1+');\n';

   var code6 = 'digitalWrite(68,'+ right_dir2+');\n';

   
  return code0+code1+code2+code3+code4+code5+code6;
};



Blockly.Arduino.motive_motor_tank = function() {
	  var left_dir1,right_dir1,left_dir2,right_dir2;

  var dropdown_dirl = this.getFieldValue('DIRL');
  var dropdown_dirr = this.getFieldValue('DIRR');
      var value_speedl = Blockly.Arduino.valueToCode(this, 'SPEEDL', Blockly.Arduino.ORDER_ATOMIC);
      value_speedl=Math.round(value_speedl/100*255)
      var value_speedr = Blockly.Arduino.valueToCode(this, 'SPEEDR', Blockly.Arduino.ORDER_ATOMIC);
	  value_speedr=Math.round(value_speedr/100*255)

if (dropdown_dirl=="forward") {left_dir1="LOW";left_dir2="HIGH";}
 else {left_dir1="HIGH";left_dir2="LOW";}
 if (dropdown_dirr=="forward") {right_dir1="LOW";right_dir2="HIGH";}
 else {right_dir1="HIGH";right_dir2="LOW";}
  
 

	    Blockly.Arduino.setups_['setup_motoren'] = 'pinMode(69, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_A'] = 'pinMode(10, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_B'] = 'pinMode(11, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A1'] = 'pinMode(65, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A2'] = 'pinMode(66, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B1'] = 'pinMode(67, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B2'] = 'pinMode(68, OUTPUT);';

   var code0 = 'digitalWrite(69,HIGH);\n';
	
   var code1 = 'analogWrite(10,'+ value_speedl+');\n';
  
   var code2 = 'analogWrite(11,'+ value_speedr+');\n';

   var code3 = 'digitalWrite(65,'+ left_dir1+');\n';

   var code4 = 'digitalWrite(66,'+ left_dir2+');\n';
   
   var code5 = 'digitalWrite(67,'+ right_dir1+');\n';

   var code6 = 'digitalWrite(68,'+ right_dir2+');\n';

   
  return code0+code1+code2+code3+code4+code5+code6;  
  
};


Blockly.Arduino.motive_motor_left = function() {
  var dropdown_dir = this.getFieldValue('DIR');
      var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
      value_speed=Math.round(value_speedl/100*255)

if (dropdown_dir=="clockwise") {left_dir1="LOW";left_dir2="HIGH";}
 else {left_dir1="HIGH";left_dir2="LOW";}
  
 
	  Blockly.Arduino.setups_['setup_motoren'] = 'pinMode(69, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_A'] = 'pinMode(10, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_B'] = 'pinMode(11, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A1'] = 'pinMode(A11, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A2'] = 'pinMode(A12, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B1'] = 'pinMode(A13, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B2'] = 'pinMode(A14, OUTPUT);';

	  var code0 = 'digitalWrite(69,HIGH);\n';
   var code1 = 'analogWrite(10,'+ value_speed+');\n';

   var code2 = 'digitalWrite(A11,'+ left_dir1+');\n';

   var code3 = 'digitalWrite(A12,'+ left_dir2+');\n';

   
  return code0+code1+code2+code3;
  
  
};



Blockly.Arduino.motive_motor_right = function() {
  var dropdown_dir = this.getFieldValue('DIR');
      var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
      value_speed=Math.round(value_speedl/100*255)

if (dropdown_dir=="clockwise") {right_dir1="LOW";right_dir2="HIGH";}
 else {right_dir1="HIGH";right_dir2="LOW";}
  
 
	    Blockly.Arduino.setups_['setup_motoren'] = 'pinMode(69, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_A'] = 'pinMode(10, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_B'] = 'pinMode(11, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A1'] = 'pinMode(A11, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A2'] = 'pinMode(A12, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B1'] = 'pinMode(A13, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B2'] = 'pinMode(A14, OUTPUT);';

  var code0 = 'digitalWrite(69,HIGH);\n';

   var code1 = 'analogWrite(11,'+ value_speed+');\n';

   var code2 = 'digitalWrite(A13,'+ right_dir1+');\n';

   var code3 = 'digitalWrite(A14,'+ right_dir2+');\n';

   
  return code0+ code1+code2+code3;
  
  
};

Blockly.Arduino.motive_siren = function() {

Blockly.Arduino.definitions_['define_motive_siren'] = 'int speakerPin=A7;\n\nvoid siren(){ for(int hz = 440; hz < 1000; hz++){\ntone(speakerPin, hz, 50);\ndelay(5);\n}\nnoTone(speakerPin);\nfor(int hz = 1000; hz > 440; hz--){\ntone(speakerPin, hz, 50);\ndelay(5);\n}\nnoTone(speakerPin);}\n';


     Blockly.Arduino.setups_['motive_siren']='pinMode(speakerPin,OUTPUT);';
          // get the device ID, this is just a test to see if we're connected
  

  	var code='siren();\n';

  return code;
};


Blockly.Arduino.motive_calibrate = function() {

Blockly.Arduino.definitions_['define_motive_motor_library'] = '#include "motive.h"\nmotive qtra((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';


     Blockly.Arduino.setups_['motive_motor_lib']='qtra.Motor(A15,11,10,A13,A14,A11,A12);';
          // get the device ID, this is just a test to see if we're connected
  

  	var code='qtra.calibrate();\n';

  return code;
};

Blockly.Arduino.motive_tracer = function() {


	  var linetype = this.getFieldValue('line');
      var left = Blockly.Arduino.valueToCode(this, 'Left', Blockly.Arduino.ORDER_ATOMIC);
      var right = Blockly.Arduino.valueToCode(this, 'Right', Blockly.Arduino.ORDER_ATOMIC);
      var turn = Blockly.Arduino.valueToCode(this, 'Turn', Blockly.Arduino.ORDER_ATOMIC);
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
      var sensor = Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC);

      
Blockly.Arduino.definitions_['define_motive_motor_library'] = '#include "motive.h"\nmotive qtra((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
     Blockly.Arduino.setups_['motive_motor_lib']='qtra.Motor(A15,11,10,A13,A14,A11,A12);';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='qtra.pid_line('+right+', '+left+', '+turn+', 255, '+kp+','+ kd+', '+linetype+', '+sensor+');\n';

  return code;
};

Blockly.Arduino.motive_path = function() {


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

      
Blockly.Arduino.definitions_['define_motive_motor_library'] = '#include "motive.h"\nmotive qtra((unsigned char[]) { A4, A3, A2, A1, A0} ,5, 4, QTR_NO_EMITTER_PIN);\n';
     Blockly.Arduino.setups_['motive_motor_lib']='qtra.Motor(A15,11,10,A13,A14,A11,A12);';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='qtra.motiveFinder('+junction+','+action+','+right+', '+left+', '+turn+', 255, '+kp+','+ kd+', '+sensor+','+fdelay+','+tdelay+');\n';

  return code;
};


Blockly.Arduino.motive_oled_write = function() {


  var texti = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'

      
Blockly.Arduino.definitions_['define_motive_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(22);\n';
     Blockly.Arduino.setups_['motive_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code=' display.print('+texti+');\n';

  return code;
};


Blockly.Arduino.motive_oled_clear = function() {



      
Blockly.Arduino.definitions_['define_motive_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(22);\n';
     Blockly.Arduino.setups_['motive_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.clearDisplay();\n';

  return code;
};

Blockly.Arduino.motive_oled_display = function() {



      
Blockly.Arduino.definitions_['define_motive_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(22);\n';
     Blockly.Arduino.setups_['motive_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.display();\n';

  return code;
};

Blockly.Arduino.motive_oled_color = function() {


	  var colord = this.getFieldValue('colori');

      
Blockly.Arduino.definitions_['define_motive_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(22);\n';
     Blockly.Arduino.setups_['motive_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.setTextColor('+colord+');\n';

  return code;
};

Blockly.Arduino.motive_oled_size = function() {


      var size = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);

      
Blockly.Arduino.definitions_['define_motive_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(22);\n';
     Blockly.Arduino.setups_['motive_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.setTextSize('+size+');\n';

  return code;
};

Blockly.Arduino.motive_oled_cursor = function() {

      var x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
      var y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);

	
      
Blockly.Arduino.definitions_['define_motive_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(22);\n';
     Blockly.Arduino.setups_['motive_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.setCursor('+x+','+y+');\n';

  return code;
};

