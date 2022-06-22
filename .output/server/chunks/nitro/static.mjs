import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/TheHeader-17632f29.mjs": {
    "type": "application/javascript",
    "etag": "\"4b0b-ZQ5CHewU/9R5Q0MbIn5M8fPn5A8\"",
    "mtime": "2022-06-22T19:14:51.737Z",
    "path": "../public/_nuxt/TheHeader-17632f29.mjs"
  },
  "/_nuxt/bootstrap-424b9d72.mjs": {
    "type": "application/javascript",
    "etag": "\"1af68-QffD+efOzJXpcGEqlyvGM1w+A8Q\"",
    "mtime": "2022-06-22T19:14:51.735Z",
    "path": "../public/_nuxt/bootstrap-424b9d72.mjs"
  },
  "/_nuxt/entry-96e9f8c6.mjs": {
    "type": "application/javascript",
    "etag": "\"65-PDqqeK+kYUvTjuZka0IWQrNV4Mg\"",
    "mtime": "2022-06-22T19:14:51.734Z",
    "path": "../public/_nuxt/entry-96e9f8c6.mjs"
  },
  "/_nuxt/features-65b45322.mjs": {
    "type": "application/javascript",
    "etag": "\"df0-hHhhcjWqcAUGRZrkHErmcePgySI\"",
    "mtime": "2022-06-22T19:14:51.733Z",
    "path": "../public/_nuxt/features-65b45322.mjs"
  },
  "/_nuxt/index-11d84908.mjs": {
    "type": "application/javascript",
    "etag": "\"1ff6-Kr1w9AlC+d9/1BgvpXlCCXRPuek\"",
    "mtime": "2022-06-22T19:14:51.731Z",
    "path": "../public/_nuxt/index-11d84908.mjs"
  },
  "/_nuxt/index-2039b6be.mjs": {
    "type": "application/javascript",
    "etag": "\"10be-214bbE5WUfciG2sVzktjxtqKBLY\"",
    "mtime": "2022-06-22T19:14:51.730Z",
    "path": "../public/_nuxt/index-2039b6be.mjs"
  },
  "/_nuxt/index-260b6d58.mjs": {
    "type": "application/javascript",
    "etag": "\"156b-QYvdT4nUlKVZveWbltp0uB/VqVI\"",
    "mtime": "2022-06-22T19:14:51.729Z",
    "path": "../public/_nuxt/index-260b6d58.mjs"
  },
  "/_nuxt/index-3248a811.mjs": {
    "type": "application/javascript",
    "etag": "\"1ffa-Dv8uaNC5Ie/hdWX3LMQoHXC+L0Q\"",
    "mtime": "2022-06-22T19:14:51.729Z",
    "path": "../public/_nuxt/index-3248a811.mjs"
  },
  "/_nuxt/index-78690531.mjs": {
    "type": "application/javascript",
    "etag": "\"1ff2-uWIJrCx0mkHjnf84RlvSdXNEHfs\"",
    "mtime": "2022-06-22T19:14:51.728Z",
    "path": "../public/_nuxt/index-78690531.mjs"
  },
  "/_nuxt/index-85073833.mjs": {
    "type": "application/javascript",
    "etag": "\"2029-3Rnb1TJeIYm7h0jmrAPrHO1pV2Q\"",
    "mtime": "2022-06-22T19:14:51.727Z",
    "path": "../public/_nuxt/index-85073833.mjs"
  },
  "/_nuxt/index-86688098.mjs": {
    "type": "application/javascript",
    "etag": "\"2023-WLApmlW20FfhDEd0jWL18xxQir4\"",
    "mtime": "2022-06-22T19:14:51.726Z",
    "path": "../public/_nuxt/index-86688098.mjs"
  },
  "/_nuxt/index-878526cd.mjs": {
    "type": "application/javascript",
    "etag": "\"202d-EGAmpqzmNBCA/DaqMxgN+AhUj7U\"",
    "mtime": "2022-06-22T19:14:51.726Z",
    "path": "../public/_nuxt/index-878526cd.mjs"
  },
  "/_nuxt/index-92da030c.mjs": {
    "type": "application/javascript",
    "etag": "\"1ff2-DIEsl3IHTNEojerF5CuD8RPnvZA\"",
    "mtime": "2022-06-22T19:14:51.725Z",
    "path": "../public/_nuxt/index-92da030c.mjs"
  },
  "/_nuxt/index-c0a31364.mjs": {
    "type": "application/javascript",
    "etag": "\"1569-Ugt4XCZYWKB+Ftlj0WLZPRoNk/g\"",
    "mtime": "2022-06-22T19:14:51.725Z",
    "path": "../public/_nuxt/index-c0a31364.mjs"
  },
  "/_nuxt/index-d764ebd3.mjs": {
    "type": "application/javascript",
    "etag": "\"1fb9-q4cxh95M6KFpuyKQowTv0alpNfM\"",
    "mtime": "2022-06-22T19:14:51.724Z",
    "path": "../public/_nuxt/index-d764ebd3.mjs"
  },
  "/_nuxt/index-ddb734f2.mjs": {
    "type": "application/javascript",
    "etag": "\"1578-x0FlZzrEm73idexqlhDTWdUWFrI\"",
    "mtime": "2022-06-22T19:14:51.722Z",
    "path": "../public/_nuxt/index-ddb734f2.mjs"
  },
  "/_nuxt/index-f09497ae.mjs": {
    "type": "application/javascript",
    "etag": "\"1ffe-CKwNl6W/S3pmNecPcE4TrKerP/g\"",
    "mtime": "2022-06-22T19:14:51.722Z",
    "path": "../public/_nuxt/index-f09497ae.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"10fc-+4RlAQIVCrZksvKHy0B3iYymZ9Q\"",
    "mtime": "2022-06-22T19:14:51.720Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/bootstrap.e82792f0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5470-VO/iLhRAgL3IiJYeD4evYrYf2WQ\"",
    "mtime": "2022-06-22T19:14:51.736Z",
    "path": "../public/_nuxt/assets/bootstrap.e82792f0.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/tom/Documents/GitHub/nuxt3-tailwind-starter/dist" + "/" + "1655925286";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
