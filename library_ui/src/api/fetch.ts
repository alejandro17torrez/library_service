import { FetchWithoutToken, Methods, Headers, FetchWithToken } from "../definations/interfaces/fetch";

export default async function fetcWithoutToken({ url, params, method,  data }: FetchWithoutToken) {

  if (params) {
    url += "?"
    Object.entries(params).forEach(([key, value]) => url += "&".concat(`${key}=${value}`));
  };

  if (method === Methods.GET) {
    const response = await fetch(url);
    return response.json();
  }

  const response = fetch(url, {
    method: method,
    headers: {
      'Content-Type': Headers.APPLICATION_JSON,
    },
    body: JSON.stringify(data),
  })

  return response;
}

export async function fetchWithToken({ url, params, method, data, bearerToken }: FetchWithToken) {
  if (params) {
    url += "?"
    Object.entries(params).forEach(([key, value]) => url += "&".concat(`${key}=${value}`));
  };

  if (method === Methods.GET) {
    const response = await fetch(url, {
      headers: {
        'Content-Type': Headers.APPLICATION_JSON,
        'Authorization': `${Headers.BEARER} ${bearerToken}`,
        'Accept': `${Headers.APPLICATION_JSON}`,
      },
    });
    return response.json();
  }

  const response = fetch(url, {
    method: method,
    headers: {
      'Content-Type': Headers.APPLICATION_JSON,
      'Authorization': `${Headers.BEARER} ${bearerToken}`,
      'Accept': `${Headers.APPLICATION_JSON}`,
    },
    body: JSON.stringify(data),
  })

  return response;
}
