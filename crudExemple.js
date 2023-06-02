console.log('Olá Pessoas!');
console.log('#Construindo um CRUDs');


//CRUD
const miniSocialMedia = {
  usuarios: [
    {
    userName: 'ThiagoLL',
    }
  ],
  post:[
    {
      id: 1,
      owner: 'ThiagoLL',
      content: 'Meu Primeiro Fucking post!!'
    }
  ],
};

// CREAT
function criarPost(dados) {
  miniSocialMedia.post.push({
    id: miniSocialMedia.post.length +1,
    owner: dados.owner,
    content: dados.content
  });
}
criarPost({ owner: 'ThiagoLL', content: 'Segundo Post'});
criarPost({ owner: 'ThiagoLL', content: 'Terceiro Post'});
//console.log(miniSocialMedia.post);

//READ
function pegaPost() {
  return miniSocialMedia.post;
}
console.log(pegaPost());

//UPDATE
function atualizaContentDoPost(id, novoConteudo){
  const postQueVaiSerAtualizada =  pegaPost().find((post)=> {
    return post.id === id;
  })
  console.log(postQueVaiSerAtualizada);
  postQueVaiSerAtualizada.content = novoConteudo;
}
atualizaContentDoPost(1,'Novo conteúdo da Social Media')
console.log(pegaPost());
//DELETE
function apagaPost(id){
  const listaDePostAtualizada = pegaPost().filter((postAtual)=> {
    return postAtual.id !== id;
  })
  miniSocialMedia.post = listaDePostAtualizada;
}

apagaPost();
apagaPost();
apagaPost(3);
console.log(pegaPost());