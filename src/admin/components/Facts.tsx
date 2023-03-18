import { useMutation, useQuery } from "@blitzjs/rpc"
import { useState } from "react"
import addFact from "../mutations/addFact"
import getFacts from "../queries/getFacts"

const Facts = () => {
  const [addingFact, setAddingFact] = useState(false)
  const [facts, { setQueryData }] = useQuery(getFacts, {})
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [addFactMutation] = useMutation(addFact)
  const handleAddFact = async () => {
    await addFactMutation({
      question,
      answer,
    })

    const updated = [
      ...facts,
      {
        question,
        answer,
      },
    ]
    await setQueryData(updated, { refetch: false })
    setQuestion("")
    setAnswer("")
    setAddingFact(false)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setAddingFact(!addingFact)}
            className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add fact
          </button>
        </div>
      </div>
      {addingFact && (
        <>
          <div className="mt-8">
            <input
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              type="text"
              placeholder="Question"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-8">
            <input
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              placeholder="Answer"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleAddFact}
              className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add fact
            </button>
          </div>
        </>
      )}
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Question
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Answer
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {facts.map((fact) => (
                  <tr key={fact.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {fact.question}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {fact.answer}
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {fact.question}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts
