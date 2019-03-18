goog.provide('Blockly.Blocks.eureqa');

goog.require('Blockly.Blocks');



Blockly.Blocks['eureqa_led'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["ON", "HIGH"], ["OFF", "LOW"]]), "STAT")
        .appendField("euREQA LED")
        .appendField(new Blockly.FieldImage("../media/led.png", 64, 64))
        .appendField(new Blockly.FieldDropdown([["PORTA", "13"], ["PORTB", "7"],["PORTC", "18"], ["PORTD", "8"],["PORTE", "3"],["PORTF", "11"]]), "port");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('euREQA LED');
  }
};

Blockly.Blocks['eureqa_rgb'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("Turn")
        .appendField("euREQA RGB")
        .appendField(new Blockly.FieldDropdown([["RED", "0,255,0"], ["BLUE", "0,0,255"], ["GREEN", "255,0,0"]]), "color")
        .appendField(new Blockly.FieldImage("../media/led.png", 64, 64))
        .appendField(new Blockly.FieldDropdown([["PORTA", "13,PORTB,PORTB5"], ["PORTB", "7,PORTD,PORTD7"],["PORTC", "18,PORTC,PORTC4"], ["PORTD", "8,PORTB,PORTB0"],["PORTE", "3,PORTD,PORTD3"],["PORTF", "11,PORTB,PORTB3"]]), "port");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('euREQA RGB');
  }
};

Blockly.Blocks['eureqa_rgb_num'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("euREQA RGB")
        .appendField(new Blockly.FieldImage("../media/led.png", 64, 64))
        .appendField(new Blockly.FieldDropdown([["PORTA", "13,PORTB,PORTB5"], ["PORTB", "7,PORTD,PORTD7"],["PORTC", "18,PORTC,PORTC4"], ["PORTD", "8,PORTB,PORTB0"],["PORTE", "3,PORTD,PORTD3"],["PORTF", "11,PORTB,PORTB3"]]), "port");
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
    this.setTooltip('euREQA RGB Raw');
  }
};


Blockly.Blocks['eureqa_digital'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("euREQA set")
        .appendField(new Blockly.FieldImage("../media/euREQA.png", 64, 64))
        .appendField(new Blockly.FieldDropdown([["PORTA", "13"], ["PORTB", "7"],["PORTC", "18"], ["PORTD", "8"],["PORTE", "3"],["PORTF", "11"]]), "port")
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["ON", "HIGH"], ["OFF", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('euREQA Digital');
  }
};



Blockly.Blocks['eureqa_motor_steer'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("Steer euREQA Motor")
        .appendField(new Blockly.FieldImage("../media/motor.png", 64, 64))
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

Blockly.Blocks['eureqa_motor_tank'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("Tank Move euREQA Motor")
        .appendField(new Blockly.FieldImage("../media/motor.png", 64, 64))
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

//servo block
Blockly.Blocks['eureqa_servo_move'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("euREQA Servo")
        .appendField(new Blockly.FieldImage("../media/servo.png", 64, 64))
.appendField(new Blockly.FieldDropdown([["PORTA", "13"], ["PORTE", "3"],["PORTF", "11"]]), "port")
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Degree (0~180)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('move between 0~180 degree');
  }
};



Blockly.Blocks['eureqa_ldr'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
       .appendField(new Blockly.FieldImage("../media/ldr.png", 64, 64))

        .appendField("euREQA Light Sensor")
.appendField(new Blockly.FieldDropdown([["PORTA", "A6"],["PORTB", "A2"],["PORTC", "A5"],["PORTD", "A0"],["PORTE", "A1"]]), "port")
    this.setOutput(true, 'Number');
    this.setTooltip('Return LDR reading');
  }
};



Blockly.Blocks['eureqa_ir'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
       .appendField(new Blockly.FieldImage("../media/infrared.png", 64, 64))

        .appendField("euREQA Obstacle Sensor")
.appendField(new Blockly.FieldDropdown([["PORTA", "A6"],["PORTB", "A2"],["PORTC", "A5"],["PORTD", "A0"],["PORTE", "A1"]]), "port")
    this.setOutput(true, 'Number');
    this.setTooltip('Return IR reading');
  }
};



