
 const models=[
{
    name:'Bmw 1.16',
    image:'image-js/bmw.jpg',
    link:'https://www.sahibinden.com/',

 },
{
    name:'Bugatti Veiron',
    image:'image-js/bugatti.jpg',
    link: 'https://www.sahibinden.com/',

 },
{
    name:'Fiat Coruier',
    image:'image-js/fiat.jpg',
    link:'https://www.sahibinden.com/',

 },
{
    name:'Mercedes AMG',
    image:'image-js/mercedes.jpg',
    link:'https://www.sahibinden.com/',

 }

];
var index=0;
let slaytCount = models.length;
var interval;
var settings={
    duration:'1000',
    random:false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener("click",function(){

    index--;
    slider(index);
    
});

document.querySelector('.fa-arrow-circle-right').addEventListener("click",function(){

    index++;
    slider(index);
  
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){

    item.addEventListener('mouseleave',function(){
        init(settings);
    });

});

function init(settings){

    var prev;
    interval=setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
                
            }while(index==prev)
         prev=index;
     
        }else{
            if(slaytCount == index+1){
                index= -1;
            }
            slider(index);
            index++;
        }
        slider(index);
        console.log(index);


    }, settings.duration);

};

function slider(i){

    index=i;
    if(i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }
        document.querySelector('.card-img-top').setAttribute('src',models[index].image);
        document.querySelector('.card-title').textContent=models[index].name;
        document.querySelector('.card-link').setAttribute('href',models[index].link)

}

