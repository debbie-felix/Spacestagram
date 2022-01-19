import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



class Apod extends React.Component{
    constructor(props){ 
        super(props)
        this.state={items:[], value: null, error:''}
    }
    

    checkIfImageIsLiked(image) {
        let ImageAlreadyLiked = window.localStorage.getItem(image.url);
        let isLiked = false;
        if (ImageAlreadyLiked) {
          isLiked = true;
        }
        return isLiked;
      }
      likeImage(image) {
        let ImageAlreadyLiked = this.checkIfImageIsLiked(image);
        if (ImageAlreadyLiked) {
            window.localStorage.removeItem(image.url);
            image.isLiked = false;
        
        
        } else {
            window.localStorage.setItem(image.url, "1");
            image.isLiked = true;
        }
        this.setState({value:image})
      }

      

render(){
    let value = this.state.value;
    let _thisReference = this;
    
    if (value){ 
        value.isLiked = _thisReference.checkIfImageIsLiked(value);
        var datasearch = (<div className='container fluid'>
                    <div className="card">
                        
                        <p id="photo-of-day">(NASA's Astronomy Photo Of The Day)</p>  
                        <div className="card-title">{value.title}</div>   
                        <div className="card-img-top">
                            <img src={value.hdurl} className='img-fluid'/>
                        </div> 
                        
                        <div className="copyright">By {value.copyright} - {value.date}</div>      
                        <div className="card-body">
                            <p className="card-text">{value.explanation}</p>
                            
                            <div className="allBtnDiv">
                                <div>
                                    <button className="btn btn-warning" id="likebtn" onClick={(e) => _thisReference.likeImage(value)}>{value.isLiked? (<i className="far fa-thumbs-up"></i>) : (<i className="far fa-thumbs-down"></i>)}</button> 
                                    <p className="num-of-likes">
                                    {value.isLiked? ('Unlike') : ('Like')}
                                    </p>
                                </div>

                                <div>
                                    <button className="btn btn-dark" id="commentbtn"><a href="#inputComment"><i className="far fa-comment-dots"></i></a></button>
                                    <p className="num-of-comments">Comment</p>
                                </div>

                                <div>
                                    <Popup trigger={<button className="btn btn-primary" id="sharebtn"><i className="fas fa-share-alt"></i></button>} position="top center"><p>Copy Image Link:</p> <p>{value.hdurl}</p></Popup>
                                    <p className="num-of-shares">Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )     
         
 

}else{
    
    var datasearch=
    <div>
        {/* <h1 id="loading">Loading...</h1>     */}
    </div>
}
    
    return(
        <div>
            {/* <p>{this.state.data}</p> */}
            <p>{this.state.error}</p>
            <div className="table">{datasearch}</div>
        </div>
    )
}


componentDidMount(){    
    fetch ('https://api.nasa.gov/planetary/apod?api_key=clLidcMIMzqHcnAaCBbwVO0b9itrUVSf2Q8WBfJb')
    .then( (response)=>{
        return response.json()

    })
    .then((data)=>{
       console.log(data)
       //this.setState({items:[data]})
       this.setState({value:data})

    })
   

    .then( (err)=>{
        this.setState({error:''})
     })

} 
addToState = ()=>{
    let org = this.state.items
    org.push(this.food)
    this.setState({items:org})

}

}


 
export default Apod 