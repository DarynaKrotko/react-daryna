import {Component} from "react";

class Comment extends Component{
    render() {
        const {postId, id, name, email, body} = this.props.comment;
        return(
            <div>
                <div>PostId:{postId}</div>
                <div>ID:{id}</div>
                <div>Name:{name}</div>
                <div>Email:{email}</div>
                <div>Body:{body}</div>
            </div>
        )
    }
}
export {Comment};