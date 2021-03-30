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
    var keys_ingredients = Object.keys(ingredients);

    // var burger1 = ['tomato', 'bread', 'meat', 'salat'];
    // var burger2 = ['tomato', 'mayo', 'salat'];
    // var salat = ['oil', 'salat', 'tomato'];
    // var potatoe = ['potatoe', 'oil'];


    function create_ul_main(title, array_ingredients) {
        var add_name = document.createElement('h2')
        add_name.innerHTML = title;
        renderList.appendChild(add_name);

        create_ingredient(array_ingredients);
    };


    function random_kkal(array_ingredients) {
        var all_kkal = 0;
        var random_array = new Array();

        for (var i = 0; i < array_ingredients.length; i++) {
            var random = Math.floor(Math.random() * array_ingredients.length);
            random_array.push(random);
            all_kkal += ingredients[array_ingredients[random]];
        };
        return [all_kkal, random_array];
    }


    function create_ingredient(array_ingredients) {
        var ul = document.createElement('ul');
        var render = renderList.appendChild(ul);
        var cycle = 0;

        while (true) {
            var values = random_kkal(array_ingredients);
            var all_kkal = values[0];
            var random_array = values[1];

            if (all_kkal > 1000) {
                for (var i = 0; i < array_ingredients.length; i++) {
                    var li = document.createElement('li');
                    li.innerHTML = array_ingredients[random_array[i]] + ': ' + ingredients[array_ingredients[random_array[i]]] + 'ккал';
                    render.appendChild(li);
                };
                break;
            }
            else {
                cycle += 1;
            };
        };
    
        var li_kkal = document.createElement('li');
        li_kkal.innerHTML = 'Всего: ' + all_kkal + 'ккал';
        render.appendChild(li_kkal);
        console.log(cycle + ' циклов, чтобы найти рецепт > 1000ккал');
    };

    // Создание элементов
    create_ul_main('Burger1', keys_ingredients);
    create_ul_main('Burger2', keys_ingredients);
}