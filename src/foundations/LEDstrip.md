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
<step img="images/digitalpins.jpg">
        
#### Step 1 - Connect the Sensor

        You need to connect the board to a digital pin which are the ones labeled with a D in front of it. Pick one of the five slots to plug it in: [D3/4], [D5/6], [D7/8], [D9/10] or [D11/12]. We've chosen [D11/12]. 
</step>
<step>

#### Step 2 - Remix the Code

**Initialization:**  
        The code sets up a constant called `LED_PIN` which stores the value of the pin that you have your LED strip plugged into. In the code, we have it set to D12, which will work if you have it plugged into [D11/12].  
        It also sets `LED_COUNT`, which is the number of white square lights on the LED strip.  
        You also set up the brightness of the LED strip with any number from 1 to 255.  
        We declare a special object for the LED strip in the code:

        ```cpp
        Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);
        ```

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

        ```cpp
        ////////////////////
        // LED STRIP TEST //
        ////////////////////

        #include <Adafruit_NeoPixel.h>

        const int LED_COUNT = 18;
        const int LED_PIN = 12;
        int brightness = 50;

        Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

        void setup() {
          strip.begin();
          strip.show();
          strip.setBrightness(brightness);
          strip.fill(strip.Color(0, 0, 0));
          strip.show();
          delay(1000);
        }

        void loop() {
          rainbow(50);
        }

        void blinkAll(uint32_t color, int wait) {
          strip.fill(color);
          strip.show(); 
          delay(wait); 
          strip.fill(strip.Color(0, 0, 0));
          strip.show(); 
          delay(wait); 
        }

        void colorWipe(uint32_t color, int wait) {
          for(int i=0; i<strip.numPixels(); i++) {
            strip.setPixelColor(i, color);
            strip.show();
            delay(wait);
          }
        }

        void theaterChase(uint32_t color, int wait) {
          for(int a=0; a<10; a++) {
            for(int b=0; b<3; b++) {
              strip.clear();
              for(int c=b; c<strip.numPixels(); c += 3) {
                strip.setPixelColor(c, color);
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
              for(int c=b; c<strip.numPixels(); c += 3) {
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
        ```
</step>

<step>
        <img src="/images/serialmonitor.png">
        <img src="/images/serialmonitor.png">

#### Step 3 - Upload & Code 

<img src="/images/uploadbutton.png">  
        Press the upload button with the arrow after making sure you've selected the correct board (Arduino BLE 33) and port that the Arduino is plugged into.  

<img src="/images/serialmonitor.png">  
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
