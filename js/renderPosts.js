  
import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    // validacijos

    //logika
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];

        HTML += renderSinglePost(post);
            

        // ${post.author.name}</div>`;
    }
    // reikiamo elemento paieska HTML
    const feedDOM = document.querySelector('main');

    //perrasome reikiamo html elemento turini
       feedDOM.innerHTML = HTML;
}



export default renderPosts;