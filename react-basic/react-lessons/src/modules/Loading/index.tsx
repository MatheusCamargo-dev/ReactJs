interface Props{
  load: boolean
}
export default function Loading(props: Props) {
  const { load } = props;
  return (
    <>
      <div className={ load ? 'd-flex text-white p-5 align-items-center' : 'd-none'}>
          <h1>Loading</h1>
          <div className=" ms-1 spinner-border text-white" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
    </>
  )
}