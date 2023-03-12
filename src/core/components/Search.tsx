import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { useRouter } from "next/router"

const Search = () => {
  const [value, setValue] = useState<string>("")
  const router = useRouter()

  const search = async (event) => {
    event.preventDefault()
    console.log(value)
    void router.push(`/search-results?term=${value}`)
  }
  return (
    <>
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
    </>
  )
}

export default Search
