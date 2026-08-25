
function createPost (posts) {
  
  const container = document.createElement('div');
  
  posts.forEach(post => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

      h3.textContent = post.title;
      p.textContent = post.body;
      
      div.setAttribute('id', post.id);
      
      div.append(h3);
      div.append(p);   

      container.append(div);
  });

  return container;
}


async function getData() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await data.json();
      return posts;
    } catch (err) {
      console.log(err);
    } 
  }


const button = document.getElementById('fetch-data');

button.addEventListener('click', async () => {

  const posts = await getData();
  console.log(posts);     
  
  const divs = createPost(posts);
  console.log(divs);

  document.getElementById('posts').append(divs);

});