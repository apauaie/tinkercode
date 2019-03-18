
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

goog.provide('Blockly.Arduino.eureqa');

goog.require('Blockly.Arduino');

Blockly.Arduino.eureqa_rgb = function() {
	  var port = this.getFieldValue('port');
   var spliter = port.split(',');
	  var DIGITAL_PIN= spliter[0];
	  var PORT= spliter[1];
	  var PORT_PIN= spliter[2];
  var color = this.getFieldValue('color');
   var spliter = color.split(',');
	  var g= spliter[0];
	  var r= spliter[1];
	  var b= spliter[2];
 Blockly.Arduino.definitions_['define_rgb_'] = 'uint8_t* rgb_arr = NULL;uint32_t t_f;\n uint8_t *w;\n volatile uint8_t *p,val,high,low,nbits;\n';

  Blockly.Arduino.setups_['setup_output' + DIGITAL_PIN] = 'pinMode('+ DIGITAL_PIN +', OUTPUT);';
    Blockly.Arduino.setups_['setup_rgb'] = '  rgb_arr = (uint8_t *)malloc(3);\n memset(rgb_arr, 0, 3);\n';

  var code = ' *w = &rgb_arr[0]; *w++ = '+g+';  *w++ = '+r+';*w = '+b+';  while((micros() - t_f) < 50L);cli();  *p = rgb_arr,val  = *p++,high = '+PORT+' |  _BV('+PORT_PIN+'),low  = '+PORT+' & ~_BV('+PORT_PIN+'),nbits= 8;asm volatile("nextbit:\\n\\t""sbi  %0, %1\\n\\t""sbrc %4, 7\\n\\t""mov  %6, %3\\n\\t""dec  %5\\n\\t""nop\\n\\t""st   %a2, %6\\n\\t""mov  %6, %7\\n\\t""breq nextbyte\\n\\t""rol  %4\\n\\t""rjmp .+0\\n\\t""cbi   %0, %1\\n\\t""rjmp .+0\\n\\t""nop\\n\\t""rjmp nextbit\\n\\t""nextbyte:\\n\\t""ldi  %5, 8\\n\\t""ld   %4, %a8+\\n\\t""cbi   %0, %1\\n\\t""rjmp .+0\\n\\t""nop\\n\\t" "dec %9\\n\\t""brne nextbit\\n\\t"::"I" (_SFR_IO_ADDR('+PORT+')),"I" ('+PORT_PIN+'),"e" (&'+PORT+'),"r" (high),"r" (val),"r" (nbits),"r" (low),"r" (low),"e" (p),"w" (3));sei(); t_f = micros(); \n';
  return code;
};


Blockly.Arduino.eureqa_rgb_num = function() {
	  var port = this.getFieldValue('port');
   var spliter = port.split(',');
	  var DIGITAL_PIN= spliter[0];
	  var PORT= spliter[1];
	  var PORT_PIN= spliter[2];
    var r = Blockly.Arduino.valueToCode(this, 'red_color', Blockly.Arduino.ORDER_ATOMIC);
    var g = Blockly.Arduino.valueToCode(this, 'green_color', Blockly.Arduino.ORDER_ATOMIC);
    var b = Blockly.Arduino.valueToCode(this, 'blue_color', Blockly.Arduino.ORDER_ATOMIC);



 Blockly.Arduino.definitions_['define_rgb_'] = 'uint8_t* rgb_arr = NULL;uint32_t t_f;\n uint8_t *w;\n volatile uint8_t *p,val,high,low,nbits;\n';

  Blockly.Arduino.setups_['setup_output' + DIGITAL_PIN] = 'pinMode('+ DIGITAL_PIN +', OUTPUT);';
  Blockly.Arduino.setups_['setup_rgb'] = '  rgb_arr = (uint8_t *)malloc(3);\n memset(rgb_arr, 0, 3);\n';

  var code = ' *w = &rgb_arr[0]; *w++ = '+g+';  *w++ = '+r+';*w = '+b+';  while((micros() - t_f) < 50L);cli();  *p = rgb_arr,val  = *p++,high = '+PORT+' |  _BV('+PORT_PIN+'),low  = '+PORT+' & ~_BV('+PORT_PIN+'),nbits= 8;asm volatile("nextbit:\\n\\t""sbi  %0, %1\\n\\t""sbrc %4, 7\\n\\t""mov  %6, %3\\n\\t""dec  %5\\n\\t""nop\\n\\t""st   %a2, %6\\n\\t""mov  %6, %7\\n\\t""breq nextbyte\\n\\t""rol  %4\\n\\t""rjmp .+0\\n\\t""cbi   %0, %1\\n\\t""rjmp .+0\\n\\t""nop\\n\\t""rjmp nextbit\\n\\t""nextbyte:\\n\\t""ldi  %5, 8\\n\\t""ld   %4, %a8+\\n\\t""cbi   %0, %1\\n\\t""rjmp .+0\\n\\t""nop\\n\\t" "dec %9\\n\\t""brne nextbit\\n\\t"::"I" (_SFR_IO_ADDR('+PORT+')),"I" ('+PORT_PIN+'),"e" (&'+PORT+'),"r" (high),"r" (val),"r" (nbits),"r" (low),"r" (low),"e" (p),"w" (3));sei(); t_f = micros();\n';
  return code;
};

