import React, {useState} from 'react'
import Options from './Options'
import useFetchData from '../hooks/useFetchData'
import Characters from './Characters'
import Books from './Books'
import Movies from './Movies'
import Loader from './Loader'


export default function Dashboard() {
  const [selection, setSelection] = useState(null)
  const {data, loading, error} = useFetchData(selection)

  function onClickHandler (clickedButton) {
    return () => {
      setSelection(clickedButton)
    }
  }


  const dataRender = {
    'character': <Characters data={data} />,
    'book': <Books data={data} />,
    'movie': <Movies data={data} />,
  }


  return (
    <div className='z-1 relative text-white flex flex-col max-h-screen items-center overflow-y-auto no-scrollbar gap-2'>
        <div className='flex flex-col gap-4 max-w-full'>
          <h1 className='text-6xl mx-auto'>Lotr Info</h1>
          <Options selection={selection} setSelection={onClickHandler}/>
          {loading && (
            <Loader/>
          )}
          {(data && !loading) && (
            dataRender[selection]
          )}
        </div>
        
          
        
    </div>
  )
}
