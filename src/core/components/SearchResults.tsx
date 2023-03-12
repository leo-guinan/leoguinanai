const SearchResults = ({ results }) => {
  return (
    <>
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl=[14%] lg:pl-52">
        {results && <div className="flex flex-col space-y-4">{results.results}</div>}
      </div>
    </>
  )
}

export default SearchResults
