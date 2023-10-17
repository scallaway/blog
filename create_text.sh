#!/bin/bash

set -euo pipefail

# Create a file with the current date and time in it.
current_date=$(date "+%Y-%m-%d-%H-%M-%S")

# Read the title from user input
echo "Enter the title of the post:"
read -r title

# Replace spaces in the title with hyphens
formatted_title=$(echo "$title" | tr " " "-")

# Create the file
touch "public/texts/${current_date}_${formatted_title}.txt"
