// Movies
const moviesArr = [
  {
    title: "Hit: The First Case",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/F69G9Lx6w9PoScHsQK0bUQYY13130760.jpg",
  },
  {
    title: "Top Gun: Maverick",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/P7J6QBtsk758rCVZ0TajtQYY1745960.jpg",
  },
  {
    title: "Orphan: First Kill",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/CQ7uuODTRQD74EEfJPDwUQYY11851548.jpg",
  },
  {
    title: "Nope",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/2BWAUqwpFb62mcHiEntXaAYY10954984.jpg",
  },
  {
    title: "The Next 365 Days",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/grT28qkCjf9qbW421hzHFAYY21106646.jpg",
  },
  {
    title: "Cuttputlli",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/eM6dhYLs5LR3jRRzICEOdgYY15315164.jpg",
  },
  {
    title: "Shamshera",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/vmbS5vig6F7y3oRuZRkHugYY8426926.jpg",
  },
  {
    title: "Deja Vu",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/6CfRAB1gviZFhyWsK8IMDQYY15097330.jpg",
  },
  {
    title: "Sita Ramam",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/OpZt68x1USWw4IwH49M14gYY20850406.jpg",
  },
  {
    title: "Dobaaraa",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/1srBZRpeJ0pbW4fT7ktiVwYY14042066.jpg",
  },
  {
    title: "Uri",
    year: 2019,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/0IhNmMvXLhghUAj2sZgMZQYY8291224.jpg",
  },
  {
    title: "Cobra",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/jfFZ6X2ACbpykVVsoXZhgAYY9466814.jpg",
  },
  {
    title: "Jurassic World",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/8EZ9vIAm4IpAZUdLuho9gwYY8041270.jpg",
  },
  {
    title: "The Vanished",
    year: 2018,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/AbDZEU9nBJZBwBWpgRprZwYY6955298.jpg",
  },
  {
    title: "Dark Knight Rises",
    year: 2012,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/flp1AIyyTSW6EoXFZp39jAYY1345836.jpg",
  },
  {
    title: "Avatar",
    year: 2009,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/gR1COWvmGG37Qz2I4V7TSgYY0499549.jpg",
  },
  {
    title: "Vesper",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/Zk9u9CpJkmAEZOyu3ZAq8wYY20225374.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    ticketPrice: 370,
    posterURL:
      "https://www.torrentbd.com/posters/VDZUEqOdFDjt7rKw91WhRQYY4154796.jpg",
  },
  {
    title: "After Ever Happy",
    year: 2022,
    ticketPrice: 340,
    posterURL:
      "https://www.torrentbd.com/posters/ug8FrB12ZEMw5AMZcIbaVAYY13070038.jpg",
  },
  {
    title: "House of the Dragon",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1013_.jpg",
  },
  {
    title: "Attorney Woo",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/aDUZ4745QpjXfgquTzQ5AwYY20869502.jpg",
  },
  {
    title: "The Sandman",
    year: 2022,
    ticketPrice: 370,
    posterURL:
      "https://www.torrentbd.com/posters/BD8VXOgCq4d4P2vBeiG3qAYY1751634.jpg",
  },
  {
    title: "Game of Thrones",
    year: 2011,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/eCEzQi8tgNq6bLUUS6GvPQYY0944947.jpg",
  },
  {
    title: "Devil in Ohio",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/1rN7pJD60NRmxH2TPGEwQQYY15432016.jpg",
  },
  {
    title: "Flower of Evil",
    year: 2020,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/IbnZZQxZZg9RIjknkdCxIgYY11691684.jpg",
  },
  {
    title: "Rubikon",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/TniRZHKO0nZv09JCa8RLZQYY13829262.jpg",
  },
  {
    title: "Into the Deep",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/zZnz5m2SkIqmwjuRjgwMCAYY11005128.jpg",
  },
  {
    title: "Take the Night",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/Ci0Z2AARW9I8CPIn6jev4wYY10680838.jpg",
  },
  {
    title: "Monstrous",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNmJhZDJkMGEtYzQxMC00MDA0LTk4NWItMjljNDRjNTJmNjY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Little Ukraine",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/2QuXs4NbZNZ5XhjOJlyv2QYY11511518.jpg",
  },
  {
    title: "Cadaver",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/uSjfX4CobqC3o0LZ7FDNiQYY11102262.jpg",
  },
  {
    title: "Pil's Adventures",
    year: 2021,
    ticketPrice: 310,
    posterURL:
      "https://www.torrentbd.com/posters/RMg470prsaRlrM6OzzLonQYY15091284.jpg",
  },
  {
    title: "The Art of Passion",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/kJ8XyJDdxZZ6Pe0kqGmwfAYY19380876.jpg",
  },
  {
    title: "Prey",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/DegyyZ5ZNP7LoOiVvnoN1AYY11866324.jpg",
  },
  {
    title: "Luck",
    year: 2022,
    ticketPrice: 340,
    posterURL:
      "https://www.torrentbd.com/posters/5qzrfqkStIP3flwZ4ihYGQYY7214954.jpg",
  },
  {
    title: "Carter",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/6TxRWSmE3HIDvnGZ0pS1ZAYY21237030.jpg",
  },
  {
    title: "Carma",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/CjLfdksflPNI4aqNFf5SFAYY14992864.jpg",
  },
  {
    title: "The Moderator",
    year: 2022,
    ticketPrice: 340,
    posterURL:
      "https://www.torrentbd.com/posters/e2xU0RqLZ4LVuoD3Nj4XHwYY12810902.jpg",
  },
  {
    title: "The Princess",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/ARNOJg3bwASSfJ7cCveoKAYY13406136.jpg",
  },
  {
    title: "Revealer",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/b4mgPbm1On6r6lS5zfLowAYY14661252.jpg",
  },
  {
    title: "Anchor",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/VGEM3CadFzZPTbGwUDVIrwYY19245482.jpg",
  },
  {
    title: "The Witch: Part 2",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/boHrz7AZFY4N6SQknw2ZdQYY13721828.jpg",
  },
  {
    title: "Vikram",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/idJqYus6zjdGAoERtKkLAAYY9179430.jpg",
  },
  {
    title: "Watcher",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/n17TeZ9062keY64ukljBXgYY12004038.jpg",
  },
];

