# React and REST Workshop: Cat Facts

Welcome to the React and REST workshop, where we'll learn how to create a simple web application using React and RESTful APIs. In this workshop, we'll be building two list components: one for listing cat facts retrieved from the Cat Facts API (https://catfact.ninja/facts), and the other for displaying a user's "favorite" cat facts. We'll manage the state in the parent component for both of these lists.

## Table of Contents

1. Prerequisites
2. Opening the Project in GitHub Codespaces
3. Running Your Development Environment
4. Hot Reloading
5. Fetching Cat Facts
6. Displaying Cat Facts
7. Favoriting Cat Facts
8. Final Thoughts

## Prerequisites

This workshop uses [Dev Containers](https://containers.dev/) and [GitHub Codespaces](https://github.com/features/codespaces), which means all dependencies are pre-installed, and you don't have to worry about the setup.

However, in order to utilize GitHub Codespaces, you'll require a GitHub account. You can [sign up by clicking here](https://github.com/signup).

## Opening the Project in GitHub Codespaces

1. Prior to opening the project, ensure you're logged in. If you're not sure, check the top right of this page. If you see [Sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FISU-WebDevClub%2Frest-react-workshop), do that first.

2. Navigate to the top of the page and click "Use this template" -> "Open in codespaces". This should open a new page and connect you to your codespace. Note that building your environment may take a few minutes. In the mean time, check out the next step!

3. While you wait, feel free to ask your neighbors why they're in attendance today and what they hope to learn!

## Running Your Development Environment

1. Awesome! Now that we're all setup, let's start our development environment. This is a crucial step when working on any programming project.

2. In order to do this, enter the following command in your terminal:

```shell
npm run dev
```

## Hot Reloading

1. Lucky for us, we don't have to restart our development environment every time we make a change.

2. To see this in action, re-open codespaces and navigate to the file `/apps/initial/pages/index.tsx`. This is the core of your React application.

3. Try changing the text! When you're done, hit CTRL + S (this saves the current file). Then, return to your web page and observe your awesome changes!

## Fetching Cat Facts

1. Now that we've familiarized ourselves a little bit with our environment, lets get down to business! First things first, we want to display cat facts... so where are we going to get that data?

2. If you guessed an API, you'd be correct! Today, we'll be using the [Cat Facts API](https://catfact.ninja/facts) provided by [Swagger](https://swagger.io/). Don't be shy, click the [Cat Facts API](https://catfact.ninja/facts) link to get a first hand look at the data model we'll be working with!

3. It's important to note, our data comes in the [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) format. If you aren't familiar, here's a short explanation: JSON is a format for structuring data. There are three main components of the JSON structure: objects, arrays, and primitives (like strings, numbers, and booleans). Here's a detailed example of each:

```json
{
  // An object literal. This contains key: value pairs.
  "myFirstArray": [1, "my first string", true], // An array with three primitive types
  "myFavoriteNumber": 1, // A number primitive
  "myFavoriteString": "my favorite string", // A string primitive
  "myFavoriteBoolean": true // A boolean primitive
}
```

4. Now, let's jump back into our code!

## Final Thoughts

If you're curious in learning more, I reckon you look into [Node.js](https://nodejs.org/en/about), the React framework [NextJS](https://nextjs.org/), [Turborepo](https://turbo.build/repo), and [Dev Containers](https://containers.dev/). Fun fact: these are all technologies you used today, you just didn't know it!

Moreover, if you have specific questions about what we did today, feel free to reach out to our workshop author [Ryan Huellen](mailto:rhuellen@iastate.edu).

## Authors

- [Ryan Huellen](https://www.github.com/ryanhaticus)
