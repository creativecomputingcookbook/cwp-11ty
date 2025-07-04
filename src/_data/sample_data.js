module.exports = [
  {
    title: 'LED Strip',
    thumbnail: '/images/lightstrip.jpg',
    shortDesc:
      'STEM From Dance instructors choreography for "Be Your Girl" by Kaytranada',
    interaction: ['Linear Movement', 'Pop-Up', 'Continuous Rotation'],
    techniques: ['Storytelling', 'Metaphors'],
    fields: [
      {
        type: 'text',
        heading: `Introduction`,
        text: `STEM From Dance instructors choreographed a routine to the song "Be Your Girl," using LED shoes as part of the performance. One instructor chose to incorporate the shoes' tilt sensor, since the dance style involves frequent foot movements. This allowed for dynamic lighting effects—each time the dancer lifted or lowered her foot, the LEDs would shift between two distinct states: a solid white light and a rainbow animation.`,
      },
      {
        type: 'circuit',
        src: '/images/servo_circuit_sweep.png',
        heading: 'Circuit Assembly',
        text: 'Connect the LED strip and button to the microcontroller according to the image to make the LED light up when you press the button.',
      },
      {
        type: 'code',
        url: 'https://app.arduino.cc/sketches/examples?nav=Examples&eid=01.Basics%2FBlink&view-mode=embed', // Has to use embed from arduino editor
        heading: 'Code',
      },
      {
        type: 'parsons',
        code: `
        #include <Servo.h>
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
        }`,
      },
      {
        type: 'othercombinations',
        heading: 'Other Combinations',
        other: [
          'LED Strip',
          'Potentiometer and LED',
          'Ultrasonic Sensor and LED',
          'Button and LED',
        ],
      },
    ],
    tags: ['Foundations', 'House'],
    prefix: 'foundations',
    related: ['Be Your Girl'],
    permalink: '/foundations/led-strip/',
  },
  {
    title: 'Potentiometer and LED',
    thumbnail: '/images/button.png',
    shortDesc:
      'STEM From Dance instructors choreography for "Be Your Girl" by Kaytranada',
    interaction: ['Linear Movement', 'Pop-Up', 'Continuous Rotation'],
    techniques: ['Storytelling', 'Metaphors'],
    fields: [
      {
        type: 'heroimage',
        src: '/images/button.png',
      },
      {
        type: 'text',
        heading: `Introduction`,
        text: `STEM From Dance instructors choreographed a routine to the song "Be Your Girl," using LED shoes as part of the performance. One instructor chose to incorporate the shoes' tilt sensor, since the dance style involves frequent foot movements. This allowed for dynamic lighting effects—each time the dancer lifted or lowered her foot, the LEDs would shift between two distinct states: a solid white light and a rainbow animation.`,
      },
      {
        type: 'circuit',
        src: '/images/servo_circuit_sweep.png',
        heading: 'Circuit Assembly',
        text: 'Connect the LED strip and button to the microcontroller according to the image to make the LED light up when you press the button.',
      },
      {
        type: 'code',
        url: 'https://app.arduino.cc/sketches/examples?nav=Examples&eid=01.Basics%2FBlink&view-mode=embed', // Has to use embed from arduino editor
        heading: 'Code',
      },
      {
        type: 'parsons',
        code: `
                #include <Servo.h>
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
                }`,
      },
      {
        type: 'othercombinations',
        heading: 'Other Combinations',
        other: [
          'LED Strip',
          'Potentiometer and LED',
          'Ultrasonic Sensor and LED',
          'Button and LED',
        ],
      },
    ],
    tags: ['Foundations', 'House'],
    prefix: 'foundations',
    related: ['Be Your Girl'],
    permalink: '/foundations/utlra-led/',
  },
];
