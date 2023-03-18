import { useMutation, useQuery } from "@blitzjs/rpc"
import getPodcastRecommendations from "../queries/getPodcastRecommendations"
import { useState } from "react"
import addPodcastRecommendation from "../mutations/addPodcastRecommendation"

const PodcastRecommendations = () => {
  const [addingRecommendation, setAddingRecommendation] = useState(false)
  const [podcastRecommendations, { setQueryData }] = useQuery(getPodcastRecommendations, {})
  const [podcastName, setPodcastName] = useState("")
  const [podcastDescription, setPodcastDescription] = useState("")
  const [podcastRecommendation, setPodcastRecommendation] = useState("")
  const [podcastLink, setPodcastLink] = useState("")
  const [addPodcastMutation] = useMutation(addPodcastRecommendation)
  const handleAddRecommendation = async () => {
    await addPodcastMutation({
      name: podcastName,
      description: podcastDescription,
      recommendation: podcastRecommendation,
      link: podcastLink,
    })
    setPodcastName("")
    setPodcastDescription("")
    setPodcastRecommendation("")
    setPodcastLink("")
    setAddingRecommendation(false)
    const updated = [
      ...podcastRecommendations,
      {
        name: podcastName,
        description: podcastDescription,
        recommendation: podcastRecommendation,
        link: podcastLink,
      },
    ]
    await setQueryData(updated, { refetch: false })
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setAddingRecommendation(!addingRecommendation)}
            className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add podcast recommendation
          </button>
        </div>
      </div>
      {addingRecommendation && (
        <>
          <div className="mt-8">
            <input
              onChange={(e) => setPodcastName(e.target.value)}
              value={podcastName}
              type="text"
              placeholder="Podcast Name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-8">
            <input
              onChange={(e) => setPodcastLink(e.target.value)}
              value={podcastLink}
              type="text"
              placeholder="Podcast Link"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-8">
            <textarea
              onChange={(e) => setPodcastDescription(e.target.value)}
              value={podcastDescription}
              placeholder="Podcast Description"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-8">
            <textarea
              onChange={(e) => setPodcastRecommendation(e.target.value)}
              value={podcastRecommendation}
              placeholder="Podcast Recommendation"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleAddRecommendation}
              className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add podcast recommendation
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Recommendation
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Link
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {podcastRecommendations.map((recommendation) => (
                  <tr key={recommendation.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {recommendation.name}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {recommendation.description}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {recommendation.recommendation}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {recommendation.link}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {recommendation.name}</span>
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

export default PodcastRecommendations
