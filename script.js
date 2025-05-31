
    // Fungsi API tiruan yang mensimulasikan panggilan async ke API daftar karakter dengan foto
    async function fetchBokuNoHeroCharacters() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: 'Izuku Midoriya',
              role: 'Protagonist, Student',
              quirk: 'One For All',
              photo: '1.jpg'
            },
            {
              id: 2,
              name: 'Katsuki Bakugo',
              role: 'Student',
              quirk: 'Explosion',
              photo: '2.jpg'
            },
            {
              id: 3,
              name: 'All Might',
              role: 'Former No.1 Hero, Teacher',
              quirk: 'One For All (Former)',
              photo: '3.jpg'
            },
            {
              id: 4,
              name: 'Ochaco Uraraka',
              role: 'Student',
              quirk: 'Zero Gravity',
              photo: '4.jpg'
            },
            {
              id: 5,
              name: 'Tenya Iida',
              role: 'Student, Class Rep',
              quirk: 'Engine',
              photo: '5.jpg'
            },
            {
              id: 6,
              name: 'Shoto Todoroki',
              role: 'Student',
              quirk: 'Half-Cold Half-Hot',
              photo: '6.jpg'
            },
            {
              id: 7,
              name: 'Eijiro Kirishima',
              role: 'Student',
              quirk: 'Hardening',
              photo: '7.jpg'
            },
            {
              id: 8,
              name: 'Tsuyu Asui',
              role: 'Student',
              quirk: 'Frog',
              photo: '8.jpg'
            },
            {
              id: 9,
              name: 'Minoru Mineta',
              role: 'Student',
              quirk: 'Pop Off',
              photo: '9.jpg'
            },
            {
              id: 10,
              name: 'Momo Yaoyorozu',
              role: 'Student',
              quirk: 'Creation',
              photo: '10.jpg'
            },
            {
              id: 11,
              name: 'Denki Kaminari',
              role: 'Student',
              quirk: 'Electrification',
              photo: '11.jpg'
            },
            {
              id: 12,
              name: 'Yuga Aoyama',
              role: 'Student',
              quirk: 'Navel Laser',
              photo: '12.jpg'
            },
            {
              id: 13,
              name: 'Fumikage Tokoyami',
              role: 'Student',
              quirk: 'Dark Shadow',
              photo: '13.jpg'
            },
            {
              id: 14,
              name: 'Rikido Sato',
              role: 'Student',
              quirk: 'Sugar Rush',
              photo: '14.jpg'
            },
            {
              id: 15,
              name: 'Mashirao Ojiro',
              role: 'Student',
              quirk: 'Tail',
              photo: '15.jpg'
            },
            {
              id: 16,
              name: 'Mezo Shoji',
              role: 'Student',
              quirk: 'Dupli-Arms',
              photo: '16.jpg'
            },
            {
              id: 17,
              name: 'Koji Koda',
              role: 'Student',
              quirk: 'Anivoice',
              photo: '17.jpg'
            },
            {
              id: 18,
              name: 'Hanta Sero',
              role: 'Student',
              quirk: 'Tape',
              photo: '18.jpg'
            }
          ]);
        }, 1000); // simulate network delay 1 second
      });
    }

    const listContainer = document.getElementById('character-list');
    const searchInput = document.getElementById('search-input');
    let charactersData = [];

    function renderCharacters(characters) {
      listContainer.innerHTML = '';
      if (!characters.length) {
        listContainer.innerHTML = '<p>No matching characters found.</p>';
        return;
      }

      characters.forEach(char => {
        const card = document.createElement('section');
        card.className = 'character-card';
        card.innerHTML = `
          <img class="character-photo" src="${char.photo}" alt="${char.name} photo" loading="lazy" />
          <div class="character-info">
            <h2 class="character-name">${char.name}</h2>
            <p class="character-role">${char.role}</p>
            <span class="character-quirk">Quirk: ${char.quirk}</span>
          </div>
        `;
        listContainer.appendChild(card);
      });
    }

    function filterCharacters(query) {
      const filtered = charactersData.filter(char =>
        char.name.toLowerCase().includes(query.toLowerCase())
      );
      renderCharacters(filtered);
    }

    async function loadCharacters() {
      try {
        charactersData = await fetchBokuNoHeroCharacters();
        renderCharacters(charactersData);
      } catch (error) {
        listContainer.innerHTML = '<p>Error loading characters. Please try again later.</p>';
        console.error('Load characters error:', error);
      }
    }

    // Event listener for search
    searchInput.addEventListener('input', (e) => {
      filterCharacters(e.target.value.trim());
    });

    // Load characters on page load
    window.addEventListener('DOMContentLoaded', loadCharacters);