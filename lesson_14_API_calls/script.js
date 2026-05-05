async function getPosts() {
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    if (!respons.ok) {
      throw new Error("Can't fetch Posts");
    }

    const data = await respons.json();

    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

const newPost = {
  userId: 200,
  title: "new post",
  body: "this is a new post",
};

async function createPost() {
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!respons.ok) {
      throw new Error("Cant craete new post");
    }

    let newData = await respons.json();

    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

createPost();

async function displayPosts() {
  const posts = await getPosts();

  const finalString = posts
    .map((post) => {
      return `  
          
        <div class="post">
        
        <h2> Post Id is: ${post.id} </h2>

        <h3> Post title is: ${post.title} </h3>

        <p> Post body is: ${post.body} </p>

        </div>
        
        `;
    })
    .join("");

  document.querySelector(".container").innerHTML = finalString;
}

// displayPosts();
