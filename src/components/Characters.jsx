import React, { useState } from 'react'

export default function Characters(props) {
  const {data} = props
  const [char, setChar] = useState('')
  
  const mapList = data.docs.filter(element => {
    if (char === '') {
      return true
    }
    if (element['name'].toLowerCase().includes(char.toLowerCase())) {
      return true
    }
    return false
  })
  
  return (
    <div className='flex flex-col bg-opacity-40  bg-black gap-8 p-4 max-w-full'>
        <input className='text-black p-1' value={char} placeholder='Character Name' onChange={(e) => {setChar(e.target.value)}}></input>
        {mapList.map((char, index) => {
          const keys = Object.keys(char).filter(element => {
            if (element == 'name' || element == '_id') {
                return false
            }
            if (!char[element]) {
                return false
            }
            return true
          })

          return (
            <div key={index} className='max-w-full w-full rounded-2xl '>
                <h1 className='text-2xl sm:text-4xl'>{char.name}</h1>
                {keys.map(title =>{
                    return (
                        <div key={title} >
                            <p>
                                {title}: {char[title]}
                            </p>
                        </div>
                    )
                })}
            </div>
          )
        })}
        
    </div>
  )
}
