// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./Pages.css";

// // function Trending() {
// //   const [shows, setShows] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("https://api.tvmaze.com/shows")
// //       .then(res => setShows(res.data.slice(0, 20))) 
// //       .catch(err => console.log(err));
// //   }, []);

// //   return (
// //     <div className="page-container">
// //       <h2>Trending Shows</h2>
// //       <div className="shows-grid">
// //         {shows.map(show => (
// //           <div key={show.id} className="show-card">
// //             <img src={show.image?.medium} alt={show.name} />
// //             <h4>{show.name}</h4>
// //             <p>Rating: {show.rating.average || "N/A"}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Trending;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Pages.css";
// import { Link } from "react-router-dom";

// function Trending() {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.tvmaze.com/shows")
//       .then(res => setShows(res.data.slice(0, 20)))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="page-container">
//       <h2>Trending Shows</h2>

//       <div className="shows-grid">
//         {shows.map(show => (
//           <Link
//             to={`/movie/${movie.id}`}
//             key={show.id}
//             className="show-card-link"
//           >
//             <div className="show-card">
//               <img src={show.image?.medium} alt={show.name} />
//               <h4>{show.name}</h4>
//               <p>Rating: {show.rating.average || "N/A"}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Trending;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pages.css";
import { Link } from "react-router-dom";

function Trending() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then(res => setShows(res.data.slice(0, 20)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="page-container">
      <h2>Trending Shows</h2>

      <div className="shows-grid show-up">
        {shows.map(show => (
          <Link
            to={`/movie/${show.id}`}   // ✅ IMPORTANT
            key={show.id}
            className="show-card-link"
          >
            <div className="show-card">
              <img src={show.image?.medium} alt={show.name} />
              <h4>{show.name}</h4>
              <p>Rating: {show.rating.average || "N/A"}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Trending;