Blockly.Blocks['eureqa_bluetooth_ready'] = {
  helpUrl: 'http://arduino.cc/en/Reference/bluetooth',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
           .appendField(new Blockly.FieldImage("../media/euREQA.png", 64, 64))
        .appendField("euREQA Bluetooth Data Ready?")
                    this.setOutput(true, 'Boolean');

    this.setTooltip('Return Bluetooth ready/not (Boolean)');
  }
};



Blockly.Blocks['eureqa_bluetooth_data'] = {
  helpUrl: 'http://arduino.cc/en/Reference/bluetooth',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
           .appendField(new Blockly.FieldImage("../media/euREQA.png", 64, 64))
        .appendField("Read Bluetooth Data")
    this.setOutput(true, 'String');

    this.setTooltip('Return Bluetooth data in Char');
  }
};


Blockly.Blocks['eureqa_ultrasonic'] = {
  helpUrl: 'http://arduino.cc/en/Reference/Ultrasonic',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
               .appendField(new Blockly.FieldImage("../media/ultrasonic.png", 64, 64))

        .appendField("euREQA Ultrasonic Sensor")
.appendField(new Blockly.FieldDropdown([["PORTA", "A6,13"],["PORTB", "A2,7"],["PORTC", "A5,A4"],["PORTD", "A0,8"],["PORTE", "A1,3"]]), "port")
    this.setOutput(true, 'Number');
    this.setTooltip('Return Ultrasonic Distance reading in CM');
  }
};

Blockly.Blocks['eureqa_colorsensor'] = {
  helpUrl: 'http://arduino.cc/en/Reference/colorsensor',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField("euREQA Color Sensor")
        .appendField(new Blockly.FieldDropdown([["PORTC", "PORTC"]]), "PORTo")
    this.setOutput(true, 'String');
    this.setTooltip('Return Color as in r,g,b CHAR');
  }
};

Blockly.Blocks['eureqa_sense'] = {
  helpUrl: 'http://arduino.cc/en/Reference/colorsensor',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField("euREQA RGB Value")
        .appendField(new Blockly.FieldDropdown([["RED", "RED"],["GREEN", "GREEN"],["BLUE", "BLUE"]]), "COLOR")
        .appendField("at")
        .appendField(new Blockly.FieldDropdown([["PORTC", "PORTC"]]), "PORTo")
    this.setOutput(true, 'Number');
    this.setTooltip('Return RED,GREEN,BLUE number 0-255');
  }
};


Blockly.Blocks['eureqa_siren'] = {
  helpUrl: 'http://www.arduino.cc/playground/',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("euREQA Play Siren")
            this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Play Siren 10s');
  }
};


Blockly.Blocks['eureqa_audio'] = {
  helpUrl: '',
  init: function() {
    this.setColour(88);
    this.appendDummyInput()
        .appendField("Play Audio")
        .appendField(new Blockly.FieldDropdown([["Monkey", "1"], ["Bear", "2"],["Lion", "3"], ["Dog", "4"],["Elephant", "5"],["Kitten", "6"],["Bat", "7"]]), "audioindex")
        .appendField(new Blockly.FieldImage("../media/euREQA.png", 64, 64))
        .appendField(new Blockly.FieldDropdown([["PORTB", "16,7"],["PORTC", "19,18"],["PORTD", "14,8"],["PORTE", "15,3"]]), "port")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('euREQA Audio (Need Audio Module). Need to install Arduino DFPlayer Mini Library');
  }
};



Blockly.Blocks['eureqa_button'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalRead',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField("euREQA Read Button")
.appendField(new Blockly.FieldDropdown([["PORTA", "A6"],["PORTB", "A2"],["PORTC", "A5"],["PORTD", "A0"],["PORTE", "A1"]]), "port")
    this.setOutput(true, 'Number');
    this.setTooltip('Return button reading');
  }
};


Blockly.Blocks['controls_whileforever'] = {
  /**
   * Block for 'do while/until' loop.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
         [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendValueInput('BOOL')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
      };
      return TOOLTIPS[op];
    });
  }
};

								


