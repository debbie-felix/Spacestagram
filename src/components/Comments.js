import React from "react";


class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={items:[], show:true}
        this.comment = ''
    }

    render(){
       
        let comment = this.state.items
        let formated = comment.map(function(value,key){
            return<p>{'Anon: ' + value}</p>
          
        })
        return(
                
                <div>
                    {/* {this.state.show? <div className="comments-container">   */}
                     <div className="comments-container">

                        <div className="comment-card"><p className="comment-prompt">You are posting as Anonymous</p>
                            <div className="card-body allComments">
                                <p id="formated-comment">{formated}</p>
                            </div>
                            <input type='text' name='comment' id="inputComment" placeholder="Leave A Comment" onChange={this.addnew}/><br></br>
                            <button className='btn btn-primary' id="submitbtn" onClick={this.addToState}>Post</button><br></br><br></br>
                        </div>
                    </div>
                    {/* : null}                      */}
                    {/* <button id="inputComment" onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'}{this.props.button} Div</button> */}
                </div> 
                      
            )
        }
        

addnew=(event)=>{
    this.comment = event.target.value
    
}
addToState = ()=>{
    let org = this.state.items
    org.push(this.comment)
    this.setState({items:org})
}


}









   
export default Comments