// Display movies
function displayMovies() {
  const moviesEl = document.querySelector(".movies");

  for (let i = 0; i < moviesArr.length; i++) {
    const movie = document.createElement("div");
    movie.classList.add(
      "movie",
      "col",
      "card",
      "p-0",
      "shadow",
      "border-0",
      "rounded-3"
    );

    movie.innerHTML = `
        <div class="movie-poster">
            <img src="${moviesArr[i].posterURL}" class="card-img-top"/>
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold">
              ${moviesArr[i].title} (${moviesArr[i].year})
            </h5>
            <h5 class="fw-bold text-danger">${moviesArr[i].ticketPrice}৳</h5>
            <button class="btn btn-dark fw-bold book-ticket">Book Ticket</button>
        </div>
      `;
    moviesEl.append(movie);
  }
}
displayMovies();

function displayModal() {
  const bookTickets = document.querySelectorAll(".book-ticket");
  const modalWindow = document.querySelector(".modal-window");

  for (let i = 0; i < bookTickets.length; i++) {
    bookTickets[i].addEventListener("click", function () {
      for (let j = 0; j < moviesArr.length; j++) {
        if (i === j) {
          const title = moviesArr[j].title;
          const year = moviesArr[j].year;
          const price = moviesArr[j].ticketPrice;
          const vat = Number((price * 0.07).toFixed(2));
          const subtotal = price + vat;

          modalWindow.style.opacity = 1;
          modalWindow.style.visibility = "visible";

          modalWindow.innerHTML = `
          <span class="close-btn"> ❌ </span>
          <h2 class="fw-bold mt-3">${title} (${year})</h2>
          <h5><strong>Price:</strong> ${price}</h5>
          <h5><strong>VAT</strong> ${vat}</h5>
          <h3><strong>Subtotal:</strong> ${subtotal}</h3>
          <button class="btn btn-danger fw-bold mt-4 buy-now">Buy Now</button>
          `;

          const closeBtn = document.querySelector(".close-btn");
          closeBtn.addEventListener("click", function () {
            modalWindow.style.opacity = 0;
            modalWindow.style.visibility = "hidden";
          });
        }
      }
    });
  }
}

displayModal();
