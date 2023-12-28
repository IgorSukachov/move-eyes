document.querySelector('body').addEventListener('mousemove', (e) => {
    const eye = document.querySelectorAll('.eye')
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2) // Получаем значение left из css и плюсуем половину ширины 
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2) // ClientWidth and clientHeight - это полная высота и ширина клиентского окна браузера // а offsetWidth and offsetHeight это ширина и высота элемента с границами border и внутренними паддингами
    
        let radian = Math.atan2(e.pageX - x, e.pageY - y) // вычисляем угол относительно положения мыши // pageX и pageY это велечины относительно положения мыши по Х от края области страницы и по Y от положения мыши и до самой верхней точки (невидимой) части страницы.
        let rotation = (radian * (180 / Math.PI) * - 1) + 270
        eye.style.transform = 'rotate(' + rotation + 'deg)'
        // console.log(x, y)
        // console.log(e.pageX, e.pageY)
    })
})

// var img = document.getElementsByTagName('img')
// var div = document.createElement('div')

// for (var i = 0; i < img.length; i++) {
//     if (img[i].width > 300 && img[i].src != '') {
//         var newImg = document.createElement('img')
//         newImg.style.width = '250px'
//         newImg.src = img[i].src
//         var a = document.createElement('a')
//         a.setAttribute('href', img[i].src)
//         a.setAttribute('target', '_blank')
//         a.appendChild(newImg)
//         div.appendChild(a)
//     }
// }

// document.body.insertBefore(div, document.body.firstChild)