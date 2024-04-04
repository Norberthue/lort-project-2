import React from 'react'

export default function Options(props) {
    const {selection, setSelection} = props
    const questions = [
        'character',
        'movie',
        'book'
    ]

  return (
    <div className='grid grid-cols-3 gap-4'>
        {questions.map((question, index) => {
            return (
                <button onClick={setSelection(question)} className={'p-1 outline-none  rounded-sm' + (question === selection ? ' bg-white text-black ' :' bg-black bg-opacity-30')} key={index}>{question}</button>
            )
        })}
    </div>
  )
}
