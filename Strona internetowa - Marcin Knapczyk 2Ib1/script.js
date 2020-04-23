const numItemsToGenerate = 1;
const randomImg = Math.random() * 10;
function renderItem(){ 
    let item = document.getElementById('randomImg');
    item.innerHTML = `
      <img src="https://picsum.photos/1920/800?random=${randomImg}" alt="beach image"/>
    `  
}
for(let i=0;i<numItemsToGenerate;i++){
    renderItem();
}