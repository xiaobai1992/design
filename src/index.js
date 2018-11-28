//继承
// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age =age
//     }
//     eat(){
//         alert(`${this.name} eat something`)
//     }
//     speak(){
//         alert(`我的名字是${this.name}，我的年龄是${this.age}`)
//     }
// }
// var zhang = new Person('zhang',20)
// // alert(zhang.eat())
// // alert(zhang.speak())
//
// class Student extends Person {
//     constructor(name,age,number){
//       super(name,age)
//       this,number = number
//   }
//   study(){
//       alert(`${this.name}正在学习`)
//   }
// }
// var xiaoming = new Student('小米',20,1311)
// xiaoming.eat()
// xiaoming.study()




//封装 ts  http://www.typescriptlang.org/play/index.html

// class Person {
//     name
//     age
//     protected weight
//     constructor(name,age){
//         this.name = name
//         this.age = age
//         this.weight = 120
//     }
//     eat(){
//         alert(`${this.name} eat something`)
//     }
//     speak(){
//         alert(`我的名字是${this.name}，我的年龄是${this.age}`)
//     }
//     getWeight() {
//         alert(`我的体重是${this.weight}`)
//     }
// }
//
// class Student extends Person {
//     number
//     private gf
//     constructor(name,age,number){
//         super(name,age)
//         this.number = number
//         this.gf= 'xiaoli'
//     }
//     study(){
//         alert(`${this.name}正在学习`)
//     }
//     getWeight() {
//         alert(`我的体重是${this.weight}`)
//     }
// }
// let xm = new Student('xm', 20,11111111)
// xm.getWeight()
// alert(xm.weight)


//多态
class People {
    constructor(name,house){
        this.name = name
        this.house = house
    }
    saySomething(){

    }
}
class A extends People{
    constructor(name,house){
        super(name,house)
    }
    saySomething(){

    }

}
class B extends People{
    constructor(name,house){
        super(name,house)
    }
    saySomething(){

    }

}



//实例


// class jQuery {
//     constructor(selector){
//         let slice = Array.prototype.slice
//         let dom = slice.call(document.querySelectorAll(selector))
//         let len = dom?dom.length:0
//         for (let i = 0;i<len;i++){
//             this[i]=dom[i]
//         }
//         this.length = len
//         this.seletor = selector||''
//     }
//     append(node){
//
//     }
//     addClass(name){
//
//     }
//     html(data){
//
//     }
//
// }
// window.$ = function (selector) {
//     //工厂模式
//     return new jQuery(selector)
// }
// //执行测试
// var $p = $('p')
// console.log($p)
// console.log($p.addClass)