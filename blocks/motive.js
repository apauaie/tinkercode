goog.provide('Blockly.Blocks.motive');

goog.require('Blockly.Blocks');



Blockly.Blocks['motive_led'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["ON", "HIGH"], ["OFF", "LOW"]]), "STAT")
        .appendField("motive LED")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["LED1", "30"], ["LED2", "31"],["LED3", "32"], ["LED4", "33"],["LED5", "34"],["LED6", "35"],["LED7", "36"],["LED8", "37"],["LED9", "38"],["LED10", "39"],["LED11", "40"],["LED12", "41"]]), "port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('motive LED');
  }
};

Blockly.Blocks['motive_all_led'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Turn All")
        .appendField(new Blockly.FieldDropdown([["ON", "HIGH"], ["OFF", "LOW"]]), "STAT")
        .appendField("motive LED")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('motive ALL LED');
  }
};

Blockly.Blocks['motive_rgb'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Turn")
        .appendField("motive RGB")
        .appendField(new Blockly.FieldDropdown([["RED", "0,255,0"], ["BLUE", "0,0,255"], ["GREEN", "255,0,0"]]), "color")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('motive RGB');
  }
};

Blockly.Blocks['motive_rgb_num'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("motive RGB")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
    this.appendValueInput("red_color", 'Number')
        .appendField("RED")
        .setCheck('Number');
    this.appendValueInput("green_color", 'Number')
    	.appendField("GREEN")
        .setCheck('Number');
    this.appendValueInput("blue_color", 'Number')
    	.appendField("BLUE")
        .setCheck('Number');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('motive RGB Raw');
  }
};





Blockly.Blocks['motive_motor_steer'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Steer Motive Motor")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["LEFT", "left"], ["RIGHT", "right"],["FORWARD", "forward"], ["REVERSE", "backward"],["STOP", "stop"]]), "DIR")
        this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed (0~100)");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR STEER');
  }
};		

Blockly.Blocks['motive_motor_tank'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Tank Move motive Motor")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField("DirectionLeft")
        .appendField(new Blockly.FieldDropdown([["FORWARD", "forward"], ["REVERSE", "backward"]]), "DIRL")
        .appendField("DirectionRight")
        .appendField(new Blockly.FieldDropdown([["FORWARD", "forward"], ["REVERSE", "backward"]]), "DIRR")
        this.appendValueInput("SPEEDL", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Left(0~100)")
        this.appendValueInput("SPEEDR", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~100)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR TANK');
  }
};
Blockly.Blocks['motive_calibrate'] = {
  helpUrl: 'http://www.arduino.cc/playground/',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("motive Calibrate Line Sensor")
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Calibrate Line Sensor');
  }
};


Blockly.Blocks['motive_tracer'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Motive Line Tracer")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["Black Line", "0"], ["White Line", "1"]]), "line");

        this.appendValueInput("Left", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Left(0~100)")
        this.appendValueInput("Right", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~100)");
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


Blockly.Blocks['motive_path'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Motive Path")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField("Junction")
        .appendField(new Blockly.FieldDropdown([["Left", "2"], ["Right", "1"],["Middle", "3"]]), "junction")
        .appendField("Action")
        .appendField(new Blockly.FieldDropdown([["Turn Left", "2"], ["Turn Right", "3"],["Stop", "1"]]), "action")
        this.appendValueInput("Left", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Left(0~100)")
        this.appendValueInput("Right", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~100)");
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
    this.setTooltip('Line Tracer');
  }
};

Blockly.Blocks['motive_motor_left'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Left Motive Motor")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["CLOCKWISE", "clockwise"], ["ANTI CLOCKWISE", "anticlockwise"]]), "DIR")
        this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~100)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR LEFT');
  }
};

Blockly.Blocks['motive_motor_right'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Right Motive Motor")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["CLOCKWISE", "clockwise"], ["ANTI CLOCKWISE", "anticlockwise"]]), "DIR")
        this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed Right(0~100)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('MOTOR RIGHT');
  }
};






Blockly.Blocks['motive_ldr'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
       .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))

        .appendField("motive Light Sensor")
    this.setOutput(true, 'Number');
    this.setTooltip('Return LDR reading');
  }
};



Blockly.Blocks['motive_ir'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
       .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField("motive IR Sensor")
    this.setOutput(true, 'Number');
    this.setTooltip('Return IR reading');
  }
};



Blockly.Blocks['motive_ultrasonic'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Ultrasonic',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
               .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))

        .appendField("motive Ultrasonic Sensor")
		 this.setOutput(true, 'Number');
    this.setTooltip('Return Ultrasonic Distance reading in CM');
  }
};



Blockly.Blocks['motive_siren'] = {
  helpUrl: 'http://www.arduino.cc/playground/',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("motive Play Siren")
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play Siren 10s');
  }
};






Blockly.Blocks['motive_button'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("motive Read Button")
		.appendField(new Blockly.FieldDropdown([["PB1", "49"],["PB2", "48"]]), "port")
    this.setOutput(true, 'Number');
    this.setTooltip('Return button reading');
  }
};
	
Blockly.Blocks['motive_oled_clear'] = {
  helpUrl: 'http://www.arduino.cc/playground/',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Motive Clear OLED")
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Clear OLED');
  }
};

Blockly.Blocks['motive_oled_display'] = {
  helpUrl: 'http://www.arduino.cc/playground/',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Motive Display OLED")
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Display OLED');
  }
};						

Blockly.Blocks['motive_oled_write'] = {
  init: function() {
    this.setColour(15);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField('Motive OLED Write');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Print DATA on OLED');
  }
};
Blockly.Blocks['motive_oled_cursor'] = {
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Motive OLED Cursor")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
    this.appendValueInput("x", 'Number')
        .appendField("x")
        .setCheck('Number');
    this.appendValueInput("y", 'Number')
        .appendField("y")
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Cursor');
  }
};
Blockly.Blocks['motive_oled_size'] = {
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Motive OLED Text Size")
    this.appendValueInput("size", 'Number')
        .appendField("size")
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Set Size');
  }
};

Blockly.Blocks['motive_oled_color'] = {
  helpUrl: '',
  init: function() {
    this.setColour(15);
    this.appendDummyInput()
        .appendField("Select OLED Color")
        .appendField(new Blockly.FieldImage("../media/motive.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["WHITE", "WHITE"], ["YELLOW", "YELLOW"]]), "colori")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('OLED Color');
  }
};