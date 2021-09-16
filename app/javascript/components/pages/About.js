import React from "react";

const About = () => {
  return (
    <div className="h-full w-screen flex flex-wrap  flex-row justify-center items-center bg-yellow-300 py-40">
      <br />
      <div class=" justify-content-initial text-3xl uppercase font-black max-w-md space-y-32">
        <p class="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
          <h3>Jared </h3>
          <h3>Project Manager</h3>
          <br />
          <img
            class=" flex items-center inline-block h-44 w-44 rounded-full object-cover ring-2 ring-white"
            src="https://avatars.githubusercontent.com/u/85851208?s=96&v=4"
            alt="Jared"
          />
          <br />
          <br />
          <h5 className="text-xl ">
            Over the past several months, I have been cultivating my skillset as
            a full-stack developer. I have experience writing in several coding
            languages, such as HTML, CSS, Ruby and Javascript, and enjoy working
            both front and backend development.
          </h5>
        </p>

        <br />

        <p class="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
          <h3>Heather </h3>
          <h3>Product Manager</h3>
          <br />
          <img
            class="inline-block h-44 w-44 rounded-full object-cover ring-2 ring-white"
            src="https://avatars.githubusercontent.com/u/85851116?s=96&v=4"
            alt="Heather"
          />
          <br />
          <br />
          <h5 className="text-xl ">
            I am a full stack software developer that enjoys team collaboration, clean
            code and puts a strong emphasis on user driven development.
          </h5>
        </p>

        <br />

        <p class="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
          <h3>Lauralyn </h3>
          <h3>Tech Lead/Anchor </h3>
          <br />
          <img
            class="inline-block h-44 w-44 rounded-full object-cover ring-2 ring-white"
            src="https://media-exp1.licdn.com/dms/image/C5603AQHqDBiQtKAJIw/profile-displayphoto-shrink_100_100/0/1516795728228?e=1636588800&v=beta&t=4flWUM3yYDP50qpvqEenYGeSJNWQsXz04nyoXsKcKDs"
            alt="Lauralyn"
          />
          <br />
          <br />
          <h5 className="text-xl ">
            Over the past several months, I have been cultivating my skillset as
            a full-stack developer. I have experience writing in several coding
            languages, such as HTML, CSS, Ruby and Javascript, and enjoy working
            both front and backend development.
          </h5>
        </p>

        <br />

        <p class="hover:scale-150 hover:z-10 transform ease-in-out transition duration-500">
          <h3>Andy </h3>
          <h3>Design Lead</h3>
          <br />
          <img
            class="inline-block h-44 w-44 rounded-full object-cover ring-2 ring-white"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFrat_KVnW6Pg/profile-displayphoto-shrink_400_400/0/1629402670573?e=1636588800&v=beta&t=_5VGcvLPckJ6ybgce2nkjExpwHStxnI270QS6MUqG2Q"
            alt="Andy"
          />
          <br />
          <br />
          <h5 className="text-xl ">
            Over the past several months, I have been cultivating my skillset as
            a full-stack developer. I have experience writing in several coding
            languages, such as HTML, CSS, Ruby and Javascript, and enjoy working
            both front and backend development.
          </h5>
        </p>
      </div>
    </div>
  );
};

export default About;
