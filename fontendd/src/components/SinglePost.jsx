import React from "react";
import "./singlepost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <a className="link" href="/posts?username=Safak">
                Mardan
              </a>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          aliquid. Neque eos natus nobis, veniam modi quaerat officiis unde
          porro pariatur quae ipsam. Atque cupiditate quod quos obcaecati nobis
          perspiciatis facilis distinctio totam minima ipsa odio velit est error
          nostrum ipsam laudantium labore, earum nam praesentium, explicabo
          culpa. Illum suscipit voluptatibus id delectus eaque debitis. Eius
          rerum deserunt sed mollitia esse, ea minus corporis expedita, earum,
          quo reprehenderit atque blanditiis quod nulla repellendus veniam
          reiciendis harum ipsam exercitationem omnis at assumenda quaerat!
          Numquam nihil corporis culpa iste, et modi explicabo laboriosam
          doloribus sequi qui possimus maiores aspernatur dicta fuga veniam
          laborum recusandae quas repellat deleniti. Necessitatibus commodi
          officiis officia nam facere, a error quisquam in placeat animi aperiam
          suscipit nostrum deserunt rem iure dolore dolorem. Delectus ipsa
          voluptatibus iste corporis atque. Dignissimos quos placeat nihil
          voluptatem iure unde dolore laudantium doloremque perferendis quam
          aperiam ab, eius officiis quae illum perspiciatis.
        </p>
      </div>
    </div>
  );
}
