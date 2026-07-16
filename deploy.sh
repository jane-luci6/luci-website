#!/usr/bin/env bash
# Deploy the LUCI website to the internal review VM (10.10.1.37) on the local network.
#
#   1. Builds the Astro site locally (npm run build -> dist/)
#   2. rsyncs dist/ to the VM web root (/var/www/luci) served by nginx on port 80
#
# After running, the team can review at:  http://10.10.1.37
#
# Requirements (already set up):
#   - SSH key at ~/.ssh/id_ed25519_luci_vm (passwordless login to luci@10.10.1.37)
#   - rsync installed locally (macOS: `brew install rsync` if missing)
#   - Node + npm for the build

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

VM_HOST="luci@10.10.1.37"
VM_PATH="/var/www/luci"
SSH_KEY="$HOME/.ssh/id_ed25519_luci_vm"
SSH_OPTS="ssh -i $SSH_KEY -o StrictHostKeyChecking=no"

if [[ ! -f "$SSH_KEY" ]]; then
  echo "ERROR: SSH key not found at $SSH_KEY" >&2
  exit 1
fi

echo "==> Building site (npm run build)..."
npm run build

echo
echo "==> Syncing dist/ -> $VM_HOST:$VM_PATH ..."
rsync -avz --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r -e "$SSH_OPTS" dist/ "$VM_HOST:$VM_PATH/"

echo
echo "==> Fixing asset permissions on VM (nginx must read as www-data) ..."
$SSH_OPTS "$VM_HOST" "find $VM_PATH -type f -exec chmod 644 {} + && find $VM_PATH -type d -exec chmod 755 {} +"

echo
echo "==> Deployed. Review at: http://10.10.1.37"
