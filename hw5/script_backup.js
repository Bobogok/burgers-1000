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