export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': '*'
        }
      });
    }

    if (url.pathname.includes('/pic/')) {
      url.hostname = 'lain.bgm.tv';
    } else {
      url.hostname = 'api.bgm.tv';
    }
    
    const isGet = request.method === 'GET' || request.method === 'HEAD';
    const cacheConfig = isGet ? { cacheEverything: true, cacheTtl: 3600 } : undefined;

    const newRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: isGet ? null : request.body,
      redirect: 'follow'
    });

    try {
      const response = await fetch(newRequest, { cf: cacheConfig });
      const newResponse = new Response(response.body, response);
      newResponse.headers.set('Access-Control-Allow-Origin', '*');
      newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      newResponse.headers.set('Access-Control-Allow-Headers', '*');
      
      return newResponse;
    } catch (err) {
      return new Response(`Proxy Error: ${err.message}`, { status: 502 });
    }
  },
};