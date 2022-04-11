#!/bin/bash
echo "Just in case you have forgotten how to run 'npm build'..."
# It is recommended to publish with yarn, as it updates automaticly
sudo npm run build &&
yarn publish
