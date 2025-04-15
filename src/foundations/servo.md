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

<collapsible title="360° Servo">
A **360-degree servo motor** is a type of motor that can rotate continuously in either direction, just like a regular motor. Unlike a standard servo, which moves to a specific angle and stops, this one spins around like a wheel, and with an Arduino, you can control how fast it turns and in which direction, making it useful for things like moving wheels on a robot or conveyor belts.

```arduino/
#include "arduino/Arduino.h"

int main(){
  init(); //Don't forget this!
  pinMode(13,OUTPUT);
  while(1) {
    digitalWrite(13,HIGH);
    delay(50);
    digitalWrite(13,LOW);
    delay(1700);
  }
}
```

<step>
<div slot="left">test</div>
#### Step 1

Acquire this servo **test**
</step>
<step>
<div slot="left">

```arduino/5-10
#include "arduino/Arduino.h"

int main(){
  init(); //Don't forget this!
  pinMode(13,OUTPUT);
  while(1) {
    digitalWrite(13,HIGH);
    delay(50);
    digitalWrite(13,LOW);
    delay(1700);
  }
}
```

</div>
#### Step 2

put *this code*
</step>
<step img="/images/servo.png">
#### Step 3

assemble this
</step>
</collapsible>

### 180° Servo

TODO...

```arduino
#include "arduino/Arduino.h"

int main(){
  init(); //Don't forget this!
  pinMode(13,OUTPUT);
  while(1) {
    digitalWrite(13,HIGH);
    delay(50);
    digitalWrite(13,LOW);
    delay(1700);
  }
}
```
<!-- The following script block includes the initialization code for the Parsons widget -->
<script>
  // Define the initial Parsons problem code.
    var initial = 
      "#include &ltServo.h&gt\n" +
      "Servo myservo;\n" +
      "int pos = 0;\n" +
      "void setup() {\\n" +
      "  myservo.attach(9);\\n" +
      "}\n" +
      "void loop() {\\n" +
      "  for (pos = 0; pos <= 180; pos += 1) {\\n" +
      "    myservo.write(pos);\\n" +
      "    delay(5);\\n" +
      "  }\n" +
      "  delay(500);\n" +
      "  for (pos = 180; pos >= 0; pos -= 1) {\\n" +
      "    myservo.write(pos);\\n" +
      "    delay(5);\\n" +
      "  }\n" +
      "  delay(1500);\\n" +
      "}\n";

    // var initial =
    //     "int main(){\n" +
    //     "  printf(Hello World!);\n" +
    //     "  return 0;\n" +
    //     "}\n";
</script>
<parsons></parsons>

