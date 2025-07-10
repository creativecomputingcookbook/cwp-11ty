---
layout: 'layouts/info.webc'
title: 'Parsons test'
meta:
  desc:
    'Parsons stuff'
eleventyExcludeFromCollections: true
---

## Potentiometer + Angular servo

<parsons>
// Include the Servo library for controlling servo motors
#include <Servo.h>

// Define pin connections
#define POT_PIN A0 #continue    // Analog pin A0 for potentiometer input
#define SERVO_PIN 9   // Digital pin 9 for servo control

// Create servo object to control the angular servo motor
Servo myServo;

int lastServoAngle;  // Previous servo angle to avoid unnecessary movements

void setup() { #continue
  Serial.begin(9600);
  pinMode(POT_PIN, INPUT);
  myServo.attach(SERVO_PIN);
  myServo.write(90); #continue
  lastServoAngle = 90;
} #continue
#continue
void loop() {
  // Read analog value from potentiometer (0-1023 range)
  int potValue = analogRead(POT_PIN);
  
  // Map potentiometer value to servo angle
  // Pot value 0-1023 maps to servo angle 0-180 degrees
  // This creates a linear relationship between pot position and servo angle
  int servoAngle = map(potValue, 0, 1023, 0, 180);
  
  // Constrain servo angle to valid range (0-180 degrees) for safety
  servoAngle = constrain(servoAngle, 0, 180);
  
  // Only move servo if angle has changed (prevents jitter and unnecessary movement)
  if (servoAngle != lastServoAngle) {
    myServo.write(servoAngle);
    lastServoAngle = servoAngle;
  }
  delay(50);
}
</parsons>

## Ultrasonic + Angular Servo

<parsons>
#include <Servo.h>

// Define pin connections
#define TRIG_PIN 9 #continue    // Ultrasonic sensor trigger pin
#define ECHO_PIN 10 #continue   // Ultrasonic sensor echo pin
#define SERVO_PIN 11 #continue  // Servo motor control pin

// Create servo object
Servo myServo;

// Variables to store sensor data and servo position
int lastServoAngle;  // Previous servo angle to avoid unnecessary movements
int minDistance = 5; #continue // Minimum distance threshold (cm)
int maxDistance = 100; // Maximum distance threshold (cm)

void setup() {
  Serial.begin(9600);
  
  // Configure ultrasonic sensor pins
  pinMode(TRIG_PIN, OUTPUT); #continue  // Trigger pin as output
  pinMode(ECHO_PIN, INPUT);   // Echo pin as input
  
  // Attach servo to specified pin
  myServo.attach(SERVO_PIN);
  
  // Initialize servo to center position (90 degrees)
  myServo.write(90);
  lastServoAngle = 90;
} #continue
#continue
void loop() {
  // Clear trigger pin
  digitalWrite(TRIG_PIN, LOW); #continue
  delayMicroseconds(2);
  
  // Send 10 microsecond pulse to trigger pin
  digitalWrite(TRIG_PIN, HIGH); #continue
  delayMicroseconds(10); #continue
  digitalWrite(TRIG_PIN, LOW);
  
  // Measure the time for echo to return
  long duration = pulseIn(ECHO_PIN, HIGH);
  
  // Calculate distance in centimeters
  // Speed of sound = 340 m/s = 0.034 cm/microsecond
  // Distance = (duration * speed of sound) / 2 (round trip)
  int distance = duration * 0.034 / 2;
  
  // Map distance to servo angle (inverse relationship)
  // Closer objects = larger servo angle, farther objects = smaller servo angle
  int servoAngle = map(distance, minDistance, maxDistance, 180, 0); #continue
  servoAngle = constrain(servoAngle, 0, 180);

  if (servoAngle != lastServoAngle) { #continue
    myServo.write(servoAngle); #continue
    lastServoAngle = servoAngle; #continue
  }

  // Small delay to prevent excessive readings and servo movement
  delay(100);
}
</parsons>

## Tilt + LED

Two tilt sensors and a 8-light LED strip. Each tilt sensor would trigger either odd or even groups of LEDs when `HIGH`, with different colours.

<parsons>
#include <Adafruit_NeoPixel.h>

// Pin assignments
const int tiltSensor1Pin = 2; #continue // Tilt sensor 1 input pin
const int tiltSensor2Pin = 3; #continue // Tilt sensor 2 input pin
const int ledStripPin = 6; #continue    // NeoPixel data pin
const int NUM_LEDS = 8;

// Create NeoPixel strip object
Adafruit_NeoPixel strip(NUM_LEDS, ledStripPin, NEO_GRB + NEO_KHZ800);

// Indices for odd and even LEDs (hardcoded, no modulo)
const int oddLedIndices[4] = {0, 2, 4, 6}; #continue   // LEDs 1,3,5,7
const int evenLedIndices[4] = {1, 3, 5, 7};  // LEDs 2,4,6,8

// Color definitions
uint32_t oddColor = strip.Color(255, 0, 0); #continue  // Red for odd LEDs
uint32_t evenColor = strip.Color(0, 0, 255); #continue // Blue for even LEDs
uint32_t offColor = strip.Color(0, 0, 0);     // Off

void setup() {
  // Set tilt sensor pins as input
  pinMode(tiltSensor1Pin, INPUT); #continue
  pinMode(tiltSensor2Pin, INPUT);

  // Initialize NeoPixel strip
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
} #continue
#continue
void loop() {
  // Read tilt sensor states
  int tilt1State = digitalRead(tiltSensor1Pin); #continue
  int tilt2State = digitalRead(tiltSensor2Pin);

  // First, turn all LEDs off
  for (int i = 0; i < NUM_LEDS; i++) { #continue
    strip.setPixelColor(i, offColor); #continue
  }

  // If tilt sensor 1 is HIGH, light up odd LEDs
  uint32_t colorToSetOdd = offColor;
  if (tilt1State == HIGH) { #continue
    colorToSetOdd = oddColor #continue
  }
  for (int i = 0; i < 4; i++) { #continue
    strip.setPixelColor(oddLedIndices[i], colorToSetOdd); #continue
  }

  // If tilt sensor 2 is HIGH, light up even LEDs
  uint32_t colorToSetEven = offColor;
  if (tilt2State == HIGH) { #continue
    colorToSetEven = evenColor #continue
  }
  for (int i = 0; i < 4; i++) { #continue
    strip.setPixelColor(evenLedIndices[i], colorToSetEven); #continue
  }

  // Update the strip to show changes
  strip.show();

  // Small delay to debounce and avoid flicker
  delay(10);
}
</parsons>