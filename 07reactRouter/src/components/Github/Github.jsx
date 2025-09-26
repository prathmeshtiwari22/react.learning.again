import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
   // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  // ✅ Defensive check: handle undefined or null data
  if (!data || !data.followers) {
    return <p className="text-center text-red-500">Loading or failed to load GitHub data...</p>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="mt-4">
        <img src={data.avatar_url} alt="GitHub avatar" width={300} />
      </div>
    </div>
  );
}

export default Github;

// ✅ The loader function
export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/prathmeshtiwari22');

    if (!response.ok) {
      throw new Error('GitHub API request failed');
    }

    const data = await response.json();
    console.log("Fetched GitHub data:", data); // for debugging
    return data;
  } catch (error) {
    console.error("Loader error:", error);
    throw error; // Let the route errorElement catch this
  }
};
