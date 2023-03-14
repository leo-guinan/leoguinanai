import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"
import { useMutation } from "@blitzjs/rpc"
import sendMessage from "../../search/mutations/sendMessage"

interface Result {
  id: number
  text: string
  speaker: "user" | "bot"
}

const Search = () => {
  const [value, setValue] = useState("")
  const [results, setResults] = useState<Result[]>([])
  const [sendMessageMutation] = useMutation(sendMessage)
  const [conversation, setConversation] = useState<{ user: string; bot: string }[]>([])
  const search = async (event) => {
    event.preventDefault()
    console.log(value)
    const conversationEntry = {
      user: value,
      bot: "",
    }
    const newResults = [
      ...results,
      {
        id: results.length,
        text: value,
        speaker: "user",
      } as Result,
    ]
    results.push()
    setValue("")
    setResults(newResults)
    const response = await sendMessageMutation({
      message: value,
      conversation: [...conversation, conversationEntry],
    })
    console.log(response)
    newResults.push({
      id: newResults.length,
      text: response,
      speaker: "bot",
    })
    conversationEntry["bot"] = response
    setConversation([...conversation, conversationEntry])
    setResults(newResults)
    // void router.push(`/search-results?term=${value}`)
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="md:flex md:items-center md:justify-between">
          {(!conversation || !value) && (
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                What can I help you with?
              </h2>
            </div>
          )}
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {results.map((result) => (
              <li key={result.id} className="py-4">
                <div className="flex space-x-3">
                  {/*<img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" /> - need bot v person images*/}
                  <div className="flex-1 space-y-1">
                    {/*<div className="flex items-center justify-between">*/}
                    {/*  <h3 className="text-sm font-medium">{result.text}</h3>*/}
                    {/*</div>*/}
                    <p className="text-sm text-gray-500">{result.text}</p>
                  </div>
                </div>
              </li>
            ))}
            <li key="search" className="divide-y divide-gray-200">
              <div className="flex space-x-3">
                <form className="flex flex-col items-center flex-grow w-4/5">
                  <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
                    <input
                      type="text"
                      className="flex-grow  focus:outline-none"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button onClick={(event) => search(event)} className="btn">
                      {" "}
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search
