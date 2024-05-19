document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#cities-table tbody');

    citiesData.forEach(city => {
        const row = document.createElement('tr');
        row.classList.add('city-row');
        row.innerHTML = `
            <td>${city.name}</td>
            <td>${city.population.toLocaleString()}</td>
            <td>${city.lat}</td>
            <td>${city.lon}</td>
        `;

        const foodsRow = document.createElement('tr');
        foodsRow.classList.add('famous-foods');
        const foodsCell = document.createElement('td');
        foodsCell.colSpan = 4;
        foodsCell.innerHTML = `
            <strong>Famous Foods:</strong>
            <ul>
                ${city.famous_foods.map(food => `<li>${food.english} (${food.japanese})</li>`).join('')}
            </ul>
        `;
        foodsRow.appendChild(foodsCell);

        row.addEventListener('click', () => {
            foodsRow.style.display = foodsRow.style.display === 'table-row' ? 'none' : 'table-row';
        });

        tableBody.appendChild(row);
        tableBody.appendChild(foodsRow);
    });
});