Blockly.Arduino.eureqa_led = function() {
  var dropdown_pin = this.getFieldValue('port');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+ dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.eureqa_digital = function() {
  var dropdown_pin = this.getFieldValue('port');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+ dropdown_stat+');\n';
  return code;
};


Blockly.Arduino.eureqa_servo_move = function() {
  var dropdown_pin = this.getFieldValue('port');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

  var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n';
  return code;
};


Blockly.Arduino.eureqa_ldr = function() {
  var dropdown_pin = this.getFieldValue('port');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', INPUT);';

    var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eureqa_ir = function() {
  var dropdown_pin = this.getFieldValue('port');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', INPUT);';

    var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eureqa_ultrasonic = function() {
	  var port = this.getFieldValue('port');
	  var spliter = port.split(',');
	  var trig= spliter[0];
	  var echo= spliter[1];

  Blockly.Arduino.setups_['setup_input_' + trig] = 'pinMode('+ trig +', OUTPUT);';
  Blockly.Arduino.setups_['setup_input_' + echo] = 'pinMode('+ echo +', INPUT);';


Blockly.Arduino.definitions_['define_eureqa_ultrasonic'] = "int eureqa_ultrasonic(byte trig,byte echo)\n"+
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
    

  	var code='eureqa_ultrasonic('+trig+','+echo+')';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eureqa_button = function() {
  var dropdown_pin = this.getFieldValue('port');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode('+ dropdown_pin +', INPUT);';

    var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eureqa_motor_steer = function() {
  var left_dir,right_dir,left_speed,right_speed;
  var dropdown_dir = this.getFieldValue('DIR');
  var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  value_speed= value_speed/100*255; //map value to 0-255
  
  if (dropdown_dir=="forward") {left_dir="HIGH";right_dir="HIGH";left_speed=value_speed;right_speed=value_speed;}
 else if (dropdown_dir=="backward") {left_dir="LOW";right_dir="LOW";left_speed=value_speed;right_speed=value_speed;}
  else if (dropdown_dir=="left") {left_dir="HIGH";right_dir="LOW";left_speed=value_speed/2;right_speed=value_speed;}
  else if (dropdown_dir=="right") {left_dir="LOW";right_dir="HIGH";left_speed=value_speed;right_speed=value_speed/2;}
    else if (dropdown_dir=="stop") {left_dir="LOW";right_dir="LOW";left_speed=0;right_speed=0;}
  else {left_dir='HIGH';right_dir='HIGH';left_speed=value_speed;right_speed=value_speed;}

    
	  Blockly.Arduino.setups_['setup_motorpwm_A'] = 'pinMode(5, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_B'] = 'pinMode(6, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A'] = 'pinMode(17, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B'] = 'pinMode(9, OUTPUT);';


   var code1 = 'analogWrite(5,'+ left_speed+');\n';
  
   var code2 = 'analogWrite(6,'+ right_speed+');\n';

   var code3 = 'digitalWrite(17,'+ left_dir+');\n';

   var code4 = 'digitalWrite(9,'+ right_dir+');\n';

   
  return code1+code2+code3+code4;
};

Blockly.Arduino.eureqa_motor_tank = function() {
  var dropdown_dirl = this.getFieldValue('DIRL');
  var dropdown_dirr = this.getFieldValue('DIRR');
      var value_speedl = Blockly.Arduino.valueToCode(this, 'SPEEDL', Blockly.Arduino.ORDER_ATOMIC);
      value_speedl=value_speedl/100*255;
      var value_speedr = Blockly.Arduino.valueToCode(this, 'SPEEDR', Blockly.Arduino.ORDER_ATOMIC);
	  value_speedr=value_speedr/100*255;

if (dropdown_dirl=="forward") {left_dir="HIGH";}
 else {left_dir="LOW";}
 if (dropdown_dirr=="forward") {right_dir="HIGH";}
 else {right_dir="LOW";}
  
 

	  Blockly.Arduino.setups_['setup_motorpwm_A'] = 'pinMode(5, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motorpwm_B'] = 'pinMode(6, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_A'] = 'pinMode(17, OUTPUT);';
	  Blockly.Arduino.setups_['setup_motordir_B'] = 'pinMode(9, OUTPUT);';


   var code1 = 'analogWrite(5,'+ value_speedl+');\n';
  
   var code2 = 'analogWrite(6,'+ value_speedr+');\n';

   var code3 = 'digitalWrite(17,'+ left_dir+');\n';

   var code4 = 'digitalWrite(9,'+ right_dir+');\n';

   
  return code1+code2+code3+code4;
  
  
};

