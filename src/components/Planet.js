import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




class Planet extends React.Component{
    constructor(props){ 
        super(props)
        this.state={items:[], error:''}
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
            window.location.reload(true);
        
        
        } else {
            window.localStorage.setItem(image.url, "1");
            window.location.reload(false);
        } 
      }

      

render(){
    let showdata = this.state.items;
    let _thisReference = this;
    
    if (showdata.length > 0){
        var datasearch = showdata.map(function(value,key){
            value.isLiked = _thisReference.checkIfImageIsLiked(value);
            

        return (<div className='container fluid'>
                    <div className="card">
                        
                        <p id="photo-of-day">(NASA's Astronomy Photo Of The Day)</p>  
                        <div className="card-title">{value.title}</div>   
                        <div className="card-img-top">
                            <img src={value.hdurl} className='img-fluid'/>
                        </div> 
                        
                        <div className="copyright">By {value.copyright} - {value.date}</div>      
                        <div className="card-body">
                            <p className="card-text">{value.explanation}</p>
                            <button className="btn btn-warning" onClick={(e) => _thisReference.likeImage(value)}>{value.isLiked? (<i class="far fa-thumbs-up"></i>) : (<i class="far fa-thumbs-down"></i>)}</button> 
                            <button className="btn btn-dark" onClick={''}><a href="#inputComment"><i class="far fa-comment-dots"></i></a></button>
                            <Popup trigger={<button className="btn btn-primary"><i className="fas fa-share-alt"></i></button>} position="top center"><div><p>Copy Image Link:</p> <p >{value.hdurl}</p> </div></Popup>

                            <div>
                                <span className="num-of-likes">Like</span>
                                <span className="num-of-comments">Comment</span>
                                <span className="num-of-shares">Share</span>
                            </div>
                        </div>
                    </div>
                </div>
            )     
        })
 

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
            <p className="table">{datasearch}</p>
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
       this.setState({items:[data]})

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


 
export default Planet 