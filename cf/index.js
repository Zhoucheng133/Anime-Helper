const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    url.hostname = url.pathname.includes('/pic/') ? 'lain.bgm.tv' : 'api.bgm.tv';
    url.protocol = 'https:';
    url.port = '';

    const isGet = request.method === 'GET' || request.method === 'HEAD';
    const cacheConfig = isGet ? { cacheEverything: true, cacheTtl: 3600 } : undefined;

    const newRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: isGet ? null : request.body,
      redirect: 'follow',
    });

    try {
      const response = await fetch(newRequest, { cf: cacheConfig });
      const newResponse = new Response(response.body, response);
      for (const [k, v] of Object.entries(CORS_HEADERS)) {
        newResponse.headers.set(k, v);
      }
      return newResponse;
    } catch (err) {
      return new Response(`Proxy Error: ${err.message}`, {
        status: 502,
        headers: CORS_HEADERS,
      });
    }
  },
};