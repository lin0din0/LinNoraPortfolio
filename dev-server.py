#!/usr/bin/env python3
# Local dev server that disables all caching, so edits always show up on
# reload instead of the browser silently reusing a stale copy.
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

# Plain HTTPServer handles one connection at a time, so a single long-lived
# <video autoPlay loop> connection blocks every other request (including new
# page navigations) until it closes. ThreadingMixIn serves each connection on
# its own thread so the dev server stays responsive with multiple open tabs
# and looping media.
class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4322
    ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
