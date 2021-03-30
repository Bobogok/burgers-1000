window.onload = function() { //как только завершиться загрущка страницы, тело функции будет выполняться
    var ingredients = {      //создаем объект и напоняем его 8ю свойствами со значениями
        tomato: 20,
        mayo: 50,
        potatoe: 20,
        oil: 100,
        bread: 50,
        meat: 250,
        salat: 10,
        water: 2,
    };

    var renderList = document.getElementById('renderList'); // используем метод объекта document и присваиваем элемент переменной
                                                            // теперь наша переменная renderList будет ссылаться на наш элемент под Id
    var keys_ingredients = Object.keys(ingredients);        // используем метод объекта Object, который возвращает нам массив строковых элементов, 
                                                            // соответствующий именам перечисленных свойств, keys_ingredients будет ссылаться на возвращенный массив


    function create_ul_main(title, array_ingredients) {
        // функция создает теги ul и h2 внутри HTML файла
        var h2_element = document.createElement('h2') // объявляем переменную, которая ссылается на создание тега HTML h2
        h2_element.innerHTML = title;                 // используем свойство изменения элемента h2_element на title(наш параметр)
        renderList.appendChild(h2_element);           // предлагаем элементу renderList добавить дочерний элемент h2_element
        create_ingredient(array_ingredients);         // вызываем функцию с аргументом
    };


    function random_kkal(array_ingredients) {
        //функция возвращает значения в виде массива строчных элементов
        var all_kkal = 0;
        var random_array = new Array();

        for (var i = 0; i < array_ingredients.length; i++) {                   // объявляем цикл с условием - true, пока i не превысило значение длины нашего аргумента
            var random = Math.floor(Math.random() * array_ingredients.length); // с каждым повтором цикла значение переменных обновляются
            random_array.push(random);                                         // метод добавляет значение переменной random в конец массива random_array
            all_kkal += ingredients[array_ingredients[random]];                // переменная all_kkal обновляется с каждым циклом на рандомное значение свойства объекта ingredients
        };
        return [all_kkal, random_array];                                       // возвращает значения в виде массива 2 строчных элементов
    }


    function create_ingredient(array_ingredients) {
        // создает рандомные игредиенты, переданные в параметр с условием > 1000ккал
        var ul = document.createElement('ul');      // объявляем переменную, которая ссылается на создание тега HTML ul
        var render = renderList.appendChild(ul);    // объявляем переменную для ссылки на нее в цикле, 
                                                    // переменная в свою очередь ссылается на добавление дочернего элемента в ul
        var cycle = 0;

        while (true) { // БЕСКОНЕЧНАЯ ВЛАСТЬ(то есть цикл), так как значение в условии будет ВСЕГДА true
            var values = random_kkal(array_ingredients); // объявляем переменную со значением массива возвращенного функцией
            var all_kkal = values[0];                    // переменная со знчение 0 индекса в массиве
            var random_array = values[1];                // переменная со знчение 1 индекса в массиве

            if (all_kkal > 1000) { // инструкция if с условием - значение all_kkal больше 1000
                for (var i = 0; i < array_ingredients.length; i++) { // объявляем цикл с условием - true, пока i не превысило значение длины нашего аргумента
                    var li = document.createElement('li');           // переменная с ссылкой на создание элемента HTML тега li
                    li.innerHTML = array_ingredients[random_array[i]] + ': ' + ingredients[array_ingredients[random_array[i]]] + 'ккал'; // изменяем элемент li на конкатенацию
                    render.appendChild(li); // добавляем дочерние элементы li в render
                };
                break; // прерываем бесконечный цикл, после того как закончились создаваться элементы
            }
            else { // иначе добавляем значение +1 к cycle
                cycle += 1;
            };
        };
    
        var li_kkal = document.createElement('li');                      // объявляем переменную, которая ссылается на создание тега HTML li
        li_kkal.innerHTML = 'Всего: ' + all_kkal + 'ккал';               // изменяем значение li_kkal на конкатенацию
        render.appendChild(li_kkal);                                     // добавляем дочерние элементы li в render
        console.log(cycle + ' циклов, чтобы найти рецепт > 1000ккал');   // выводим количество циклов пока не выполнилась инструкция if(сверху)
    };

    // Создание элементов
    create_ul_main('Burger1', keys_ingredients); // Сколько угодно вызваем наши фукции с агрументами (Название и Ингридиенты)
    create_ul_main('Burger2', keys_ingredients);
};