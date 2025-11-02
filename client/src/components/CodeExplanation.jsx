import React, {useState} from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const CodeExplanation = ({explanation}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if(!explanation) return
    try{
      await navigator.clipboard.writeText(explanation)
      setCopied(true)
      setTimeout(()=>setCopied(false),1500)
    }catch(err){
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className='w-full max-w-4xl mt-6 bg-gray-50 p-6 rounded-2xl shadow-lg relative'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-xl font-semibold'>Explanation:</h2>

        {/* copy button */}
        <button
          onClick={handleCopy}
          className='text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1'
          title='Copy explanation'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
          </svg>
          <span className='text-sm'>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/*wrap Markdown inside a styled div instead of giving it className directly */}
      <div className='prose prose-slate max-w-none'>
        <Markdown remarkPlugins={[remarkGfm]}>
          {explanation}
        </Markdown>
      </div>
    </div>
  )
}

export default CodeExplanation
