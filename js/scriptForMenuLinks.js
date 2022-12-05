
const topMenuEl = $('#top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add("flex-around")

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
for (let link of menuLinks){
    let para = document.createElement('a');
    para.href = link.href;
    para.innerText = link.text;
    topMenuEl.appendChild(para);
}

const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add("flex-around")

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = 0