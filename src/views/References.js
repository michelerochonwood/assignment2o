import { useState, useEffect } from "react";
import { Parser } from "html-to-react";
import { Link } from "react-router-dom";

function Reference() {
  const [referencePosts, setReferencePosts] = useState([]);
  const referenceIcon =
    "https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/reference.png";

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/michelerochonwood/resumeData/main/referenceData.json"
    )
      .then((response) => response.json())
      .then((referencePosts) => setReferencePosts(referencePosts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h3>Add a reference for Michele</h3>
      <a href="/addReference" className="micheleButton2">Add a Reference</a>
      <ul className="list-group">
        {referencePosts.map((post) => (
          <li className="list-group-item" key={post.postId}>
            <h5>
              <img
                src={referenceIcon}
                alt="reference icon"
                width="30px"
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
              />{" "}
              {post.name}
            </h5>
            <div>
              <h6>
                {post.position} | {post.organization}
              </h6>
            </div>
            <div>
              <p className="plainReferences">
                {(post.content).toString().substring(0, 100)}...{" "}
                <Link to={`/post/${post.postId}`} className="micheleButton">
                  Read More
                </Link>
              </p>
            </div>
            <div>
              <h6>Posted:</h6>
              <span className="plainReferences">
                {post.date &&
                  new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
   }
export default Reference;