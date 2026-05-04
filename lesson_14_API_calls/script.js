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

displayPosts();


