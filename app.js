const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    });
    
});

const sectionelements=document.querySelectorAll('.sectionobs');
sectionelements.forEach((ele)=>observer.observe(ele));