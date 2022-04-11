#!/bin/bash
echo "Just so no one forgets to run npm build before..."
# its preferend publish with yarn, it updating version automatic
sudo npm run build &&
yarn publish