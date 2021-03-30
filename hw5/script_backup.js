// function Image(pic, size, rating) {
//     this.pic = pic;
//     this.size = size;
//     this.rating = rating;
//     this.title = function() {
//         if (this.rating < 5) {
//             alert('Bad pic, not recomendet to view');
//         }
//         else if (this.rating == 5) {
//             alert('Сontroversial pic, maybe good for you');
//         }
//         else {
//             alert('Good pic');
//         }
//     };
//     this.resolution = function() {
//         if (size > 720) {
//             alert('good quality');
//         }
//         else {
//             alert('shit quality');
//         }
//     };
// }

// function Diary(task, complete, complexity) {
//     this.task = task;
//     this.complete = complete;
//     this.complexity = complexity;
//     this.date = new Date();
//     this.is_complete = function() {
//         if (this.complete) {
//             alert('Task complete, good job');
//         }
//         else {
//             alert('not done, hurry');
//         }
//     };
//     this.difficult = function() {
//         if (this.complexity > 5) {
//             alert('Task is hard!');
//         }
//         else {
//             alert('Task is not hard')
//         }
//     }
// }


// var cat_pic = new Image('Cat', 1080, 7);
// var dog_pic = new Image('Doge', 720, 4);
// var house_pic = new Image('House', 2160, 9);

// cat_pic.title();
// cat_pic.resolution();

// console.log(cat_pic)


// var task1 = new Diary('bye cock', false, 5);
// var task2 = new Diary('bye cheese', true, 1);
// var task3 = new Diary('complete task', false, 6);

// task1.is_complete();
// task3.difficult()

// console.log(task1)


window.onload = function() {
    var ingredients = {
        tomato: 20,
        mayo: 50,
        potatoe: 20,
        oil: 100,
        bread: 50,
        meat: 250,
        salat: 10,
        water: 2,
    }

    var renderList = document.getElementById('renderList');

    var burger1 = ['tomato', 'bread', 'meat', 'salat'];
    var burger2 = ['tomato', 'mayo', 'salat'];
    var salat = ['oil', 'salat', 'tomato'];
    var potatoe = ['potatoe', 'oil'];


    function create_ul_main(title, array_ingredients) {
        var add_name = document.createElement('h2')
        add_name.innerHTML = title;
        renderList.appendChild(add_name);

        create_ingredient(array_ingredients);
    };


    function create_ingredient(array_ingredients) {
        var ul = document.createElement('ul');
        var render = renderList.appendChild(ul);

        var all_kkal = 0;

        for (var i = 0; i < array_ingredients.length; i++) {
            // var random = Math.floor(Math.random() * array_ingredients.length);
            var li = document.createElement('li');
            li.innerHTML = array_ingredients[i] + ': ' + ingredients[array_ingredients[i]] + 'ккал';
            render.appendChild(li);
            all_kkal += ingredients[array_ingredients[i]];
        }

        var li_kkal = document.createElement('li');
        li_kkal.innerHTML = 'Всего: ' + all_kkal + 'ккал';
        render.appendChild(li_kkal);
    };

    // Создание элементов
    create_ul_main('Burger1', burger1);
    create_ul_main('Burger2', burger2);
    create_ul_main('Salat', salat);
    create_ul_main('Potatoe', potatoe);
}