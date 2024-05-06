const observer  = new IntersectionObserver((entries)=>{
    for(const entrie  of entries){
        if (entrie.isIntersecting){
           entrie.target.classList.add('isObserve')
            observer.unobserve(entrie.target)
        }
    }
},{
    threshold: .4
})

observer.observe(document.querySelector('.image1'))
observer.observe(document.querySelector('.image2'))