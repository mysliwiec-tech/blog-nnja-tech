---
title: Flashing Tasmota on Sonoff Mini (without jumper - firmware v3.5.0+)
description: The newest firmware of Sonoff Mini changeg the way how DIY mode can be enabled. We will go through flashing Tasmota on it
author: Dariusz Myśliwiec
created_on: '2020-06-08'
updated_on: '2020-06-08'
cover_image: images/cover/wall-switch.jpg
cover_image_author: 'Photo by Yogesh Pedamkar on Unsplash'
---
## Sonoff Mini
Sonoff Mini is a small device intended to be installed behind standard light switch in the wall. It allows user to have the light toggled through the internet or in the oldschool way - by using the wall switch ;-) Thanks to it's price, ranging from $6-$8 it is a pretty good bang for your bucks! There is one lovely feature - because it's based on ESP8266 chip, it means that we can flash any compatible firmware on it, which could extend it's capabilities or remove it's cloud dependency (if privacy is your concern in IoT solutions).

## Tasmota
[The project](https://github.com/arendst/tasmota/) aims to do things described above. Naming just few of it's features as a teaser:
- adds MQTT capability,
- it's compatible with any ESP8266 device, which means that over 1400+ devices are supported,
- have unified system of templates, which makes it easy to adjust for different kind of devices with no coding required,
- adds timer, scheduling and some scripting capabilities, which means that it can even be used without any server/controller making it fully autonomous,
- mature project, which means good support of community, stability and having frequent security updates.

In short that makes it a perfect choice for having it installed on your Wi-Fi IoT devices.

## Walktrough flashing
### Update to the newest stock firmware
Somebody might not like it, but having the brand new Sonoff Mini first updated to the newest version ensures that the upgrade process run flawless. Actually, Sonoff Mini since v3.5.0 introduces [a new DIY mode](https://github.com/itead/Sonoff_Devices_DIY_Tools/blob/cdebf7108cf1b1784b7f1df333b06df79ab1d66a/SONOFF%20DIY%20MODE%20Protocol%20Doc%20v2.0%20Doc.pdf), which runs a webserver on the device listening to REST calls and allows it to be controlled without any cloud connection. Kind of promising, but the commands are not intuitive.

To get around it we are going to instal Tasmota on it. First thing is to connect the switch to the power (bare minimum of neutral and live wire is enough). Download eWeLink App on your smartphone and pair the switch with a cloud account as instructed on the screen.
As soon as you got it connected, select the specific switch, go to its settings and one of the top options would inform you that there is a newer software available. Just made an update. To finish this step, hold the button on the Sonoff for ~10 seconds (till blue LED starts blinking), and then hold again for ~10 seconds (LED will start blinking in irregular period). You are in the DIY mode!

### Test and unlock OTA flashing
The device is now in the AP mode, so it acts as Wi-Fi Access Point with a name of "sonoff-xxxx" and password "12345678". Access the address of http://10.10.7.1 and provide it with your Wi-Fi credentials. In the moment you should see it connected to your network. Identify it's address on your router (eg. using Fing app).

As soon as you got the IP, you can install the bellow collection in Postman and try to toggle the switch or get device's info (`info` command from Postman collection).

Next, try to unlock the OTA by executing `ota_unlock`. Check if the result of the `info` command now shows `true` next to `otaUnlock` key.

Now, it's time to download 3 files Tasmota binaries from http://thehackbox.org/tasmota/ (go with non-GZipped bins):
- tasmota-wifiman.bin - small size, allows to be uploaded through OTA and connect to Wi-Fi
- tasmota-minimal.bin - expands the fs on ESP8266, so fully fledged binaries can fit in
- tasmota.bin - version that is recommended to install

Calculate the SHA-256 hash of `tasmota-wifiman.bin`:
- MacOS - `shasum -a 256 /path/to/file`
- Linux - `sha256 /path/to/file`
- Windows 10 - Right Click on a file -> CRC SHA -> SHA-256
Copy the hash and paste in the OTA Flash command in `sha256sum` key.
