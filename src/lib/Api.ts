function getCurrentLanguage() {
  return 'sv-se';
}

const headers = new Headers();

function Api(): {
  init: () => void;
  get: <ResponseType>(resourcePath: string) => Promise<ResponseType>;
  post: <ResponseType>(
    resourcePath: string,
    requestBody: RequestInit['body']
  ) => Promise<ResponseType>;
  put: <ResponseType>(
    resourcePath: string,
    requestBody: RequestInit['body']
  ) => Promise<ResponseType>;
  remove: <ResponseType>(resourcePath: string) => Promise<ResponseType>;
} {
  async function sendRequest<ResponseType>(
    resourcePath: string,
    requestInit: RequestInit
  ): Promise<ResponseType> {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}${resourcePath}`,
      requestInit
    );
    const responseBody: ResponseType = await response.json();

    if (!response.ok) {
      // return rejectWithSjApiError(response, responseBody as ErrorResponse);
      console.error(response, responseBody);
    }

    return responseBody;
  }

  function init(): void {
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('X-api.sj.se-language', getCurrentLanguage());
  }

  function get<ResponseType>(resourcePath: string): Promise<ResponseType> {
    return sendRequest<ResponseType>(resourcePath, {
      headers
    });
  }

  function post<ResponseType>(
    resourcePath: string,
    requestBody: RequestInit['body']
  ): Promise<ResponseType> {
    return sendRequest<ResponseType>(resourcePath, {
      headers,
      method: 'POST',
      body: requestBody
    });
  }

  function put<ResponseType>(
    resourcePath: string,
    requestBody: RequestInit['body']
  ): Promise<ResponseType> {
    return sendRequest<ResponseType>(resourcePath, {
      headers,
      method: 'PUT',
      body: requestBody
    });
  }

  function remove<ResponseType>(resourcePath: string): Promise<ResponseType> {
    return sendRequest<ResponseType>(resourcePath, {
      headers,
      method: 'DELETE'
    });
  }

  return {
    init,
    get,
    post,
    put,
    remove
  };
}

export default Api();
