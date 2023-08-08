// GLOBAL VARIABLES
// Get the necessary DOM elements
const form = document.querySelector("form")
const postContainer = document.querySelector("#post-container")
const button = document.querySelector("button#post")

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

// C.R.U.D - 


// FUNCTIONS
// Get All the posts 
const fetchAllPosts = async () => {
  try {
    const request = await fetch(BASE_URL)
    const response = await request.json()
    if(!response) return
    return response.slice(0, 5)

  } catch(err) {
    console.log(err.message)
  }
}

// Display all the posts
const displayPosts = async () => {
  const posts = await fetchAllPosts()
  if(!posts) return

  // Clear the container
  postContainer.innerHTML = ""

  // Loop through the post and append to the post container
  posts.forEach(post => {
    // TODO: Remember to create a new post div here
    const div = createPostCard(post)
    // prepend it to the dom
    postContainer.append(div)
  
  })
}

const createPostCard = ({ id, title, body }) => {
  // Create a new div
  const div = document.createElement("div")
  // Give it some classes
  div.className = "comment mt-4 text-justify float-left"
  div.id = id
  div.innerHTML = `
    <h4>${title}</h4>
    <br>
    <p>${body}</p>

    <div class="d-flex g-2 mt-2 py-4">
      <button class="btn mr-2 btn-sm btn-primary" onclick="editPost(${id})">Edit Post</button>
      <button class="btn btn-sm btn-danger" onclick="deletePost(${id})">Delete Post</button>
    </div>
  `
  return div
}

displayPosts()

// Delete post 
const deletePost = async (id) => {
  // Send a delete request to that end point
  try {
    const request = await fetch(BASE_URL + `/${id}`, { method: "DELETE" })
    console.log(request)
    if(request.status <= 200) {
      document.getElementById(id).remove()
      alert("POST DELETED!")
    }
  } catch (err) {
    alert("ERROR: " + err.message)
  }
}

// Post a `post`
const createPost = async () => {
  // Body
  const body = form.elements.body.value
  const title = form.elements.title.value

  const payload = { 
    userId: Math.floor(Math.random() * 10) + 1,
    body, 
    title 
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }

  try {
    // Update the post button
    button.innerHTML = "Posting..."
    button.disabled = true

    const request = await fetch(BASE_URL, options)
    const response = await request.json()

    // Add the new Post in the task Container
    const div = createPostCard(response)
    postContainer.prepend(div)
      // Stoping User from posting empty post
     
    // Show a message
    alert("Post added")

    // Clear the form
    form.reset()
  }
  catch(err) {
    alert("ERROR: " + err.message)
  }
  finally {
   
    // Update the post button
    button.innerHTML = "Add post"
    button.disabled = false
  }
}


// Update a post


// Delete a post


// EVENTS
form.addEventListener("submit", e => {
  e.preventDefault()
  createPost()
})