import ApiData from './apiConfig';
import ApiEntry from './ApiEntry';

const Api = () => {
  return (
    <div id="api">
      {ApiData.map((apiData) => {
        return <ApiEntry key={apiData.name} data={apiData} />
      })}
    </div>
  )
}
export default Api;