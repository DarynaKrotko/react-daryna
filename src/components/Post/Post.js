import {Component} from "react";

class Post extends Component{

    render() {
        const {userId, id, title,body} = this.props.post;
        return(
            <div>
                <div>UserID:{userId}</div>
                <div>ID:{id}</div>
                <div>Title:{title}</div>
                <div>Body:{body}</div>
                <hr/>
            </div>
        )
}
}
export {Post};