Blockly.Arduino.controls_whileforever = function() {
  // Do while/until loop.
  var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  if (this.getFieldValue ('MODE') == 'UNTIL') {
    if (!argument0.match(/^\w+$/)) {
      argument0 = '(' + argument0 + ')';
    }
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.Arduino.eureqa_colorsensor = function() {





Blockly.Arduino.definitions_['define_eureqa_colorsensor'] = "#include <Wire.h>\n"+
"#include <Math.h>\n"+
"byte i2cWriteBuffer[10];\n"+
"byte i2cReadBuffer[10];\n"+
"#define SensorAddressWrite 0x29 // \n"+
"#define SensorAddressRead 0x29 // \n"+
"#define EnableAddress 0xa0 // register address + command bits \n"+
"#define ATimeAddress 0xa1 // register address + command bits\n"+
"#define WTimeAddress 0xa3 // register address + command bits\n"+
"#define ConfigAddress 0xad // register address + command bits\n"+
"#define ControlAddress 0xaf // register address + command bits\n"+
"#define IDAddress 0xb2 // register address + command bits\n"+
"#define ColorAddress 0xb4 // register address + command bits\n";



Blockly.Arduino.definitions_['define_eureqa_colorsensor_function'] = "void Writei2cRegisters(byte numberbytes, byte command)\n"+
"{\n"+
"    byte i = 0;\n"+
"	Wire.beginTransmission(SensorAddressWrite);   // Send address with Write bit set\n"+
"    Wire.write(command);                          // Send command, normally the register address \n"+
"    for (i=0;i<numberbytes;i++)                       // Send data \n"+
"      Wire.write(i2cWriteBuffer[i]);\n"+
"    Wire.endTransmission();\n"+
"    delayMicroseconds(100);      // allow some time for bus to settle      \n"+
"}\n"+
"byte Readi2cRegisters(int numberbytes, byte command)\n"+
"{\n"+
"   byte i = 0;\n"+
"    Wire.beginTransmission(SensorAddressWrite);   // Write address of read to sensor\n"+
"    Wire.write(command);\n"+
"    Wire.endTransmission();\n"+
"    delayMicroseconds(100);\n"+
"    Wire.requestFrom(SensorAddressRead,numberbytes);   // read data\n"+
"    for(i=0;i<numberbytes;i++)\n"+
"      i2cReadBuffer[i] = Wire.read();\n"+
"    Wire.endTransmission();   \n"+
"    delayMicroseconds(100);      // allow some time for bus to settle      \n"+
"}  \n"+
"void init_TCS34725(void)\n"+
"{\n"+
"  i2cWriteBuffer[0] = 0x10;\n"+
"  Writei2cRegisters(1,ATimeAddress);    // RGBC timing is 256 - contents x 2.4mS =  \n"+
"  i2cWriteBuffer[0] = 0x00;\n"+
"  Writei2cRegisters(1,ConfigAddress);   // Can be used to change the wait time\n"+
"  i2cWriteBuffer[0] = 0x00;\n"+
"  Writei2cRegisters(1,ControlAddress);  // RGBC gain control\n"+
"  i2cWriteBuffer[0] = 0x03;\n"+
"  Writei2cRegisters(1,EnableAddress);    // enable ADs and oscillator for sensor  \n"+
"}\n"+
"void get_TCS34725ID(void)\n"+
"{\n"+
"  Readi2cRegisters(1,IDAddress);\n"+
"}\n"+
"int get_green()\n"+
"{\n"+
"  unsigned int green_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  green_color = (unsigned int)(i2cReadBuffer[5]<<8) + (unsigned int)i2cReadBuffer[4];\n"+
"int  g=map(green_color,0,65535,0,255);\n"+
"return g;\n"+
"}  \n"+
"int get_blue()\n"+
"{\n"+
"  unsigned int blue_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  blue_color = (unsigned int)(i2cReadBuffer[7]<<8) + (unsigned int)i2cReadBuffer[6];\n"+
"int  b=map(blue_color,0,65535,0,255);\n"+
"return b;\n"+
"}  \n"+
"int get_red()\n"+
"{\n"+
"  unsigned int red_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  red_color = (unsigned int)(i2cReadBuffer[3]<<8) + (unsigned int)i2cReadBuffer[2];\n"+
"int  r=map(red_color,0,65535,0,255);\n"+
"return r;\n"+
"}  \n"+
"int get_clear()\n"+
"{\n"+
"  unsigned int clear_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  clear_color = (unsigned int)(i2cReadBuffer[1]<<8) + (unsigned int)i2cReadBuffer[0];\n"+
"int  clrr=map(clear_color,0,65535,0,255);\n"+
"return clrr;\n"+
"}\n"+
"char color_detected()\n"+
"{ \n"+
" int red_color = get_red();\n"+
"    int green_color = get_green();\n"+
"    int blue_color = get_blue();\n"+
"  char co;\n"+
"  if((red_color>blue_color) && (red_color>green_color))\n"+
"    co='r';\n"+
"  else if((green_color>blue_color) && (green_color>red_color))\n"+
"    co='g';\n"+
"  else if((blue_color>red_color) && (blue_color>green_color))\n"+
"    co='b';\n"+
"  else\n"+
"    co='0';\n"+
"  return co;\n"+
"}\n";

    

  	var code='color_detected()';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.eureqa_sense = function() {
  var dropdown_color = this.getFieldValue('COLOR');


Blockly.Arduino.definitions_['define_eureqa_colorsensor'] = "#include <Wire.h>\n"+
"#include <Math.h>\n"+
"byte i2cWriteBuffer[10];\n"+
"byte i2cReadBuffer[10];\n"+
"#define SensorAddressWrite 0x29 // \n"+
"#define SensorAddressRead 0x29 // \n"+
"#define EnableAddress 0xa0 // register address + command bits \n"+
"#define ATimeAddress 0xa1 // register address + command bits\n"+
"#define WTimeAddress 0xa3 // register address + command bits\n"+
"#define ConfigAddress 0xad // register address + command bits\n"+
"#define ControlAddress 0xaf // register address + command bits\n"+
"#define IDAddress 0xb2 // register address + command bits\n"+
"#define ColorAddress 0xb4 // register address + command bits\n";



Blockly.Arduino.definitions_['define_eureqa_colorsensor_function'] = "void Writei2cRegisters(byte numberbytes, byte command)\n"+
"{\n"+
"    byte i = 0;\n"+
"	Wire.beginTransmission(SensorAddressWrite);   // Send address with Write bit set\n"+
"    Wire.write(command);                          // Send command, normally the register address \n"+
"    for (i=0;i<numberbytes;i++)                       // Send data \n"+
"      Wire.write(i2cWriteBuffer[i]);\n"+
"    Wire.endTransmission();\n"+
"    delayMicroseconds(100);      // allow some time for bus to settle      \n"+
"}\n"+
"byte Readi2cRegisters(int numberbytes, byte command)\n"+
"{\n"+
"   byte i = 0;\n"+
"    Wire.beginTransmission(SensorAddressWrite);   // Write address of read to sensor\n"+
"    Wire.write(command);\n"+
"    Wire.endTransmission();\n"+
"    delayMicroseconds(100);\n"+
"    Wire.requestFrom(SensorAddressRead,numberbytes);   // read data\n"+
"    for(i=0;i<numberbytes;i++)\n"+
"      i2cReadBuffer[i] = Wire.read();\n"+
"    Wire.endTransmission();   \n"+
"    delayMicroseconds(100);      // allow some time for bus to settle      \n"+
"}  \n"+
"void init_TCS34725(void)\n"+
"{\n"+
"  i2cWriteBuffer[0] = 0x10;\n"+
"  Writei2cRegisters(1,ATimeAddress);    // RGBC timing is 256 - contents x 2.4mS =  \n"+
"  i2cWriteBuffer[0] = 0x00;\n"+
"  Writei2cRegisters(1,ConfigAddress);   // Can be used to change the wait time\n"+
"  i2cWriteBuffer[0] = 0x00;\n"+
"  Writei2cRegisters(1,ControlAddress);  // RGBC gain control\n"+
"  i2cWriteBuffer[0] = 0x03;\n"+
"  Writei2cRegisters(1,EnableAddress);    // enable ADs and oscillator for sensor  \n"+
"}\n"+
"void get_TCS34725ID(void)\n"+
"{\n"+
"  Readi2cRegisters(1,IDAddress);\n"+
"}\n"+
"int get_green()\n"+
"{\n"+
"  unsigned int green_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  green_color = (unsigned int)(i2cReadBuffer[5]<<8) + (unsigned int)i2cReadBuffer[4];\n"+
"int  g=map(green_color,0,65535,0,255);\n"+
"return g;\n"+
"}  \n"+
"int get_blue()\n"+
"{\n"+
"  unsigned int blue_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  blue_color = (unsigned int)(i2cReadBuffer[7]<<8) + (unsigned int)i2cReadBuffer[6];\n"+
"int  b=map(blue_color,0,65535,0,255);\n"+
"return b;\n"+
"}  \n"+
"int get_red()\n"+
"{\n"+
"  unsigned int red_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  red_color = (unsigned int)(i2cReadBuffer[3]<<8) + (unsigned int)i2cReadBuffer[2];\n"+
"int  r=map(red_color,0,65535,0,255);\n"+
"return r;\n"+
"}  \n"+
"int get_clear()\n"+
"{\n"+
"  unsigned int clear_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  clear_color = (unsigned int)(i2cReadBuffer[1]<<8) + (unsigned int)i2cReadBuffer[0];\n"+
"int  clrr=map(clear_color,0,65535,0,255);\n"+
"return clrr;\n"+
"}\n"+
"char color_detected()\n"+
"{ \n"+
" int red_color = get_red();\n"+
"    int green_color = get_green();\n"+
"    int blue_color = get_blue();\n"+
"  char co;\n"+
"  if((red_color>blue_color) && (red_color>green_color))\n"+
"    co='r';\n"+
"  else if((green_color>blue_color) && (green_color>red_color))\n"+
"    co='g';\n"+
"  else if((blue_color>red_color) && (blue_color>green_color))\n"+
"    co='b';\n"+
"  else\n"+
"    co='0';\n"+
"  return co;\n"+
"}\n";

    
	if (dropdown_color=='RED')
  	var code='get_red()';
  	else if (dropdown_color=='BLUE')
  	var code='get_blue()';
  	else if (dropdown_color=='GREEN')
  	var code='get_green()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




