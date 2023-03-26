import {FaSearch} from 'react-icons/fa'

interface Props{
  text: string;
  onChangeFunction?: any;
  onBlurFunction?: any;
  onClickFunction?: any;
  onKeyUpFunction?: any;
}
export default function Search(props: Props) {
  const { text , onChangeFunction, onBlurFunction, onKeyUpFunction, onClickFunction } = props;
  
  const handleBlur = (e:any) => {
    if(onBlurFunction) onBlurFunction(e);
  }
  const handleChange = (e:any) => {
    if(onChangeFunction) onChangeFunction(e);
  }
  const handleKeyUp = (e:any) =>{
    if(onKeyUpFunction && e.key == 'Enter') onKeyUpFunction(e);
  }
  const handleClick = (e:any) => {
    if(onClickFunction) onClickFunction(e);
  }

  return (
    <>
      <h2 className='text-white text-center mt-3'>{text}</h2>
      <div className="input-group d-flex justify-content-center vh-0 mt-1">
        <div className="form-outline" style={{ height: "38px" }}>
          <input type="search" onBlur={handleBlur} onChange={handleChange} onKeyUp={handleKeyUp} placeholder="Search..."className="form-control" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}} key="form2" />
        </div>
        <button type="button" onClick={handleClick} className="btn btn-info text-white btn-sm">
          <FaSearch />
        </button>
      </div>
    </>
  )
}