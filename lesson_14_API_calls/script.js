// async function getPosts() {
//   try {
//     const respons = await fetch("http://localhost:3000/posts", {
//       method: "GET",
//     });

//     if (!respons.ok) {
//       throw new Error("Can't fetch Posts");
//     }

//     const data = await respons.json();

//     return data;
//   } catch (err) {
//     console.log(err.message);
//     return [];
//   }
// }

// const newPost = {
//   userId: 200,
//   title: "new post",
//   body: "this is a new post",
// };

// async function createPost() {
//   try {
//     const respons = await fetch("", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     });

//     if (!respons.ok) {
//       throw new Error("Cant craete new post");
//     }

//     let newData = await respons.json();

//     console.log(newData);
//   } catch (err) {
//     console.log(err);
//   }
// }

// // createPost();

// async function displayPosts() {
//   const posts = await getPosts();

//   const finalString = posts
//     .map((post) => {
//       return `

//         <div class="post">

//         <h2> Post Id is: ${post.id} </h2>

//         <h3> Post title is: ${post.title} </h3>

//         <p> Post body is: ${post.body} </p>

//         </div>

//         `;
//     })
//     .join("");

//   document.querySelector(".container").innerHTML = finalString;
// }

// displayPosts();

async function getPosts() {
  let respons = await fetch("http://localhost:3000/posts", { method: "GET" });

  let data = await respons.json();

  console.log(data);
}

getPosts();

async function createPost(post) {
  const respons = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(post),
  });
}

// setInterval(() => {
//   const newPost = {
//     userId: "11",
//     title: "title eleven",
//     body: "body eleven",
//   };

//   createPost(newPost);
// }, 10000);

async function deletePost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
}

// setInterval(() => {
//   deletePost("5");
// }, 10000);
