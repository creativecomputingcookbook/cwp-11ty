---
title: 'Tilt Sensor'
parsons: 'tilt-sensor'
related: ['Corporate in Red']
thumbnail: '/images/servo.png'
meta:
  desc:
    "A tilt sensor is an electronic component that detects changes in orientation or angle, helping a system know when it's tilted or moved from its normal position."
---

A **tilt sensor** is a gadget that can figure out the angle or inclination of the object it's attached to, helping to understand whether something is level or if it’s tilted to one side. 


<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://maker.makecode.com/#pub:_7jxJv38JF1t6" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>
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