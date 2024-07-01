[Intro]

Hello everyone, I’m Pranshul Gupta, and today I’m excited to walk you through a full-stack project I’ve built – a Paytm-like application that allows users to transfer money securely using technologies like JWT, Zod, and Mongoose sessions.





[Sign Up Page]

Let's start with the Sign-Up page. Here, users can create a new account."Also, you can switch between the Sign-Up and Sign-In pages effortlessly by clicking the text here. It's all about providing a smooth user experience! Why do programmers prefer dark mode? Because light attracts bugs!". I’ll enter some details and sign up. Once the sign-up is successful, a token is automatically saved in local storage. Let me show you that by inspecting the page and navigating to the local storage section. This token is crucial for maintaining user sessions securely.

Joke: "Just like we all have that one friend who never forgets our secrets, local storage remembers our token!"

[Redirect to Dashboard]

After signing up, we are redirected to the dashboard thanks to react-router-dom. This dashboard is the heart of our application, showing the user's balance and a list of all users on the platform. The balance is initialized randomly, just so we don't have to deal with banks for now.

[Dashboard Page]

Here we are on the dashboard. It lists all users, including the logged-in user. We plan to filter out the logged-in user in future updates by modifying the map function.

Joke: "Including the logged-in user here is like having a meeting with yourself - sometimes necessary, but often a bit awkward!"

We can also search for users to find them quickly.

[Send Money]

Next, I’ll demonstrate how to send money. I'll click the "Send Money" button next to a user. It takes us to the Send Money page. Here, I’ll enter the amount and click on "Initiate Transfer."
"Sending money is just a few clicks away. Easier than debugging, trust me!"

// Joke: "Sending money here is as easy as sending memes to your friends – just a few clicks and done!"

[Loading Animation]

One thing I haven’t added yet is a loading animation after clicking "Initiate Transfer." Just like an ATM counts your cash(when it makes the sound of counting the cash), a short 2-second loading animation can give users satisfaction that their money is safely transferred. I plan to implement this using the setTimeout hook.

[Receipt Page]

After the transfer is initiated, the user should be redirected to a receipt page to confirm the transaction. This is another feature I’m planning to add using the navigate function of react-router-dom.

[Pending Features]

There are a few more enhancements I have in mind:
1) The "/" route should check if the user has a token. If yes, they should be redirected to the dashboard; otherwise, to the Sign-Up page.
2)  Ensure the logged-in user is not listed among the other users.
3)  Adding an initial letter symbol near the "Send Money" button to avoid confusion.(or i'm just overthinking about it and it doesn't need that)
4) Adding a short loading animation on the "Initiate Transfer" button.
5) Receipt Generation: Automatically generating and displaying a receipt after a transfer.
//Error Handling: Displaying errors on the frontend if an error occurs during Sign-Up, like if the email already exists.
Joke: "We need these enhancements because, just like our code, perfection is always a work in progress!"
  
[Contributing to the Project]

I invite you all to contribute to this project. The repository link is attached with this video. If you have suggestions or improvements, please make a pull request. If it’s good for the project, I’ll be happy to merge it.

Joke: "Think of it as a group project where everyone's the topper!"

[Closing]

Thank you. Feel free to reach out if you have any questions or suggestions. Happy coding!