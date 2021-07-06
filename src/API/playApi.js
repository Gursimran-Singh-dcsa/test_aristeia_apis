import './CSS/playApi.css';
import { useState } from 'react';
import hitUrl from './ajax';

const PlayApi = (props) => {
  const [playData, setPlayData] = useState(
    {
      httpMethod: 'GET',
      requestUrl: props.data.url,
      requestBody: JSON.stringify({
        "key1": "value1",
        "key2": "value2"
      }),
      responseBody: ''
    }
  );

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
    // code to hit on API and set Response
    const res = hitUrl({...playData, apiKey: props.data.key}).then(response => {
      const data = response.body;
      const reader = data.getReader();
      reader.read().then(({done, value}) => {
        const ans = new TextDecoder().decode(value);
        setPlayData((prevPlayData) => {
          return {
            ...prevPlayData, responseBody: ans
          }
        })
        if (done) {
          return;
        }
      });
    })
  }

  const requestPayLoadHandler = (event) => {
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
          { 'GET' !== playData.httpMethod && <div className ="input">
            <span>Add Request Payload:</span><textarea value={playData.requestBody} onChange={requestPayLoadHandler} />
          </div> }
          <div className="output">
            <span>Response:</span>
            <textarea value={playData.responseBody} className={'GET' === playData.httpMethod ? 'onlyOp' : ''} readOnly />
          </div>
        </div>
        <button className="submitButton" type="submit" onClick={formSaveHandler}>Hit now!!</button>
      </div>
    </form>
  );
}
export default PlayApi;