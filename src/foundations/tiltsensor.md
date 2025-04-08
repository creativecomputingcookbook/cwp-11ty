---
title: 'Tilt Sensor'
parsons: 'tilt-sensor'
related: ['Corporate in Red']
thumbnail: '/images/tiltsensor.png'
meta:
  desc:
    "A tilt sensor, or tilt switch, detects the tilt, orientation, or inclination of movement. It is also sensitive to the direction of the movement."
---

A **tilt sensor** is a gadget that can figure out the angle or inclination of the object it's attached to, helping to understand whether something is level or if it’s tilted to one side. 


<collapsible title="Arduino set up">

<step>
<div slot="left">test</div>


<step>
<img src="/images/digitalpintilt.png">
<img src="/images/digitalpintilt2.png">
#### Step 1

You need to connect it to a digital pin which are the ones labeled with an D in front of it. Pick one of the five slots to plug it in: [D3/4], [D5/6], [D7/8], [D9/10] or [D11/12]. We've chosen [D11/12]. 
</step>

<step>
<div>

```/////////////////////// 
// TILT SENSOR TEST  //
///////////////////////

// Description: 
/*
    Reads the tilt sensor state value from the digital pin and toggles the built-in LED light.
*/

// constants won't change. They're used here to set pin numbers:
const int TILT_PIN = 4;     // the number of the tilt sensor pin

// variables will change:
int tiltState = 0;         // variable for reading the tilt sensor status

void setup() {
    Serial.begin(9600); 
    // initialize the LED pin as an output:
    pinMode(LED_BUILTIN, OUTPUT);
    // initialize the tilt sensor pin as an input:
    pinMode(TILT_PIN, INPUT);
}

void loop() {
    // read the state of the tilt sensor value:
    tiltState = digitalRead(TILT_PIN);

    // check if the tilt sensor is pressed. If it is, the tiltState is HIGH:
    if (tiltState == HIGH) {
        Serial.println("Tilt HIGH"); 
        // turn LED on:
        digitalWrite(LED_BUILTIN, HIGH);
    } else {
        Serial.println("Tilt LOW"); 
        // turn LED off:
        digitalWrite(LED_BUILTIN, LOW);
    }
    
    delay(10);   // wait for 10 milliseconds for the Arduino to catch up
}
```

</div>
#### Step 2

Initialization: The code sets up a variable called "TILT_PIN" which stores the value of the pin that you have your tilt sensor plugged into. In the code, we have it set to D4, which will work if you have it plugged into [D3/4]. 
You'll have to change the highlighted line changing 4 based on the Digital pin you plugged your tilt sensor into. If you plugged into: 
[D3/4] it should be D4 
[D5/6] it should be D6
[D7/8] it should be D8
[D9/10] it should be D10
[D11/12] it should be D12.
Setup: The "Serial.begin(9600);" sets up the Serial Monitor, which will allow you to monitor what gets printed out while your Arduino is running. We will print the tilt sensor state to the serial monitor. The pinMode(TILT_PIN, INPUT); tells the microcontroller that the button is an input. 
Loop: We read the button value using the digitalRead(TILT_PIN); and store it in a variable. We then print if the button is "HIGH" or "LOW" to the Serial Monitor using the Serial.println(""). 
 
 </step>
<step>
#### Step 3

<img src="/images/uploadbutton.png">
Press the upload button with the arrow after making sure you've selected the correct board (Arduino BLE 33) and port that the Arduino is plugged into.  

<img src="/images/serialmonitor.png">
Then open the Serial Monitor from the Tools --> Serial Monitor (or pressing Ctrl+Shift+M) and see how the values change as you turn your potentiometer.
</step>
</collapsible>


<collapsible title="Trinket Assembly">

The code for using a tilt sensor is same as the [button](/_site/foundations/button/index.html). Just like the button, the tilt sensor is an input. It is read by the trinket as HIGH (tilted) or LOW (not tilted).

If you use the 2 Button Example code and switch out the buttons with the tilt sensors, it will run the same. 

However, we change the variable from buttonRead1, buttonRead2 to tilt1, tilt2 for organization and clarity.

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://maker.makecode.com/#pub:_9abdHwYLUWdM" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>

</collapsible>
