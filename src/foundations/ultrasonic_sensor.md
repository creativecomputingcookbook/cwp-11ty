---
title: 'Ultrasonic Sensors'
parsons: 'button'
related: ['Corporate in Red']
thumbnail: '/images/ultrasonic.png'
meta:
  desc:
    "A button is one of the simplest input devices you can use with Arduino. Here's how you can detect when it's pressed!"
---

A **ultrasonic sensor** is an instrument that measures the distance to an object using ultrasonic sound waves. What is an ultrasonic sensor? It is a device that uses a transducer to send and receive ultrasonic pulses that relay back information about an object’s proximity. High-frequency sound waves reflect across boundaries to produce distinct echo patterns.

<collapsible title="Ultrasonic Sensor Basics">
<step>
<div slot="left">
<img src="/images/ultrasonic_circuit.png" alt="Ultrasonic sensor circuit diagram" />
</div>
#### Step 1: Hook-Up your Controller

We used an Arduino in this example, but you can use another controller and program of your choice.
</step>

<step>
<div slot="left">
<!-- intentionally left blank -->
</div>
#### Step 2: Install relevant coding software to your PC

Install Arduino Sketch coding software on your PC. This is where you type the code you want to compile and send it to the Arduino board.
</step>

<step>
<div slot="left">
<!-- intentionally left blank -->
</div>
#### Step 3: Set-up your sensor with Arduino

Plug your Arduino into the USB cable and into your computer. Once you upload Arduino, you can then compile and activate the code.
</step>

<step img="/images/ultrasonic_circuit.png">
<div slot="left">

```arduino
const int anPin = 0;

long anVolt, cm;

void setup() {
  Serial.begin(9600);
}

void read_sensor(){
  anVolt = analogRead(anPin);
  cm = anVolt / 2;
}

void print_range(){
  Serial.print("Range = ");
  Serial.print(cm);
  Serial.print(" cm ");
  Serial.print('\n');
}

void loop() {
  read_sensor();
  print_range();
  delay(100);
}
```

</div>
#### Step 4: Compile and run your code

The code above will allow you to read distances in centimeters. Compile and run this code to obtain real-time distance measurements to the closest object.
</step>
</collapsible>