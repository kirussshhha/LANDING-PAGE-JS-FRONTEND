function selectCityByRegion() {
  const citiesByRegion = {
    minsk: ["Минск", "Борисов", "Слуцк", "Солигорск"],
    gomel: ["Гомель", "Мозырь", "Жлобин", "Речица"],
    brest: ["Брест", "Барановичи", "Пинск", "Кобрин"],
    vitebsk: ["Витебск", "Орша", "Новополоцк", "Полоцк"],
    mogilev: ["Могилев", "Бобруйск", "Осиповичи"],
    grodno: ["Гродно", "Лида", "Волковыск", "Слоним"],
  };

  const regionSelect = document.getElementById("region");
  const citySelect = document.getElementById("city");

  const selectedRegion = regionSelect.value;

  citySelect.textContent = '';

  if (selectedRegion) {
    const cities = citiesByRegion[selectedRegion];

    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city.toLowerCase();
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}
