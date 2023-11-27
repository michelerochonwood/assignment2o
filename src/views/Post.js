
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Parser } from 'html-to-react';

function Post() {
    const [referencePost, setReferencePost] = useState([]);
    // read id parameter from url
    const { id } = useParams();

    // run effect when component mounts with id dependency
    useEffect(() => {
        document.title = 'Reference Post';

        // fetch the selected blog post from the api using the url param value at the end
        fetch(`https://raw.githubusercontent.com/michelerochonwood/resumeData/main/referenceData.json${id}`)
        .then((response) => response.json())
        .then((referencePost) => {
            setReferencePost(referencePost[0])
            console.log(referencePost)
        });
    },[]);

    // auth check
    if (!sessionStorage.getItem('username')) {
        return (
            <div className="container">
                <div className="alert alert-danger mt-3">
                    User not authenticated.  Please log in.
                </div>
            </div>
        )
    }
    else {
         return (
            <div className="container">
                <h1>{referencePost.name}</h1>
                <h5><i className="bi bi-person-circle"></i> {referencePost.username}</h5>
                <h6>{new Date(referencePost.date).toLocaleString()}</h6>
                <div>{Parser().parse(referencePost.content)}</div>
                <a href="/references" className="btn btn-info m-3">
                    <i className="bi bi-skip-backward-fill"></i> Back to References
                </a>
            </div>
        )
    }
}

export default Post;