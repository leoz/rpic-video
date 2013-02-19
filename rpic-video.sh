#!/bin/bash
export LD_LIBRARY_PATH=../mjpg-streamer/mjpg-streamer/.
../mjpg-streamer/mjpg-streamer/mjpg_streamer -i "input_uvc.so -d /dev/video0 -y" -o "output_http.so -p 3002 -w ."

