import styles from './posts.module.css';
import {Fragment} from "react";
import PostItem from "./post-item";

const Posts = (props) => {

    const {posts} = props;

    return (
        <Fragment>
            <ul className={`${styles.posts}`}>
                {posts.map((post) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default Posts;