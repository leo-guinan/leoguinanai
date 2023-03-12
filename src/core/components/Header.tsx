import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid"
import Search from "./Search"

const Header = () => {
  const search = (event) => {
    event.preventDefault()
    console.log("search")
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Search />
      </div>
    </header>
  )
}

export default Header
