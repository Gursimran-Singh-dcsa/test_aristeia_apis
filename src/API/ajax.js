const hitUrl = async ({httpMethod, requestUrl, requestBody, apiKey}) => {
  const response = await fetch(requestUrl, {
    method: httpMethod,
    headers: {
      Authorization: apiKey,
      accept: 'application/json'
    },
    mode: 'cors'
  })
  return response;
}
export default hitUrl;