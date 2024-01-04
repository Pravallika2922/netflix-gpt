# Netflix GPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validations (useRef hook)
- FireBase Setup
- Deploying our App to production
- Create signUp user account
- Implement signin user API
- Created redux store to add user and remove user.
- Implementing sign in, sign up and sign out using firebase authentication API's createUserEmail, updateProfile,signInEmail
- used OnAuthStateChanged API to get whether auth changes or not
- Implemented Navigation based on the login using {useNavigate} from react-redux
- BugFix - Sign up user display name updated
- BugFix - if the user is not logged in Redirect to browse to Login page and vice versa.
- Unsubscribe the onAuthStateChanged callback.
- Added constants file to the project.
- Register for TMDB API and create a new APP and get access token.
- Get data for NOW PLAYING MOVIES LIST. Make an API call in browse page.
- create a custom hook called useMoviesList to fetch the movies from API and update the store.
- Building Browse page
  - MainContainer
    -VideoBackground
    -VideoTitle
  - SecondaryContainer
    -MovieList\*n
    - Popular -cards\*n
    - Trending -cards\*n
    - Now Playing -cards\*n
    - Recommendations -cards\*n
    - Genre -cards\*n
- Planning the MainContainer and SecondaryContainer.
- Fetch Data from API for trailer Video
- Update store with trailer Video.
- Embedded the youtube video using iframe.
- Used Tailwind to make the MainContainer look better.
- Built a browse page with VideoTitle and VideoBackground.
- Build secondary component
- Built movie list
- build movie card
- TMDB image CDN url
- made the browse page look good using tailwind css
- created usePopularMovies and useUpcomingMovies custom hooks
- Build a movie recommendation system using GPT API built by Open API
  - Add a link in the header
  - Toggle functionality for GPT Search
  - Create GPT Search page by creating two components- GPT Search Bar and GPT Movie Suggestions
  - Created a mulitlingual feature for GPT search page

# Features

- Login/Sign up page
  - Sign in/Sign up form
  - Redirect to browse page
    -Browse page (only comes after authentication)
- Header
- Main Movie
  - Trailer in the background
  - Movie title and descrption
  - Movie suggestions
    - MovieLists \* N
- Netflix GPT page - Search Bar - Movie Suggestions

# useRef hook

Hook used to get the reference of anything without rendering.
