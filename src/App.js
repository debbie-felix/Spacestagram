import React from "react";
import './App.css';
import Planet from './components/Planet';
import Comments from './components/Comments';
import Count from './components/Count';



function App() {
    return (
      <div className="row">
            <Planet></Planet>
            <Comments />
      </div>
    );
  }

  export default App;


// class App extends React.Component {
//     render() {
//       return (
//         <div>
//           <div>This is a parent component</div>
//           <Planet />
//           <Comments />
//           <Count/>
//         </div>
//       );
//     }
//   }
     
//   export default App;























