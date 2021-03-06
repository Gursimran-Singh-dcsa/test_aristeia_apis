import './CSS/playApi.css';
import { useState } from 'react';

const PlayApi = (props) => {
  const [playData, setPlayData] = useState(
    {
      httpMethod: 'GET',
      requestUrl: props.data.url,
      requestBody: JSON.stringify({
        "key1": "value1",
        "key2": "value2"
      })
    }
  );

  const [error, setError] = useState(
    {
      isExist: false,
      message: ''
    }
  )

  const httpSelectorHandler = (event) => {
    setPlayData((prevPlayData) => {
      return {
        ...prevPlayData,
        httpMethod: event.target.value
      }
    })
  }
  const UrlHandler = (event) => {
    setPlayData((prevPlayData) => {
      return {
        ...prevPlayData,
        requestUrl: event.target.value
      }
    })
  }

  const formSaveHandler = (event) => {
    event.preventDefault();
  }

  const requestPayLoadHandler = (event) => {
    if ('GET' == playData.httpMethod) {
      setError({
        isExist: true,
        message: 'Can\'t Edit this field in GET method'
      })
      return;
    }
    setPlayData((prevPlayData) => {
      return {
        ...prevPlayData,
        requestBody: event.target.value
      }
    })
  }
  return (
    <form >
      <div className="nameofapi">{props.data.name}</div>
      {error.isExist && <div className="errorMessage">{error.message}</div>}
      <div className="playapi">
        <div className="flexContainer">
          <input className="playapiurl" value={playData.requestUrl} onChange={UrlHandler} />
          <select value={playData.httpMethod} className="playapiselect" onChange={httpSelectorHandler}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
        </select>
        </div>
        <div className="inputoutput">
          <div className ="input">
            <span>Add Request Payload:</span><textarea value={'GET' == playData.httpMethod ? 'Can\'t edit this!!': playData.requestBody} onChange={requestPayLoadHandler} />
          </div>
          <div className="output">
            <span>Response:</span>
            <textarea />
          </div>
        </div>
        <button className="submitButton" type="submit" onClick={formSaveHandler}>Hit now!!</button>
      </div>
    </form>
  );
}
export default PlayApi;