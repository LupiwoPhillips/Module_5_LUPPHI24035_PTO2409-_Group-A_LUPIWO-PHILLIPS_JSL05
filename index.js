
    // Expanded Array of Songs
    const songs = [
        { title: "2 Deep", artist: "A-Reece", genre: "Hip-Hop" },
        { title: "Silent Ride", artist: "Westside Boogie", genre: "Hip-Hop" },
        { title: "Save Your Tears For Another Day", artist: "Dandy The Poet", genre: "Hip-Hop"},
        { title: "Cold", artist: "Lucy Park", genre: "R&B"},
        { title: "Glow", artist: "Drake", genre: "Hip-Hop"},
        { title: "Blinding Lights", artist: "The Weeknd", genre: "Pop" },
        { title: "Nights", artist: "Frank Ocean", genre: "R&B" },
        { title: "Sicko Mode", artist: "Travis Scott", genre: "Hip-Hop" },
        { title: "Die For You", artist: "The Weeknd", genre: "Pop" },
        { title: "Come Thru", artist: "Summer Walker", genre: "R&B" }
    ];

    // Guardians and Their Preferred Genres
    const guardians = {
        "Star-Lord": "Hip-Hop",
        "Drax": "Rock",
        "Rocket": "R&B",
        "Groot": "Pop",
        "Gamora": "Hip-Hop"
        };

    // Function to Generate Playlists
    function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById("playlists");

    Object.keys(guardians).map(guardian => {
            const preferredGenre = guardians[guardian];

    // Filter songs that match the guardian's preferred genre
    const playlist = songs.filter(song => song.genre === preferredGenre);

    // Create playlist elements dynamically
    const guardianDiv = document.createElement("div");
            guardianDiv.innerHTML = `<h3>${guardian}'s Playlist (${preferredGenre})</h3>`;

            const songList = document.createElement("ul");
            playlist.forEach(song => {
                    const songItem = document.createElement("li");
                    songItem.textContent = `${song.title} - ${song.artist}`;
                    songList.appendChild(songItem);
                });

                guardianDiv.appendChild(songList);
                playlistsDiv.appendChild(guardianDiv);
            });
        }

    // Call the function to display the playlists
    generatePlaylist(guardians, songs);