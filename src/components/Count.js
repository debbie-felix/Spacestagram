// import React from 'react';


// class Count extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {clicks: 0, show: true};
//     }
  
//     IncrementItem = () => {
//       this.setState({ clicks: this.state.clicks + 1 });
//     }
//     DecreaseItem = () => {
//       this.setState({ clicks: this.state.clicks - 1 });
//     }
//     ToggleClick = () => {
//       this.setState({ show: !this.state.show });
//     }
  
//     render() {
//       return (
//         <div>
//           <button className="btn btn-warning" onClick={this.IncrementItem}><i class="far fa-thumbs-up"></i></button>
//           <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//           <button onClick={this.ToggleClick}>
//             { this.state.show ? 'Hide number' : 'Show number' }
//           </button>
//           { this.state.show ? <p className="num-of-likes">{ this.state.clicks } Likes</p> : '' } 
//         </div>
//       );
//     }
//   }


//   export default Count
  