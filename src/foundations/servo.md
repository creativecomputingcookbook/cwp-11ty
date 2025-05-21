---
title: 'Servo Motor'
parsons: 'servo-motor'
related: ['Corporate in Red']
thumbnail: '/images/servo.png'
meta:
  desc:
    "A servo motor is like a tiny robot motor that can turn to a specific position. Here's how you can program it in Arduino!"
---
A **servo motor** is like a tiny robot motor that can turn to a specific position. Imagine you're controlling the steering wheel of a toy car. You can tell the car to turn its wheels left, right, or keep them straight. A servo motor works in a similar way, but instead of a wheel, it can move things like robot arms or dials to exactly where you want them to go.

When you're using an **Arduino**, you can program it to tell the servo motor how far to turn. Inside the servo, there's a sensor that tells it when it's reached the right spot, so it knows when to stop moving. This makes it great for projects where you need precise movement, like making a robot move its arm to pick something up!

<arduino-trinket-split>
  <div slot="arduino">

  ### 180° Servo

  A servo motor usually has three wires: power, ground, and signal. The power wire is typically red and connects to the positive pole (+) of the power source. The ground wire is usually black or brown and connects to the negative pole (–). The signal wire, often yellow or orange, is used to receive control signals and should be connected to a PWM pin on the board. In this example, it is connected to pin number 9.

  <collapsible title="Knob Circuit">
    <step img="/images/servo_circuit_knob-pot.png">
    
#### Step 1

  Connect the components as shown in the circuit diagram. For the Knob example, wire the potentiometer so that its two outer pins are connected to power (+5V) and ground, and its middle pin is connected to A0 on the board. Then, connect the servo motor as shown in the circuit below.
    </step>

    <step>
      <div slot="left">

<syntax-highlight language="arduino">
#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 0;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
  val = map(val, 0, 1023, 0, 180);     // scale it to use it with the servo (value between 0 and 180)
  myservo.write(val);                  // sets the servo position according to the scaled value
  delay(15);                           // waits for the servo to get there
}
          </syntax-highlight>
        </div>

  #### Step 2

      Upload this code to your Arduino. It reads the potentiometer value and maps it to an angle from 0° to 180°, rotating the servo accordingly.
      </step>
    </collapsible>

  <collapsible title="Sweep Circuit">
    <step img="/images/servo_circuit_sweep.png">

#### Step 1

Connect the components as shown in the circuit diagram. For the Knob example, wire the potentiometer so that its two outer pins are connected to power (+5V) and ground, and its middle pin is connected to A0 on the board. Then, connect the servo motor as shown in the circuit below.

    </step>

    <step>
      <div slot="left">

<syntax-highlight language="arduino">
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
</syntax-highlight>
        </div>

#### Step 2

Upload this code to your Arduino. It reads the potentiometer value and maps it to an angle from 0° to 180°, rotating the servo accordingly.
      </step>
    </collapsible>

### Try it yourself!  

<!-- The following script block includes the initialization code for the Parsons widget -->
<script>
  // Define the initial Parsons problem code.
    var initial = 
      `#include &ltServo.h&gt
      Servo myservo;
      int pos = 0;
      void setup() {
        myservo.attach(9);
      }
      void loop() {
        for (pos = 0; pos <= 180; pos += 1) {
          myservo.write(pos);
          delay(5);
        }
        delay(500);
        for (pos = 180; pos >= 0; pos -= 1) {
          myservo.write(pos);
          delay(5);
        }
        delay(1500);
      }`
</script>
<parsons></parsons>

  </div>
</arduino-trinket-split>
