function renderSinglePost(data) {
    //validacija

    //logika
    console.log('Generuoju viena posta');
    console.log(data);
    
    return `<div class="post">
                <header>
                    Avataras + ${data.author.name} ${data.author.lastname}
                </header>  
                <div>
                        text + name
                </div>
                <footer> 
                    like + coment
                </footer>
            </div>`; 
}

export default renderSinglePost;