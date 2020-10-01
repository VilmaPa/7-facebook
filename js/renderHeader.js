function renderHeader(data, time){
    console.log(data);
    return `<header class="podt-header">
                <a class="avatar-link" href=#></a>
                <img class="avatar" scr="./img/users/homer-simpson.jpg" alt="User profile pictures" + ${data.name} ${data.lastname}
                <div class="post-user">
                    <a href=#>${data.name} ${data.lastname}
                </div>
         </header>`
}
export default renderHeader;