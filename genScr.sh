#!/bin/bash
cont_name=$1
cd /home/mark/ethereumtest
sed -e "s/CONT_NAME/${cont_name}/g" script.template > ${cont_name}.js

