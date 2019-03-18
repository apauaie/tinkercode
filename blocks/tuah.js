goog.provide('Blockly.Blocks.tuah');

goog.require('Blockly.Blocks');


Blockly.Blocks['tuah_led'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah LED")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
        .appendField("LED#")
        .appendField(new Blockly.FieldDropdown([["LED1", "0"], ["LED2", "13"],["LED3", "7"], ["LED4", "4"],["LED5", "1"]]), "LEDx")
        .appendField("stat")
        .appendField(new Blockly.FieldDropdown([["ON", "ON"], ["OFF", "OFF"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn LED');
  }
};

Blockly.Blocks['tuah_megablink'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Megablink")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
         this.appendValueInput("DELAY", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn Megablink LED');
  }
};

Blockly.Blocks['tuah_knightrider'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Running Light")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
         this.appendValueInput("DELAY", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Turn Running Light LED');
  }
};

Blockly.Blocks['tuah_motor_steer'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah STEER")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["LEFT", "left"], ["RIGHT", "right"],["FORWARD", "forward"], ["REVERSE", "backward"]]), "DIR")
        this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed (0~255)");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR STEER');
  }
};	

Blockly.Blocks['tuah_motor_stop'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Motor Stop")
        this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR Stop');
  }
};									

Blockly.Blocks['tuah_motor_tank'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah TANK")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
        .appendField("DirectionLeft")
        .appendField(new Blockly.FieldDropdown([["FORWARD", "forward"], ["REVERSE", "backward"]]), "DIRL")
        .appendField("DirectionRight")
        .appendField(new Blockly.FieldDropdown([["FORWARD", "forward"], ["REVERSE", "backward"]]), "DIRR")
        this.appendValueInput("SPEEDL", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Left(0~255)")
        this.appendValueInput("SPEEDR", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~255)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR TANK');
  }
};

Blockly.Blocks['tuah_ultrasonic_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Ultrasonic");

    this.setOutput(true, 'Number');
    this.setTooltip('Return distanse in CM');
  }
};

Blockly.Blocks['tuah_ultrasonic_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Ultrasonic',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
               .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))

        .appendField("Ultrasonic Sensor")
		 this.setOutput(true, 'Number');
    this.setTooltip('Return Ultrasonic Distance reading in CM');
  }
};


Blockly.Blocks['tuah_linesensor'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Line Sensor")
        .appendField(new Blockly.FieldDropdown([["s1", "s1"], ["s2", "s2"],["s3", "s3"], ["s4", "s4"],["s5", "s5"]]), "sensorx")
    this.setOutput(true, 'Number');
    this.setTooltip('Return line sensor reading');
  }
};

Blockly.Blocks['tuah_calibrate'] = {
  helpUrl: 'http://www.arduino.cc/playground/',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Calibrate Line Sensor")
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Calibrate Line Sensor');
  }
};


Blockly.Blocks['tuah_tracer'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Line Tracer")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
        .appendField(new Blockly.FieldDropdown([["Black Line", "0"], ["White Line", "1"]]), "line");

        this.appendValueInput("Left", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Left(0~255)")
        this.appendValueInput("Right", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~255)");
        this.appendValueInput("Turn", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Turn(0~255)");
        this.appendValueInput("Kp", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("KP(0.0~1)");
        this.appendValueInput("Kd", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("KD(0.0~1)");
        this.appendValueInput("Sensor", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sensor(0~255)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Line Tracer');
  }
};


Blockly.Blocks['tuah_path'] = {
  helpUrl: '',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Path")
        .appendField(new Blockly.FieldImage("../media/tuah.png", 64, 64))
        .appendField("Junction")
        .appendField(new Blockly.FieldDropdown([["Left", "2"], ["Right", "1"],["Middle", "3"]]), "junction")
        .appendField("Action")
        .appendField(new Blockly.FieldDropdown([["Turn Left", "2"], ["Turn Right", "3"],["Stop", "1"]]), "action")
        this.appendValueInput("Left", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Left(0~255)")
        this.appendValueInput("Right", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~255)");
        this.appendValueInput("Turn", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Turn(0~255)");
        this.appendValueInput("Kp", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("KP(0.0~1)");
        this.appendValueInput("Kd", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("KD(0.0~1)");
        this.appendValueInput("Sensor", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sensor(0~255)");
         this.appendValueInput("FDelay", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("F Delay(0~1000)");
         this.appendValueInput("TDelay", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("T Delay(0~1000)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Line Tracer with Junction detection');
  }
};


Blockly.Blocks['tuah_bluetooth_ready'] = {
  helpUrl: 'http://arduino.cc/en/Reference/bluetooth',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Tuah Bluetooth Data Ready?")
                    this.setOutput(true, 'Boolean');

    this.setTooltip('Return Bluetooth ready/not (Boolean)');
  }
};



Blockly.Blocks['tuah_bluetooth_data'] = {
  helpUrl: 'http://arduino.cc/en/Reference/bluetooth',
  init: function() {
    this.setColour(205);
    this.appendDummyInput()
        .appendField("Read Tuah Bluetooth Data")
    this.setOutput(true, 'String');

    this.setTooltip('Return Bluetooth data in Char');
  }
};

