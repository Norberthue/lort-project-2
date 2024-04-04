import React from 'react'

export default function Books(props) {
    const {data} = props
    return (
        <div className='flex flex-col gap-6 p-4 bg-opacity-40 break-words bg-black'>
            {data.docs.map((book, index) => {
                return (
                    <div key={index}>
                        <h1 className='text-3xl sm:text-4xl whitespace-pre-line  font-semibold'>{index + 1}: {book.name}</h1> 
                    </div>
                )
            })}
        </div>
    )
}
