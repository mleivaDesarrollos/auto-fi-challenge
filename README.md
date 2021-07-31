# Coding Challenge - AutoFI - Frontend ReactJS

Hello, I am Maximiliano Leiva, and you call me Max. Nice to meet you! 

In this file I will try to document some steps I did to complete this code challenge.

## Installation

- Download this repository on your local machine with ***git clone***

- Run ***yarn install***

- Run **yarn start**

  ![Screenshot_20210730_191429](README.assets/Screenshot_20210730_191429.png)

## Libraries used on this project

- React With TypeScript
- Redux for state management
- Redux-Saga for asynchronous calls.
- Styled-Components for component styling

## UI Design

I used a forum template from the web for inspiration in the UI. I didn't spend a lot of time on the design because it can be time consuming and I only got 3 hours to implement fully.

## Design Considerations

- I could have used a loader for fetching posts, the fetch delay wasn't more than a few milliseconds, so I decided not to add it
- I use a personal library which uses axios to fetch posts and comments
- To Add comments you first need to get comments from that post
- There are a lot of improvements to be made, specially on the reducer part.
- Next.JS would have worked well for this application too. Blogs and forums takes more advantage of CEO. I decided to use create-react-app because I work a lot with it, and I feel comfortable using it.

