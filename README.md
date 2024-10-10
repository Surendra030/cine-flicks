# CineFlicks 🎬

CineFlicks is a movie and TV show discovery platform built with **React**. It leverages the **TMDb (The Movie Database) API** to allow users to explore, search, and view detailed information about movies, TV shows, and web series.

## Features

- **Search Movies and TV Shows:** Easily find your favorite movies, TV shows, and web series with an integrated search feature.
- **Categorized Content:** Browse through curated categories like top picks, upcoming movies, trending titles, and more.
- **Detailed Info Pages:** Each movie or TV show has a detailed page with descriptions, cast, ratings, trailers, and related content.
- **Responsive Design:** The UI is optimized for a smooth experience on both desktop and mobile devices.
- **Routing:** Seamless navigation between different sections using React Router.

## File Structure

Here's a brief overview of the project's main components:

### `/src/Pages/`
- **Home.jsx** - The landing page showcasing featured movies and shows.
- **Movies.jsx** - Displays a list of movies with sorting and filtering options.
- **TvShows.jsx** - Displays a list of TV shows.
- **WebSeries.jsx** - Displays a list of web series.
- **SearchResults.jsx** - Shows the search results based on user queries.

### `/src/Components/`
- **CategoryCard.jsx** - A reusable component to display individual category cards.
- **CategoryGrid.jsx** - Displays a grid of categories like "Top 20 Movies", "Trending", etc.
- **ContentSection.jsx** - A section component to hold grouped movie content.
- **Footer.jsx** - The footer of the application with links and social media.
- **MainNavbar.jsx** - The main navigation bar for the app.
- **MovieCard.jsx** - Displays individual movie information in a card format.
- **MovieContainer.jsx** - Holds and organizes multiple MovieCards.
- **MovieGrid.jsx** - A grid view of movies.
- **MovieInfoSlider.jsx** - A slider that shows detailed movie information.
- **MovieList.jsx** - A list of movies, typically used for related movies or recommendations.
- **MovieOverview.jsx** - Displays the overview and details of a selected movie or TV show.
- **MovieProfile.jsx** - A detailed profile page for movies.
- **RelatedMovies.jsx** - Displays movies related to the selected one.
- **Top20Movies.jsx** - Shows the top 20 most popular movies.
- **TopPicks.jsx** - Shows hand-picked recommendations for users.
- **TrendingMovies.jsx** - Displays a list of trending movies.
- **UpComingMovies.jsx** - Displays upcoming movie releases.

### Additional Files
- **.gitignore** - Specifies files and directories to ignore in Git.
- **package.json** - Lists the dependencies and scripts for the project.
- **vite.config.js** - Configuration for the Vite bundler.
- **eslint.config.js** - Linting configuration for maintaining code quality.

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/Surendra030/cine-flicks.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cine-flicks
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

4. **Create a `.env` file** in the root of your project and add your **TMDb API key** in the following format:

    ```
    VITE_TMDB_API_KEY=your_api_key_here
    ```

    This file will be used to store your TMDb API key securely.

5. Run the development server:
    ```bash
    npm run dev
    ```

The app will be available at `{Not Available At the Moment}`.

## API Integration

This project integrates with the [TMDb API](https://www.themoviedb.org/documentation/api). Make sure to add your **TMDb API key** in the `.env` file for the API calls to work:


## Technologies Used

- **React** - JavaScript library for building user interfaces
- **TMDb API** - For fetching movie and TV show data
- **React Router** - For managing the app's routes
- **Vite** - Frontend build tool for fast and optimized builds

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

