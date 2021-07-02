import PlayApi from './playApi';

const openUpApi = (props) => {
  return (
    <div className="openUp">
      <div className="close" onClick={props.onOpenUpCloseClick}>X</div>
      <PlayApi data={props.data} />
    </div>
  )
}
export default openUpApi;