#!/bin/bash

for file in content/**/*.tldr; do
    if [[ -f "$file" ]]; then
        echo "Processing: $file"    # /x/y/z.tldr
        dir=$(dirname "$file")      # /x/y
        base=$(basename "$file")    # z.tldr
        # Output will be "/x/y/z.tldr.svg"
        npx -y @kitschpatrol/tldraw-cli export --dark --format svg "$file" --output "$dir" --name "$base"
        echo
    fi
done
