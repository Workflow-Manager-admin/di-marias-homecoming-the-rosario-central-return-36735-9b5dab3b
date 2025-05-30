#!/bin/bash
cd /home/kavia/workspace/code-generation/di-marias-homecoming-the-rosario-central-return-36735-9b5dab3b/main_container_for_di_marias_homecoming
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

