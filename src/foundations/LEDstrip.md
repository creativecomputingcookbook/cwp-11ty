---
title: 'LED Strip'
parsons: 'button'
related: ['Corporate in Red']
thumbnail: '/images/lightstrip.jpg'
meta:
  desc:
    "An LED strip is a magical ribbon of tiny lights that can change to any color and be programmed by a microcontroller to create fun patterns, light shows, and color effects through special instructions."
---
An **LED strip** is a flexible circuit containing multiple small lights (LEDs), each capable of displaying a wide range of colors. When connected to a microcontroller, each individual light can be programmed to change color and timing with precision. This allows for the creation of dynamic lighting effects, patterns, and color sequences through carefully written instructions sent from the microcontroller.

<arduino-trinket-split>
  <div slot="arduino">
    <collapsible title="LED Setup">
<step img="/images/digitalpins.png">
        
#### Step 1 - Connect the Sensor

        You need to connect the board to a digital pin which are the ones labeled with a D in front of it. Pick one of the five slots to plug it in: [D3/4], [D5/6], [D7/8], [D9/10] or [D11/12]. We've chosen [D11/12]. 
</step>
<step>
<div slot="left">

<syntax-highlight language="arduino">
////////////////////
// LED STRIP TEST //
////////////////////

// Description: 
/*
    Takes a reading with the ultrasonic sensor and displays it in inches and centimeters to the serial monitor.
*/

#include <Adafruit_NeoPixel.h>

// constants won't change. They're used here to set pin numbers:
const int LED_COUNT = 18;
const int LED_PIN = 12;

// variables will change:
int brightness = 50; // set LED brightness to about 1/5 (max = 255)

// the LED strip requires a special object that we declare here:
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);  // creates an object that will represent our LED strip

void setup() {
    strip.begin();                    // begin using the LED strip object (REQUIRED)
    strip.show();                     // turn OFF all pixels ASAP (this only works when first being run)
    strip.setBrightness(brightness);
    
    strip.fill(strip.Color(0, 0, 0)); // show no color (i.e., another way to turn LEDs off)
    strip.show();
    delay(1000); 
}

void loop() {
    rainbow(50);
}

// ----------------- Some functions creating animated effects -----------------

/*
Fill all LEDs with a single color for a number of milliseconds
*/
void blinkAll(uint32_t color, int wait){
    strip.fill(color);
    strip.show(); 
    delay(wait); 
    
    strip.fill(strip.Color(0, 0, 0));
    strip.show(); 
    delay(wait); 
}

/*
Fill strip pixels one after another with a color. Strip is NOT cleared
first; anything there will be covered pixel by pixel. Pass in color
(as a single 'packed' 32-bit value, which you can get by calling
strip.Color(red, green, blue) as shown in the loop() function above),
and a delay time (in milliseconds) between pixels.
*/
void colorWipe(uint32_t color, int wait) {
    for(int i=0; i < strip.numPixels(); i++) { // For each pixel in strip...
        strip.setPixelColor(i, color);         //  Set pixel's color (in RAM)
        strip.show();                          //  Update strip to match
        delay(wait);                           //  Pause for a moment
    }
}

// Theater-marquee-style chasing lights. Pass in a color (32-bit value,
// a la strip.Color(r,g,b) as mentioned above), and a delay time (in ms)
// between frames.
void theaterChase(uint32_t color, int wait) {
  for(int a=0; a<10; a++) {  // Repeat 10 times...
      for(int b=0; b<3; b++) { //  'b' counts from 0 to 2...
      strip.clear();         //   Set all pixels in RAM to 0 (off)
      // 'c' counts up from 'b' to end of strip in steps of 3...
      for(int c=b; c < strip.numPixels(); c += 3) {
          strip.setPixelColor(c, color); // Set pixel 'c' to value 'color'
      }

      strip.show();
      delay(wait);
    }
  }
}

void rainbow(int wait) {
  for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {
    strip.rainbow(firstPixelHue);
    strip.show();
    delay(wait);
  }
}

void theaterChaseRainbow(int wait) {
  int firstPixelHue = 0;
  for(int a=0; a<30; a++) {
    for(int b=0; b<3; b++) {
      strip.clear();
      for(int c=b; c < strip.numPixels(); c += 3) {
        int hue = firstPixelHue + c * 65536L / strip.numPixels();
        uint32_t color = strip.gamma32(strip.ColorHSV(hue));
        strip.setPixelColor(c, color);
      }
      strip.show();
      delay(wait);
      firstPixelHue += 65536 / 90;
    }
  }
}
</syntax-highlight>

</div>

#### Step 2 - Remix the Code

**Initialization:**  
        The code sets up a constant called `LED_PIN` which stores the value of the pin that you have your LED strip plugged into. In the code, we have it set to D12, which will work if you have it plugged into [D11/12].  
        It also sets `LED_COUNT`, which is the number of white square lights on the LED strip.  
        You also set up the brightness of the LED strip with any number from 1 to 255.  
        We declare a special object for the LED strip in the code:

        <syntax-highlight language="cpp">
        Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);
        </syntax-highlight>

        You'll have to change the highlighted line to match your digital pin:  
        
        - [D3/4] → D4  
        - [D5/6] → D6  
        - [D7/8] → D8  
        - [D9/10] → D10  
        - [D11/12] → D12  

        **Setup:**  
        You begin using the LED strip with `strip.begin();` and `strip.show();`.  
        Set brightness with `strip.setBrightness(brightness);`.

        You can create fun patterns using these functions:  

        - `loop`: rainbow pattern  
        - `blinkAll`: makes the LEDs blink  
        - `colorWipe`: gradually changes the color  
        - `theaterChase`: chase effect  
        - `rainbow`: rainbow cycle  
        - `theaterChaseRainbow`: rainbow chase effect
</step>
<step img="/images/serialmonitor.png">

#### Step 3 - Upload & Code 

      <img src="/images/uploadbutton.png" />  
        Press the upload button with the arrow after making sure you've selected the correct board (Arduino BLE 33) and port that the Arduino is plugged into.  

        Then open the Serial Monitor from the Tools → Serial Monitor (or press Ctrl+Shift+M) and see how the values change as you turn your potentiometer.
    </step>

  </collapsible>
</div>
  <div slot="trinket">
    <collapsible title="Trinket Assembly">
      The battery, LED pixel/strip, and wires form a circuit.

      In the hardware provided, you do not need to worry about attaching wires to power and ground — this is already done through the wiring.

      <img src="/images/buttontrinket.jpg">

      [Here](https://www.loom.com/share/38a5eeecdf3c439ca3b279666db32b98) is example code to set your LED strip to festive colors.
    </collapsible>
  </div>
</arduino-trinket-split>
