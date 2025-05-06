---
title: 'Button'
parsons: 'button'
related: ['Corporate in Red']
thumbnail: '/images/button.png'
meta:
  desc:
    "A button is one of the simplest input devices you can use with Arduino. Here's how you can detect when it's pressed!"
---
A **button** is one of the simplest input devices you can use with a microcontroller. Imagine the power button on your computer or the play button on a music player—when you press it, something happens. With an Arduino, you can program it to detect when a button is pressed and then respond however you want!

When you connect a button to your Arduino, it completes a circuit when pressed, sending a signal that your Arduino can detect. This makes buttons perfect for user input, like starting a **motor**, turning on a light, or navigating a menu on a screen.

<arduino-trinket-split>
  <div slot="arduino">
    <collapsible title="Arduino Assembly">
      A button usually has two states: **pressed** or **not pressed**. When pressed, it connects the circuit and allows current to flow. Using **digitalRead()** in Arduino, you can check if a button is being pressed and then trigger an action, such as blinking an LED.

      ```arduino
      #include "arduino/Arduino.h"

      const int buttonPin = 2;
      const int ledPin = 13;

      void setup() {
        pinMode(buttonPin, INPUT);
        pinMode(ledPin, OUTPUT);
      }

      void loop() {
        int buttonState = digitalRead(buttonPin);

        if (buttonState == HIGH) {
          digitalWrite(ledPin, HIGH);
        } else {
          digitalWrite(ledPin, LOW);
        }
      }
      ```

  <step img="/images/button-circuit.png">
  
  #### Step 1

        Connect the **red wire** from the Arduino 5V pin to the **red power rail** on the breadboard, and the **black wire** from GND to the **black rail**. These rails will provide power and ground for your components.
  </step>

  <step img="/images/button-circuit.png">
  
  #### Step 2

        Take a **third wire** and connect **pin 2** on the Arduino to **one leg** of the button.  
        From that same leg, add a **10K ohm resistor** going to **GND**.  
        Then connect the **other leg** of the button to the **5V** rail.  
        This setup uses a *pull-down resistor* to keep your signal clean.
  </step>

  <step>
        <div slot="left">

          ```arduino
          const int buttonPin = 2;
          const int ledPin = 13;

          void setup() {
            pinMode(buttonPin, INPUT);
            pinMode(ledPin, OUTPUT);
          }

          void loop() {
            int buttonState = digitalRead(buttonPin);

            if (buttonState == HIGH) {
              digitalWrite(ledPin, HIGH);
            } else {
              digitalWrite(ledPin, LOW);
            }
          }
          ```
  </div>

  #### Step 3

        When the button is not pressed, the two legs aren’t connected, so the wire going to pin 2 is pulled down to ground through the resistor. This means the Arduino will read a LOW signal.

        When the button is pressed, the legs connect, and power (5V) flows to pin 2. Now, the Arduino will read a HIGH signal.
  </step>
    </collapsible>
  </div>
  <collapsible title="Trinket Assembly">
    <div slot="trinket">
      The battery, LED pixel/strip, and wires form a circuit.

      In the hardware provided, you do not need to worry about attaching wires to power and ground - this is already done through the wiring.

      <img src="/images/buttontrinket.jpg">

      We can set a condition so that when we press the button, an action results (LED changes color, flashes differently, etc.)

      To do this, we will need to create a variable for the button and use an if/then statement.

      [Watch video here](https://www.loom.com/share/91ea5b53f24645d8a4d485fd4259e5e0?t=130)
 </div>
</collapsible>
</arduino-trinket-split>
