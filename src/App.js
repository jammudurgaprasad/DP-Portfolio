// import Navigation from "./Components/Navigation";
// import Body from "./Components/Body";


// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       <Body/>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Navigation from "./Components/Navigation";
// import Body from "./Components/Body";
// import './index.css';

// function App() {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const toggleNav = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   return (
//     <div className="App">
//       <div className="hamburger" onClick={toggleNav}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <Navigation isVisible={isNavVisible} onItemClick={toggleNav} />
//       <Body />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Navigation from "./Components/Navigation";
// import Body from "./Components/Body";
// import './index.css';

// function App() {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const toggleNav = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   return (
//     <div className="App">
//       {/* Hamburger menu button (visible only on smaller screens) */}
//       <div className="hamburger" onClick={toggleNav}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       {/* Navigation bar */}
//       <Navigation isVisible={isNavVisible} onItemClick={toggleNav} />
//       {/* Body content */}
//       <Body />
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import Navigation from "./Components/Navigation";
import Body from "./Components/Body";
import './index.css';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for better visuals

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="App">
      {/* Hamburger menu button (visible only on smaller screens) */}
      <div className="menu-icon" onClick={toggleNav}>
        {isNavVisible ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="#8c8c8c" />}
      </div>

      {/* Navigation bar */}
      <Navigation isVisible={isNavVisible} onItemClick={toggleNav} />

      {/* Body content */}
      <Body />
    </div>
  );
}

export default App;
