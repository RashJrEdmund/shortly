import { REQ_URL, API_KEY } from '../constants';

interface ApiResponse {
  url: string // The URL that was passed in the request.
  key: string // 6-digit key that can be used to reference the shortened URL.
  shrtlnk: string // The fully qualified shortened URL that you can return to the user.
}

function shortenUrl(url: string): Promise<ApiResponse> {
  return fetch(REQ_URL, {
    method: 'POST',
    headers: {
      'api-key': API_KEY,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        url,
      }
    )
  }).then((res) => {
    return res.json() as unknown as ApiResponse;
  });
}

export {
  shortenUrl
}
