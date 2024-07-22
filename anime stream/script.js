// Example: Add a basic JavaScript function
document.addEventListener('DOMContentLoaded', () => {
    console.log('Anime Streaming website loaded');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const animeData = [
      {
        title: 'Attack on Titan',
        description: 'A gripping tale of humanity\'s fight against titans.',
        imgSrc: 'https://via.placeholder.com/300x450'
      },
      {
        title: 'Naruto',
        description: 'Follow Naruto Uzumaki\'s journey to become the strongest ninja.',
        imgSrc: 'https://via.placeholder.com/300x450'
      },
      // Add more anime objects here
    ];
  
    const animeGrid = document.querySelector('.anime-grid');
  
    animeData.forEach(anime => {
      const card = document.createElement('div');
      card.className = 'anime-card';
  
      card.innerHTML = `
        <img src="${anime.imgSrc}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        <p>${anime.description}</p>
      `;
  
      animeGrid.appendChild(card);
    });
  });
  