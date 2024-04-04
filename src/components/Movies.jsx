import React from 'react'

export default function Movies(props) {
  const {data} = props
  return (
    <div className='flex flex-col gap-6 p-4 bg-opacity-40 break-words  bg-black'>
            {data.docs.map((movie, index) => {
                const keys = Object.keys(movie).filter(element => {
                  if (element === 'name' || element === '_id') {
                    return false
                  }
                  return true
                })
  
                return (
                    <div className='' key={index}>
                        <h1 className='text-3xl sm:text-4xl whitespace-pre-line font-semibold'> {movie.name}</h1> 
                        {keys.map(title => {
                          return (
                            <div key={title}>
                              <p>
                                {title}: {movie[title]}
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
