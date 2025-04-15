---
title: 'LED Strip'
parsons: 'button'
related: ['Corporate in Red']
thumbnail: '/images/lightstrip.jpg'
meta:
  desc:
    "An LED strip is a magical ribbon of tiny lights that can change to any color and be programmed by a microcontroller to create fun patterns, light shows, and color effects through special instructions."
---
An **LED strip** is like a magical ribbon that has many tiny lights, each one capable of changing to any color you can imagine! When you connect it to a microcontroller, you can program each little light exactly what color to be and when to change, so you can create all kinds of fun light shows, patterns, and colors just by sending special instructions from the microcontroller.


<collapsible title="LED Setup">

<step img="/images/digitalpins.png">

#### Step 1 - Connect the Sensor

You need to connect the board to a digital pin which are the ones labeled with an D in front of it. Pick one of the five slots to plug it in: [D3/4], [D5/6], [D7/8], [D9/10] or [D11/12]. We've chosen [D11/12]. 


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
    for(int i=0; i<strip.numPixels(); i++) { // For each pixel in strip...
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
        for(int c=b; c<strip.numPixels(); c += 3) {
            strip.setPixelColor(c, color); // Set pixel 'c' to value 'color'
        }
        strip.show(); // Update strip with new contents
        delay(wait);  // Pause for a moment
        }
    }
}

// Rainbow cycle along whole strip. Pass delay time (in ms) between frames.
void rainbow(int wait) {
    // Hue of first pixel runs 5 complete loops through the color wheel.
    // Color wheel has a range of 65536 but it's OK if we roll over, so
    // just count from 0 to 5*65536. Adding 256 to firstPixelHue each time
    // means we'll make 5*65536/256 = 1280 passes through this loop:
    for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {
        // strip.rainbow() can take a single argument (first pixel hue) or
        // optionally a few extras: number of rainbow repetitions (default 1),
        // saturation and value (brightness) (both 0-255, similar to the
        // ColorHSV() function, default 255), and a true/false flag for whether
        // to apply gamma correction to provide 'truer' colors (default true).
        strip.rainbow(firstPixelHue);
        // Above line is equivalent to:
        // strip.rainbow(firstPixelHue, 1, 255, 255, true);
        strip.show(); // Update strip with new contents
        delay(wait);  // Pause for a moment
    }
}

// Rainbow-enhanced theater marquee. Pass delay time (in ms) between frames.
void theaterChaseRainbow(int wait) {
    int firstPixelHue = 0;     // First pixel starts at red (hue 0)
    for(int a=0; a<30; a++) {  // Repeat 30 times...
        for(int b=0; b<3; b++) { //  'b' counts from 0 to 2...
        strip.clear();         //   Set all pixels in RAM to 0 (off)
        // 'c' counts up from 'b' to end of strip in increments of 3...
        for(int c=b; c<strip.numPixels(); c += 3) {
            // hue of pixel 'c' is offset by an amount to make one full
            // revolution of the color wheel (range 65536) along the length
            // of the strip (strip.numPixels() steps):
            int      hue   = firstPixelHue + c * 65536L / strip.numPixels();
            uint32_t color = strip.gamma32(strip.ColorHSV(hue)); // hue -> RGB
            strip.setPixelColor(c, color); // Set pixel 'c' to value 'color'
        }
        strip.show();                // Update strip with new contents
        delay(wait);                 // Pause for a moment
        firstPixelHue += 65536 / 90; // One cycle of color wheel over 90 frames
        }
    }
}
</syntax-highlight>
</div>

#### Step 2 - Remix the Code

**Initialization**: The code sets up a constant called `LED_PIN` which stores the value of the pin that you have your LED strip plugged into. In the code, we have it set to D12, which will work if you have it plugged into [D11/12]. It also sets `LED_COUNT` which is the number of white square lights on the LED strip. You also set up the "brightness" of the LED strip with any number from 1 to 255. We also need to declare a special object, which is the LED strip in the code with `Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);`

You'll have to change the highlighted line changing 12 based on the Digital pin you plugged your LED strip into. If you plugged into: 

* [D3/4] it should be D4 
* [D5/6] it should be D6
* [D7/8] it should be D8
* [D9/10] it should be D10
* [D11/12] it should be D12.

**Setup**: You begin using the LED strip with `strip.begin();` and` strip.show();`. You set the brightness of the LED strip with `strip.SetBrightness(brightness);`.

You can create some fun patterns on the LED strip using either one of the following functions: 

* `loop`: for a rainbow pattern
* `blinkAll`: makes the LEDs blink
* `colorWipe`: gradually changes the color of each LED
* `theatreChase`: creates a chase effect on the strip
* `rainbow`: creates a rainbow cycle along the strip
* `theatreChaseRaindbow`: creates a rainbow chase effect

</step>
<step>
<div slot="left">
<img src="/images/uploadbutton.png">
<img src="/images/serialmonitor.png">
</div>

#### Step 3 - Upload & Code 


Press the upload button with the arrow after making sure you've selected the correct board (Arduino BLE 33) and port that the Arduino is plugged into.  

Then open the Serial Monitor from the Tools --> Serial Monitor (or pressing Ctrl+Shift+M) and see how the values change as you turn your potentiometer.

</step>
</collapsible>
