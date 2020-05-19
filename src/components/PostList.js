import React ,{ Component } from 'react';
import { fetchPost } from "../actions/index";
import { connect } from "react-redux";
import UserHeader from './UserHeader';
 class PostList extends Component{
     componentDidMount (){
         this.props.fetchPost();
     }
     renderList(){
         return this.props.posts.map(post =>{
            return(
                <div className='item' key={post.id}>
                    <i className="large middel aligned icon user" />
                    <div className="content">
                        <div className="descriptio">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>
                   
                </div>
            );
         });
     }
     render(){
         return(
         <div className="ui relaxed divided list">{this.renderList()}</div>
         );
     }
 } 
 const mapStateToProps = (state) =>{
    return {posts:state.posts};
 }
 export default connect(mapStateToProps,{fetchPost:fetchPost})(PostList);