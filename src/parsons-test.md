---
layout: 'layouts/info.webc'
title: 'Parsons test'
meta:
  desc:
    'Parsons stuff'
eleventyExcludeFromCollections: true
---

<parsons>
// Include the Servo library for controlling servo motors
#include <Servo.h>

// Define pin connections
#define POT_PIN A0 #continue
#define SERVO_PIN 9   // Digital pin 9 for servo control

// Create servo object to control the angular servo motor
Servo myServo;

// Variables to store sensor data and servo position
int potValue; #continue        // Raw analog reading from potentiometer (0-1023)
int servoAngle; #continue      // Calculated servo angle (0-180 degrees)
int lastServoAngle;  // Previous servo angle to avoid unnecessary movements

void setup() {
  // Initialize serial communication for debugging and monitoring
  Serial.begin(9600);
  
  // Configure potentiometer pin as input (though analog pins are input by default)
  pinMode(POT_PIN, INPUT);
  
  // Attach servo to the specified pin
  myServo.attach(SERVO_PIN);
  
  // Initialize servo to center position (90 degrees)
  myServo.write(90);
  servoAngle = 90;
  lastServoAngle = 90;
  
  // Print initial setup message and table header
  Serial.println("Potentiometer and Servo System Initialized");
  Serial.println("Pot Value | Servo Angle (degrees)");
  Serial.println("------------------------");
}

void loop() {
  // Read analog value from potentiometer (0-1023 range)
  potValue = analogRead(POT_PIN);
  
  // Map potentiometer value to servo angle
  // Pot value 0-1023 maps to servo angle 0-180 degrees
  // This creates a linear relationship between pot position and servo angle
  servoAngle = map(potValue, 0, 1023, 0, 180);
  
  // Constrain servo angle to valid range (0-180 degrees) for safety
  servoAngle = constrain(servoAngle, 0, 180);
  
  // Only move servo if angle has changed (prevents jitter and unnecessary movement)
  if (servoAngle != lastServoAngle) {
    // Move servo to calculated position
    myServo.write(servoAngle);
    
    // Update last angle for next comparison
    lastServoAngle = servoAngle;
    
    // Print current values for monitoring and debugging
    Serial.print("Pot: ");
    Serial.print(potValue);
    Serial.print(" | Servo: ");
    Serial.print(servoAngle);
    Serial.println(" degrees");
  }
  
  // Small delay to prevent excessive readings and reduce serial output
  // This also gives the servo time to reach its position
  delay(50);
}
</parsons>