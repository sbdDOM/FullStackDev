const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
];

function getPost(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error something went wrong!!');
            }


        }, 2000);
    }); 
}

//createPost({title: 'Post three', body: 'This is post three'}).then(getPost).catch(err => console.log(err));


//Async 
async function init() {
    await createPost({title: 'Post three', body: 'This is post three'});
    getPost();
}
 init();

//const promise1 = Promise.resolve('Hello World');
//const promise2 = 10;
//const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

//Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

    