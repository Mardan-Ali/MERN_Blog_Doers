import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/13342592/pexels-photo-13342592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />

      <div className="postinfo">
        <div className="postCats">
          <span className="postcat">Life</span>
          <span className="postcat">Music</span>
        </div>
        <span className="postTitle">Lorem Ipsum Lorem Ipsum</span>
        <hr />
        <span className="postData"> 1 Hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed expedita
        neque id dolor modi quaerat eveniet maiores officia. Ipsum numquam
        quidem laudantium suscipit aut dignissimos, modi nihil, expedita
        adipisci molestiae cumque. Nostrum eveniet repudiandae sit minima
        sapiente quia sunt, voluptas laborum consectetur fugit soluta neque odio
        obcaecati? Explicabo officiis tempore expedita magni ipsum inventore
        quaerat tempora distinctio et maxime incidunt sed, rerum nesciunt libero
        id error ad nihil magnam aliquam debitis ipsa laboriosam illo
        recusandae? Delectus quaerat cupiditate quae doloribus vitae. Alias
        nihil doloribus neque sunt laudantium quam in quasi eligendi distinctio
        assumenda. Adipisci similique id culpa molestias earum minima nulla cum
        hic exercitationem quasi voluptates voluptatibus cumque ipsam sed animi
        nisi veritatis, corporis eos debitis ipsum. Voluptatem expedita
        repellendus quas excepturi vel sed eos ullam eligendi nostrum.
        Distinctio porro minus consectetur nihil, eius laborum consequatur?
        Culpa nam itaque temporibus iure eligendi! Laudantium nisi modi deleniti
        necessitatibus, cupiditate sequi tempore.
      </p>
    </div>
  );
}
