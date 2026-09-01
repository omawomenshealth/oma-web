#!/usr/bin/env bash
set -Eeuo pipefail

readonly metadata_url='http://metadata.google.internal/computeMetadata/v1'
readonly metadata_header='Metadata-Flavor: Google'

apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends docker.io curl python3
systemctl enable --now docker

image_url="$(curl -fsS -H "$metadata_header" "$metadata_url/instance/attributes/oma-image")"
registry_host="${image_url%%/*}"

access_token="$(
  curl -fsS -H "$metadata_header" "$metadata_url/instance/service-accounts/default/token" \
    | python3 -c 'import json, sys; print(json.load(sys.stdin)["access_token"])'
)"

printf '%s' "$access_token" \
  | docker login -u oauth2accesstoken --password-stdin "https://$registry_host"

docker pull "$image_url"
docker rm -f oma-web 2>/dev/null || true
docker run -d \
  --name oma-web \
  --restart unless-stopped \
  --read-only \
  --tmpfs /tmp:rw,noexec,nosuid,size=64m \
  -p 80:3000 \
  "$image_url"
