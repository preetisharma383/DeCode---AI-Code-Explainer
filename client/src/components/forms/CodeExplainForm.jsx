import React, {useState, startTransition} from 'react'
import { useActionState } from 'react'
import { explain } from '../../Actions'
import CodeExplanation from '../CodeExplanation'
import Error from '../Error'

const CodeExplainForm = () => {
  const [formState, formAction, isPending] = useActionState(explain, null)
  const [language, setLanguage] = useState('javascript')
  const [code, setCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!code.trim()) return

    const formData = new FormData()
    formData.append('language', language)
    formData.append('code', code)

    // ✅ wrap in startTransition to avoid the warning
    startTransition(()=>{
      formAction(formData)
    })
  }

  const handleDelete = () => setCode('')

  return (
    <div className='w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg'>
      <form onSubmit={handleSubmit}>
        <label className='block mb-2 font-semibold'>Language:</label>
        <select
          name='language'
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
          className='border rounded-lg p-2 w-full mb-4 bg-transparent'
        >
          <option value='javascript'>JavaScript</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
        </select>

        <label className='block mb-2 font-semibold'>Your Code:</label>
        <textarea
          name='code'
          value={code}
          onChange={(e)=>setCode(e.target.value)}
          required
          placeholder='Paste your code here...'
          disabled={isPending}
          className='border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px]'
        />

        <div className='flex gap-3 mt-4'>
          <button
            type='submit'
            disabled={isPending}
            className='px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer'
          >
            {isPending ? 'Explaining...' : 'Explain Code'}
          </button>

          <button
            type='button'
            onClick={handleDelete}
            className='px-4 py-2 rounded-lg border bg-red-500 hover:bg-red-700 text-white transition cursor-pointer'
          >
            Delete Code
          </button>
        </div>
      </form>

      {isPending ? (
        <p className='bg-gray-300 my-3 w-64 p-2 rounded-sm'>Thinking...</p>
      ) : formState?.success ? (
        <CodeExplanation explanation={formState?.data.explanation} />
      ) : (
        formState?.success === false && <Error error={formState?.error} />
      )}
    </div>
  )
}

export default CodeExplainForm
