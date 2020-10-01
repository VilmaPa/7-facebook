import renderHeader from './render.Header.js'
import renderContent from './render.Header.js'

function renderSinglePost(data) {
    //validacija

    //logika
    console.log('Generuoju viena posta');
    console.log(data);

    return `<div class="post">
                ${renderHeader(data.author)}
                ${renderContent(data.content)}
                ${renderFooter()}



               
            </div>`; 
}

export default renderSinglePost;



 // <header>
                //     Avataras + ${data.author.name} ${data.author.lastname}
                // </header>  
                // <div>
                //         text + name
                // </div>
                // <footer> 
                //     like + coment
                // </footer>