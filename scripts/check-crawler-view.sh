#!/bin/sh
# Fetch routes as a non-JS AI crawler and summarize what's in the raw HTML.
# Usage: scripts/check-crawler-view.sh http://localhost:8089 / /services/leak-detection ...
BASE=$1; shift
for route in "$@"; do
  html=$(curl -s -A "GPTBot" "$BASE$route" | tr '\n' ' ')
  status=$(curl -s -o /dev/null -w "%{http_code}" -A "GPTBot" "$BASE$route")
  echo "=== $route  (HTTP $status, $(printf %s "$html" | wc -c | tr -d ' ') bytes)"
  printf %s "$html" | grep -o '<title[^>]*>[^<]*</title>' | sed 's/<[^>]*>//g; s/^/  title:     /'
  printf %s "$html" | grep -o '<meta[^>]*name="description"[^>]*content="[^"]*"' | sed 's/.*content="//; s/"$//; s/^/  desc:      /'
  printf %s "$html" | grep -o '<link[^>]*rel="canonical"[^>]*href="[^"]*"' | sed 's/.*href="//; s/"$//; s/^/  canonical: /'
  printf %s "$html" | grep -o '<meta[^>]*property="og:title"' | head -1 | sed 's/.*/  og:title:  present/'
  printf %s "$html" | grep -o '<h1[^>]*>.*</h1>' | sed 's/<\/h1>.*//; s/<[^>]*>//g; s/^/  h1:        /'
  printf %s "$html" | grep -o '"@type":"[A-Za-z]*"' | sort | uniq -c | sort -rn | head -12 | awk '{printf "%s%s(x%s)", (NR==1?"  json-ld:   ":", "), $2, $1} END {print ""}' | sed 's/"@type"://g; s/"//g'
  words=$(printf %s "$html" | sed -n 's/.*<main[^>]*>//p' | sed 's/<\/main>.*//' | sed 's/<[^>]*>/ /g' | wc -w | tr -d ' ')
  echo "  body:      $words words inside <main>"
  printf %s "$html" | sed -n 's/.*<main[^>]*>//p' | sed 's/<[^>]*>/ /g; s/&#x27;/'"'"'/g; s/&amp;/\&/g' | tr -s ' ' | grep -o 'Quick answer.\{0,240\}\|NTP Plumbing is a licensed.\{0,200\}' | head -1 | sed 's/^/  excerpt:   /'
done
